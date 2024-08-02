import { Router } from "express";
import AuthRoutes from "./authRoutes.js";

const router: Router = Router();

router.use("/api/auth", AuthRoutes);
export default router;
