import Joi from "joi";
import ILogin from "../Interfaces/ILogin";

const loginSchema = Joi.object<ILogin>({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
});

export {
  loginSchema,
}