import express from "express"
import { addEquipment, getAllEquipment, updateEquipmentStatus } from "../controllers/equipment.controller.js"
import {auth} from "../middleware/auth.js"
import { allowRoles } from "../middleware/role.js"

const router = express.Router();
router.post("/", auth, allowRoles("manager"), addEquipment);
router.get("/", auth, getAllEquipment);
router.patch("/:id/status", auth, allowRoles("manager"), updateEquipmentStatus);

export default router