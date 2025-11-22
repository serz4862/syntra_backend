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
  const { defectId } = req.params;

  const defect = await DefectReport.findOneAndUpdate(
    { defectId },
    { status: "closed" },
    { new: true }
  );

  await Equipment.findOneAndUpdate(
    { equipmentId: defect.equipmentId },
    {
      currentStatus: "serviced",
      lastServiceDate: new Date(),
    }
  );
  sendNotification(
    defect.reaiseBy,
    `Your default report ${defectId} has been serviced`
  );
  res.json(defect);
};

export const getDefects = async (req,res)=>{
    const defects = await DefectReport.find();
    res.json(defects)
}