import Validator from "validator";
import _ from "lodash";
import { v4 as uuid } from "uuid";
import { ClassService } from "../db";

export enum ClassTypes {
  DANCE = "dance",
  YOGA = "yoga",
  GYM = "gym",
}

export class Class {
  public name: string;
  public type: string;
  public startTime: Date;
  public duration: number;
  public endTime: Date;
  public maxStrength: number;
  public id: string;

  constructor(
    id: string,
    name: string,
    type: ClassTypes,
    maxStrength: number,
    startTime: Date,
    endTime: Date
  ) {
    Class.validateClassData(name, type, maxStrength, startTime, endTime, id);

    this.id = id;
    this.name = name || ``;
    this.type = type;
    this.startTime = startTime;
    this.endTime = endTime;
    this.maxStrength = maxStrength;
    this.duration = endTime.getTime() - startTime.getTime();
  }

  static validateClassData(
    _name: string,
    _type: ClassTypes,
    maxStrength: number,
    startTime: Date,
    endTime: Date,
    id: string
  ) {
    if (maxStrength <= 0) {
      throw new Error("Max Strength must be a positive number");
    }
    if (endTime <= startTime) {
      throw new Error("End time must be after start time");
    }
    if (!Validator.isUUID(id, 4)) {
      throw new Error("Invalid UUID");
    }
  }

  public static newClass(
    name: string,
    type: ClassTypes,
    maxStrength: number,
    startTime: Date,
    endTime: Date
  ): Class {
    const id = uuid();
    const cls = new Class(
      id,
      name,
      type,
      maxStrength,
      new Date(startTime),
      new Date(endTime)
    );
    ClassService.addClass(cls);
    return cls;
  }

  public static fromJson(json: any): Class {
    if (_.isNil(json.type) || !Object.values(ClassTypes).includes(json.type)) {
      throw new Error("Invalid Class Type");
    }
    if (
      (_.isString(json.startTime) && !Validator.isDate(json.startTime)) ||
      !_.isDate(json.startTime)
    ) {
      throw new Error("Invalid Start Time");
    }
    if (
      (_.isString(json.endTime) && !Validator.isDate(json.endTime)) ||
      _.isDate(json.endTime)
    ) {
      throw new Error("Invalid End Time");
    }
    return new Class(
      json.id,
      json.name,
      json.type,
      json.maxStrength,
      json.startTime,
      json.endTime
    );
  }

  public static toJSON(cls: Class) {
    return {
      id: cls.id,
      name: cls.name,
      startTime: cls.startTime.toISOString(),
      endTime: cls.endTime.toISOString(),
    };
  }
}
