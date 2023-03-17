export const errorMap = {
  fieldRequired: 400,
  invalidField: 400,
  alreadyRegistered: 409,
  tokenError: 401,
  notFound: 404,
  unauthorizedUser: 401,
  typeError: 422,
};

export const mapError = (type: string | undefined): number =>
  errorMap[type as keyof typeof errorMap] || 500;
