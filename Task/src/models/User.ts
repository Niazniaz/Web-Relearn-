import Validator from "validator";
import _ from "lodash";

export class User {
  public name: string;
  public email: string;
  public createdAt: Date;
  public events: string[];

  constructor(name: string, email: string, createdAt: Date) {
    User.validate(name, email, createdAt);
    this.createdAt = createdAt || new Date();
    this.email = email;
    this.name = name;
  }

  public static fromJson(json: any): User {
    return new User(json.name, json.email, json.createdAt);
  }

  public static toJson(user: User): any {
    return {
      email: user.email,
      name: user.name,
      date: user.createdAt.toISOString(),
    };
  }

  public static validate(name: string, email: string, createdAt: Date): void {
    if (!Validator.isEmail(email)) {
      throw new Error("Invalid email");
    }
    if (!_.isNil(createdAt) && !Validator.isDate(createdAt.toString())) {
      throw new Error("Invalid created at field");
    }
  }
}
