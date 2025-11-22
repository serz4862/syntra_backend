import { notificationStore } from "../models/notification.model.js";

export const getMyNotication = (req, res) =>{
    const notes = notificationStore.filter(n =>n.receiverId=== req.user.userId)
    res.json(notes)
}
    