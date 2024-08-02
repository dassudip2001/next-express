import express, { Router, Request, Response } from "express";
import { registerSchema } from "../validation/authValidation.js";
import { ZodError } from "zod";
import { formateError } from "../helper.js";
import prisma from "../config/database.js";
import bcrypt from "bcrypt";

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

    // create user
    user = await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      },
    });
    console.log(user);
    return res.json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formateError(error);
      return res.status(400).json(errors);
    }
    return res.status(400).json(error);
  }
});

export default router;
