import express, { Application, Request, Response } from "express";
import "dotenv/config";
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  return res.send("server is running......");
});

app.listen(PORT, () => console.log(`server is running ${PORT}`));
