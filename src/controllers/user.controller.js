import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const register = async(req, res)=>{
    const {name, email, password, role } = req.body
    const hashed = await bcrypt.hash(password,10)
    const user =  await User.create({
        name, email, password:hashed, role
    })
    res.json(user)
};

export const login = async(req, res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email})
    if(!user) return res.status(404).json({message : "Email not found"})
    
    const match = await bcrypt.compare(password, user.password)
    if(!match) return res.status(401).json({message : "Wrong Password"})

    const token  = jwt.sign(
        {userId : user.userId, role: user.role},
        "SECRET_KEY",
        {expiresIn : "1h"}
    );

    res.json({token})
};