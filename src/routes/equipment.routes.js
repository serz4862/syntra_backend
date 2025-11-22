import express from "express"
import { addEquipment,getAllEquipment } from "../controllers/equipment.controller.js"
import {auth} from "../middleware/auth.js"
import { allowRoles } from "../middleware/role.js"

const router = express.Router();
router.post("/equipment", auth, allowRoles("manager"), addEquipment);
router.get("/equipment", auth, getAllEquipment)

export default router