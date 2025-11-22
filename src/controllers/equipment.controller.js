import Equipment from "../models/equipment.model.js"

export const addEquipment = async (req, res) =>{
    const eq = await Equipment.create(req.body);
    res.json(eq)
}

export const getAllEquipment = async(req, res) =>{
    const eqs = await Equipment.find()
    res.json(eqs)
}

export const updateEquipmentStatus = async(req, res) =>{
    const {id} = req.params;
    const {currentStatus} = req.body;
    
    if(!['working', 'defective', 'serviced'].includes(currentStatus)){
        return res.status(400).json({error: 'Invalid status. Must be working, defective, or serviced'})
    }
    
    const equipment = await Equipment.findOneAndUpdate(
        {equipmentId: id},
        {currentStatus, ...(currentStatus === 'serviced' ? {lastServiceDate: new Date()} : {})},
        {new: true}
    );
    
    if(!equipment){
        return res.status(404).json({error: 'Equipment not found'})
    }
    
    res.json(equipment)
}