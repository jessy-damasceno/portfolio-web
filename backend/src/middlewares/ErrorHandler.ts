import { NextFunction, Request, Response } from 'express';
import IError from '../Interfaces/IError';
import { mapError } from '../utils/mapError';

class ErrorHandler {
  public static handle(
    err: IError,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    const { type, message } = err;

    return res.status(mapError(type)).json({ message });
  }
}

export default ErrorHandler;