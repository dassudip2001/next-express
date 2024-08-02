import { ZodError } from "zod";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

export const formateError = (error: ZodError) => {
  let errors: any = {};
  error.errors?.map((issue) => {
    errors[issue.path[0]] = issue.message;
  });

  return errors;
};

export const renderEmailEjs = async (
  fileName: string,
  payload: any
): Promise<string> => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const html = await ejs.renderFile(
    path.resolve(__dirname, `./views/emails/${fileName}.ejs`),
    payload
  );
  return html as string;
};
