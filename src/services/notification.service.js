import { notificationStore } from "../models/notification.model.js";

export const sendNotification = (receiverId, message) =>{
    notificationStore.push({
        receiverId,
        message,
        isRead : false,
        createdAt : new Date()
    })
}