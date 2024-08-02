import express, { Request, Response } from "express";
import prisma from "../config/database.js";

const router = express.Router();

router.get("/verify-email", async (req: Request, res: Response) => {
  const { email, token } = req.query;
  if (!email || !token) {
    return res.status(400).json({ message: "Invalid link" });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  });

  if (token === user?.email_verified_token) {
    await prisma.user.update({
      where: {
        email: email as string,
      },
      data: {
        email_verified_token: null,
        email_verified_at: new Date(),
      },
    });
    return res.redirect(`${process.env.CLIENT_URL}/login`);
  }

  return res.json({ email, token });
});

router.get("/verify-error", (req: Request, res: Response) => {
  return res.status(400).json({ message: "Invalid link" });
});

export default router;
