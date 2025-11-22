import { notificationStore } from "../models/notification.model.js";

export const getMyNotication = (req, res) =>{
    const {userId} = req.params;
    const notes = notificationStore.filter(n => n.receiverId === userId)
    res.json(notes)
}
    