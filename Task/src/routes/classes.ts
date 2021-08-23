import express from "express";
import _ from "lodash";
import Validator from "validator";
import { ClassService } from "../db";
import { BadRequestError } from "../errors";
import { Class } from "../models/Class";

const router = express.Router();

router.param("id", (req, res, next, id) => {
  if (!ClassService.getClass(id)) {
    next(new BadRequestError("Class doesn't exists"));
  }
  next();
});

router.post("/", (req, res, next) => {
  const { name, type, startTime, endTime, maxStrength } = req.body;
  try {
    const newClass = Class.newClass(
      name,
      type,
      maxStrength,
      startTime,
      endTime
    );

    res.status(200).json(Class.toJSON(newClass));
  } catch (err) {
    next(new BadRequestError(err.message));
  }
});

router.post("/book/:id", (req, res, next) => {
  let { email } = req.body;
  if (!Validator.isEmail(email)) {
    next(new BadRequestError("Invalid email"));
  }
  try {
    let data = ClassService.registerUser(email, req.params.id);
    if (data === true) {
      res.status(201).json({ message: "Successfully registered" });
      return;
    } else if (_.isNumber(data)) {
      res.status(201).json({
        message: "User added in waiting list",
        waitListNumber: data,
      });
      return;
    }
  } catch (err) {
    next(new BadRequestError(err.message));
  }
});

router.post("/cancel/:id", (req, res, next) => {
  let { email } = req.body;
  if (!Validator.isEmail(email)) {
    next(new BadRequestError("Invalid email"));
  }
  try {
    let data = ClassService.cancelUser(email, req.params.id);
    if (data === true) {
      res.status(201).json({ message: "Successfully removed the user" });
    }
  } catch (err) {
    next(new BadRequestError(err.message));
  }
});

export default router;
