import { NextFunction, Request, Response } from 'express';
import UserService from '../Services/UserService';
import IError from '../Interfaces/IError';
import { StatusCodes } from 'http-status-codes';
import tokenGenerator from '../utils/tokenGenerator';

export default class UserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserService();
  }

  public async login() {
    try {
      const { email, password } = this.req.body;
      const user = await this.service.getByEmailAndPassword(email, password);

      const token = tokenGenerator(user.email);

      return this.res.status(StatusCodes.OK).json({ token });
    } catch (err) {
      this.next(err)
    }
  }

  public async create() {
    try {
      const newProject = await this.service.create(this.req.body);
      return this.res.status(StatusCodes.CREATED).json(newProject);
    } catch (err) {
      return this.next({ ...(err as IError) });
    }
  }

  public async getAll() {
    try {
      const users = await this.service.getAll();
      return this.res.status(StatusCodes.OK).json(users);
    } catch (error) {
      return this.next({ ...(error as IError) });
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const user = await this.service.findById(id);
      return this.res.status(StatusCodes.OK).json(user);
    } catch (error) {
      return this.next({ ...(error as IError) });
    }
  }

  public async findByIdAndUpdate() {
    const { id } = this.req.params;
    const user = this.req.body;
    try {
      const updatedUser = await this.service.updateById(id, user);

      return this.res.status(200).json(updatedUser);
    } catch (error) {
      return this.next({ ...(error as IError) });
    }
  }

  public async findByIdAndRemove() {
    const { id } = this.req.params;
    try {
      await this.service.removeById(id);

      return this.res.status(204).send();
    } catch (error) {
      return this.next({ ...(error as IError) });
    }
  }
}
