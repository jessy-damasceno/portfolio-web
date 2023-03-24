import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import userRouter from './Routes/user.route';
import projectRouter from './Routes/project.route';
import swaggerRouter from './Routes/swagger.route';

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/project', projectRouter);
app.use('/', swaggerRouter);

app.use('/healthz', (_req, res, _next) => res.status(200));

app.use(ErrorHandler.handle);
export default app;
