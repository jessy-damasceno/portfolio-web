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

userRouter.post(
  '/login',
  (req, res, next) => new UserController(req, res, next).validateLoginBody(),
  (req, res, next) => new UserController(req, res, next).login())

export default userRouter;
