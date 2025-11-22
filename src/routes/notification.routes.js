import express from "express"
import { getMyNotication } from "../controllers/notification.controller.js"
import { auth } from "../middleware/auth.js"

const router = express.Router();
router.get("/:userId", auth, getMyNotication)

export default router