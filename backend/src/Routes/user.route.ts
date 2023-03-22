import { Router } from 'express';
import UserController from '../Controllers/UserController';
import validateLoginBody from '../middlewares/validateLogin';
import validateToken from '../middlewares/validateToken';

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
  validateLoginBody,
  (req, res, next) => new UserController(req, res, next).login());

export default userRouter;
