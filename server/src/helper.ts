import { ZodError } from "zod";

export const formateError = (error: ZodError) => {
  let errors: any = {};
  error.errors?.map((issue) => {
    errors[issue.path[0]] = issue.message;
  });

  return errors;
};
