import { Class } from "../models/Class";
import { User } from "../models/User";

const ClassMap = new Map<string, Class>();
const WaitingList = new Map<string, Array<string>>();
const RegisteredList = new Map<string, Array<string>>();

export class ClassService {
  public static addClass(cls: Class) {
    if (ClassMap.has(cls.id)) {
      throw new Error("Class already exists");
    }
    ClassMap.set(cls.id, cls);
  }

  public static getClass(id: string): Class {
    return ClassMap.get(id);
  }

  public static registerUser(email: string, classId: string): boolean | number {
    const classData = ClassService.getClass(classId);
    if (!classData) {
      throw new Error("Class not found");
    }

    let list = RegisteredList.get(classId);

    if (!list) {
      list = new Array<string>();
      RegisteredList.set(classId, list);
    }

    for (let i = 0; i < list.length; i++) {
      if (list[i] === email) {
        throw new Error("User already registered");
      }
    }

    if (classData.maxStrength > list.length) {
      list.push(email);
      return true;
    }

    let waitingList = WaitingList.get(classId);
    if (!waitingList) {
      waitingList = new Array<string>();
      WaitingList.set(classId, waitingList);
    }
    // Check if user is already waiting
    if (WaitingList.has(classId)) {
      for (let i = 0; i < WaitingList.get(classId).length; i++) {
        if (WaitingList.get(classId)[i] === email) {
          throw new Error("User already waiting");
        }
      }
    } else {
      waitingList.push(email);
      return waitingList.length;
    }
  }

  public static cancelUser(email: string, classId: string): boolean {
    let removed = false;
    const classData = ClassService.getClass(classId);
    if (!classData) {
      throw new Error("Class not found");
    }
    if (classData.startTime.getTime() - Date.now() <= 30 * 60 * 1000) {
      throw new Error("Cannot cancel at last moment.");
    }

    let list = RegisteredList.get(classId);
    if (!list) {
      throw new Error("User not registered");
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i] === email) {
        list.splice(i, 1);
        removed = true;
      }
    }

    let waitingList = WaitingList.get(classId);
    if (!waitingList) {
      if (!removed) {
        throw new Error("User not registered");
      } else {
        return true;
      }
    }

    // Check if user is already waiting
    if (waitingList && !removed) {
      for (let i = 0; i < waitingList.length; i++) {
        if (waitingList[i] === email) {
          waitingList.splice(i, 1);
          removed = true;
        }
      }
    }

    if (removed && waitingList && list) {
      list.push(waitingList.shift());
    }

    throw new Error("User not registered");
  }
}
