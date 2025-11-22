import express from "express" 
import { raiseDefect, closeDefect, getDefects } from "../controllers/defect.controller.js"
import { auth } from "../middleware/auth.js"
import { allowRoles } from "../middleware/role.js"

const router = express.Router()
router.post("/defects", auth, allowRoles("engineer"), raiseDefect);
router.patch("/equipment/:id/status", auth, allowRoles("manager"), closeDefect)
// router.patch("/defects/:id/close", auth, allowRoles("manager"), closeDefect)
router.get("/defects", auth, getDefects)

export default router