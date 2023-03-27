import { Router } from 'express';
import ProjectController from '../Controllers/ProjectController';
import validateNewProject from '../middlewares/validateNewProject';
import validateToken from '../middlewares/validateToken';

const projectRouter = Router();

projectRouter.get('/search', (req, res, next) =>
  new ProjectController(req, res, next).getByAuthor()
);

projectRouter.get('/:id', (req, res, next) =>
  new ProjectController(req, res, next).getById()
);

projectRouter.delete('/:id',
  validateToken,
  (req, res, next) => new ProjectController(req, res, next).findByIdAndRemove()
);

projectRouter.put(
  '/:id',
  validateToken,
  validateNewProject,
  (req, res, next) => new ProjectController(req, res, next).findByIdAndUpdate()
  );

projectRouter
  .route('/')
  .post(
    validateToken,
    validateNewProject,
    (req, res, next) => new ProjectController(req, res, next).create()
    )
  .get((req, res, next) => new ProjectController(req, res, next).getAll());

export default projectRouter;
