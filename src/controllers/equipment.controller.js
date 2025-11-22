import Equipment from "../models/equipment.model.js"

export const addEquipment = async (req, res) =>{
    const eq = await Equipment.create(req.body);
    res.json(eq)
}

export const getAllEquipment = async(req, res) =>{
    const eqs = await Equipment.find()
    res.json(eqs)
}