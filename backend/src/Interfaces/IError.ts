export default interface IError extends Error {
  type: string;
  message: string;
}
