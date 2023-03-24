import { NextFunction, Request, Response } from 'express';
import ProjectService from '../Services/ProjectService';
import IError from '../Interfaces/IError';
import { StatusCodes } from 'http-status-codes';

export default class ProjectController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ProjectService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ProjectService();
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
      const projects = await this.service.getAll();
      return this.res.status(StatusCodes.OK).json(projects);
    } catch (error) {
      return this.next({ ...(error as IError) });
    }
  }

  public async getByAuthor() {
    try {
      const { author } = this.req.body;
      const projects = await this.service.findByAuthor(author);
      return this.res.status(StatusCodes.OK).json(projects);
    } catch (err) {
      return this.next({ ...(err as IError) });
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const project = await this.service.findById(id);
      return this.res.status(StatusCodes.OK).json(project);
    } catch (error) {
      return this.next({ ...(error as IError) });
    }
  }

  public async findByIdAndUpdate() {
    const { id } = this.req.params;
    const user = this.req.body;
    try {
      const updatedProject = await this.service.updateById(id, user);

      return this.res.status(200).json(updatedProject);
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
