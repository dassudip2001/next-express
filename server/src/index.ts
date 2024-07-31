import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const app: Application = express();

// Correct way to set __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", (req: Request, res: Response) => {
  return res.render("welcome");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
