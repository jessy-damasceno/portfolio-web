export const errorMap = {
  FIELD_REQUIRED: 400,
  INVALID_FIELD: 400,
  ALREADY_REGISTERED: 409,
  TOKEN_ERROR: 401,
  NOT_FOUND: 404,
  UNAUTHORIZED_USER: 401,
  TYPE_ERROR: 422,
};

export const mapError = (type: string | undefined): number =>
  errorMap[type as keyof typeof errorMap] || 500;
