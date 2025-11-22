

import mongoose from 'mongoose'
import {v4 as uuid} from "uuid"


const equipmentSchema = new mongoose.Schema({
    equipmentId : {type: String, default: uuid},
    name:{ type: String},
    currentStatus: {
        type : String,
        enum :['working', 'defective', 'serviced'], default: "working"
    },
    lastServiceDate : Date,
    projectId: String

})

export default mongoose.model("Equipment", equipmentSchema)