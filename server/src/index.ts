import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { sendMail } from "./config/mail.js";

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

app.get("/", async (req: Request, res: Response) => {
  const html = await ejs.renderFile(
    path.resolve(__dirname, `./views/emails/send.ejs`),
    { name: "John Doe" }
  );
  // await sendMail("sudip@gmail.com", "Test Email", html);
  // await sendMail("sudip@gmail.com", "Test Email", html);
  await emailQueue.add(emailQueueName, {
    to: "sudip@gmail.com",
    subject: "Test Email",
    body: "Hello World",
  });
  return res.json({ message: "Email sent successfully" });
});

// queue
import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJobs.js";

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
