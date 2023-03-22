import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import userRouter from './Routes/user.route';
import projectRouter from './Routes/project.route';

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/project', projectRouter);
app.use(ErrorHandler.handle);
export default app;
