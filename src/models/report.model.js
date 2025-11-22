

import mongoose from "mongoose"
import {v4 as uuid} from "uuid"

const defectSchema = new mongoose.Schema({
    defectId : {type:String , default : uuid},
    equipmentId :{type : String, required: true},
    reaiseBy : {type : String, required : true},
    description : {type: String},
    status :{ type : String, enum: ['open', 'closed'], default : 'open'}

}, {timestamps : true})

export default mongoose.model("DefectReport", defectSchema )