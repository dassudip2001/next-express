import { Router } from "express";
import AuthRoutes from "./authRoutes.js";
import VerifyRoutes from "./verifyRoutes.js";

const router: Router = Router();

router.use("/api/auth", AuthRoutes);
router.use("/api/verify", VerifyRoutes);
export default router;
