import mongoose from 'mongoose'
import {v4 as uuid } from "uuid"

const userSchema = new mongoose.Schema({
    userId :{type:String, default: uuid},
    name: {type: String},
    email : {type: String , required: true},
    password: {type: String , required: true},
    role: {type: String, enum: ["engineer", "manager"], required: true}

})

export default mongoose.model("User", userSchema)


