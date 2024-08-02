import express, { Router, Request, Response } from "express";
import { registerSchema } from "../validation/authValidation.js";
import { ZodError } from "zod";
import { formateError, renderEmailEjs } from "../helper.js";
import prisma from "../config/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid4 } from "uuid";
import { emailQueue, emailQueueName } from "../jobs/EmailJobs.js";

const router: Router = express.Router();

// register
router.post("/register", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const payload = await registerSchema.parse(body);
    let user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(payload.password, salt);
    payload.password = hashedPassword;

    // token
    const token = await bcrypt.hash(uuid4(), 10);
    const url = `${process.env.APP_URL}/verify-email?email=${payload.email}&token=${token}`;

    const emailBody = await renderEmailEjs("email-verify", {
      name: payload.name,
      url: url,
    });
    // send email
    // await sendMail(payload.email, "Verify Email", emailBody);
    await emailQueue.add(emailQueueName, {
      to: payload.email,
      subject: "Verify Email",
      body: emailBody,
    });

    // create user
    user = await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        email_verified_token: token,
      },
    });
    console.log(user);
    return res.json({ message: "send a verification " });
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formateError(error);
      return res.status(400).json(errors);
    }
    return res.status(400).json(error);
  }
});

export default router;
