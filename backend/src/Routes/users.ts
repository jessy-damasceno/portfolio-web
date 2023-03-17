import { Router } from 'express';
import UserController from '../Controllers/UserController';

const userRouter = Router();

userRouter
  .route('/')
  .post((req, res, next) => new UserController(req, res, next).create())
  .get((req, res, next) => new UserController(req, res, next).getAll());

userRouter.get('/:id', (req, res, next) =>
  new UserController(req, res, next).getById()
);

export default userRouter;
