import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import userRouter from './Routes/users';

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use(ErrorHandler.handle);
export default app;
