import { Router } from "express";
import { onboarding } from "../controllers/user.controller.js";

const router = Router();

router.post("/onboarding", onboarding);

export default router;
