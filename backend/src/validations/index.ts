import Joi from "joi";

export default function validate<T>(payload: T, schema: Joi.ObjectSchema<T>) {
  const { error } = schema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: error.details[0].message,
    }; 
  }
  return { type: null };
};
