import { loginSchema } from "./schemas";
import ILogin from "../Interfaces/ILogin";

function validateLogin(payload: ILogin) {
  const { error } = loginSchema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: error.details[0].message,
    }; 
  }
  return { type: null };
}

export {
  validateLogin,
}