import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import UserODM from '../Models/UserODM';

const secret = process.env.JWT_SECRET || 'mY_$3cr&t';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization') as string;
  if (!token) {
    next({
      type: 'TOKEN_ERROR',
      message: 'Expired or invalid token',
    });
  }

  try {
    const { email } = jwt.verify(token, secret) as JwtPayload;
    const userODM = new UserODM();
    const user = await userODM.findByEmail(email);

    if (!user) {
      next({ type: 'TOKEN_ERROR', message: 'Expired or invalid token' });
    }
    next();
  } catch (err) {
    next({ type: 'TOKEN_ERROR', message: 'Expired or invalid token' });
  }
};