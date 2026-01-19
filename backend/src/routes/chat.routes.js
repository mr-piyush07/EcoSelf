import { Router } from "express";
import { futureSelfChat } from "../controllers/chat.controller.js";

const router = Router();

router.post("/future-self", futureSelfChat);

export default router;
