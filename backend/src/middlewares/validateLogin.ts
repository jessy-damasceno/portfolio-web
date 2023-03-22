import { NextFunction, Request, Response } from "express";
import ILogin from "../Interfaces/ILogin";
import validate from "../validations";
import { loginSchema } from "../validations/schemas";

export default function validateLoginBody(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const error = validate<ILogin>(body, loginSchema);

  if (error.type) {
    next(error);
  }
  next();
}