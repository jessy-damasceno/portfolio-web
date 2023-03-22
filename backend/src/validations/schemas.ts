import Joi from "joi";
import ILogin from "../Interfaces/ILogin";
import IProject from "../Interfaces/IProject";

const loginSchema = Joi.object<ILogin>({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
});

const projectSchema = Joi.object<IProject>({
  name: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  img: Joi.string().required(),
  url: Joi.string().required(),
});

export {
  loginSchema,
  projectSchema,
}