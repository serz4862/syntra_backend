import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import equipmentRoutes from "./routes/equipment.routes.js";
import defectRoutes from "./routes/defect.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/defects", defectRoutes);
app.use("/api/notifications", notificationRoutes);


app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;