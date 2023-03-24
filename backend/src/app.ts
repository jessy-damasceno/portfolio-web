import express from 'express';
import cors from 'cors';
import ErrorHandler from './middlewares/ErrorHandler';
import userRouter from './Routes/user.route';
import projectRouter from './Routes/project.route';
import swaggerRouter from './Routes/swagger.route';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/project', projectRouter);
app.use('/', swaggerRouter);

app.get('/healthz', (_req, res) => res.status(200).json({ message: "OK!" }));

app.use(ErrorHandler.handle);
export default app;
