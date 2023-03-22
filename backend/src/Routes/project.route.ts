import { Router } from 'express';
import ProjectController from '../Controllers/ProjectController';
import validateNewProject from '../middlewares/validateNewProject';

const projectRouter = Router();

projectRouter.get('/author', (req, res, next) =>
  new ProjectController(req, res, next).getByAuthor()
);

projectRouter.get('/:id', (req, res, next) =>
  new ProjectController(req, res, next).getById()
);

projectRouter.delete('/:id', (req, res, next) =>
  new ProjectController(req, res, next).findByIdAndRemove()
);

projectRouter.put(
  '/:id',
  validateNewProject,
  (req, res, next) => new ProjectController(req, res, next).findByIdAndUpdate
  );

projectRouter
  .route('/')
  .post(
    validateNewProject,
    (req, res, next) => new ProjectController(req, res, next).create()
    )
  .get((req, res, next) => new ProjectController(req, res, next).getAll());

export default projectRouter;
