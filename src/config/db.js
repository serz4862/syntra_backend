// src/config/db.js
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/equipment-db")
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));