import DefectReport from "../models/report.model.js";
import Equipment from "../models/equipment.model.js";
import { sendNotification } from "../services/notification.service.js";
import User from "../models/user.model.js";

export const raiseDefect = async (req, res) => {
  const { equipmentId, description } = req.body;

  await Equipment.findOneAndUpdate(
    { equipmentId },
    { currentStatus: "defective" }
  );

  const defect = await DefectReport.create({
    equipmentId,
    description,
    raisedBy: req.user.userId,
  });

  const managers = await User.find({ role: "manager" });
  managers.forEach((m) =>
    sendNotification(m.userId, `New defect raised for equipment ${equipmentId}`)
  );
  res.json(defect);
};

export const closeDefect = async (req, res) => {
  const { id } = req.params;

  const defect = await DefectReport.findOneAndUpdate(
    { defectId: id },
    { status: "closed" },
    { new: true }
  );

  if(!defect){
    return res.status(404).json({error: 'Defect not found'})
  }

  await Equipment.findOneAndUpdate(
    { equipmentId: defect.equipmentId },
    {
      currentStatus: "serviced",
      lastServiceDate: new Date(),
    }
  );
  sendNotification(
    defect.raisedBy,
    `Your defect report ${id} has been serviced`
  );
  res.json(defect);
};

export const getDefects = async (req,res)=>{
    const defects = await DefectReport.find();
    res.json(defects)
}