import { NextFunction, Request, Response } from "express";
import IProject from "../Interfaces/IProject";
import validate from "../validations";
import { projectSchema } from "../validations/schemas";

export default function validateNewProject(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const error = validate<IProject>(body, projectSchema);

  if (error.type) {
    next(error);
  }
  next();
}