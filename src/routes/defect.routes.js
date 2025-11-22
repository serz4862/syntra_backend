import express from "express" 
import { raiseDefect, closeDefect, getDefects } from "../controllers/defect.controller.js"
import { auth } from "../middleware/auth.js"
import { allowRoles } from "../middleware/role.js"

const router = express.Router()
router.post("/", auth, allowRoles("engineer"), raiseDefect);
router.patch("/:id/close", auth, allowRoles("manager"), closeDefect)
router.get("/", auth, getDefects)

export default router