import mongoose from "mongoose";

const tailorSchema = new mongoose.Schema({
    name : {type:String, require:true},
    email : {type:String, require:true, unique:true},
    phone : {type:String},
    password : {type:String, require:true},
    image : {type:String, require:true},
    specialization : {type:String, require:true},  //object
    city : {type:String, require:true},
    experience : {type:String, require:true},
    about : {type:String, require:true},
    available : {type: Boolean, default:true},
    fee : {type:Number, require:true},
    address : {type:String, require:true},
    date : {type:String},
    slots_booked : {type:Object, default:{}}
},{minimize:false})

const tailorModel = mongoose.model.tailors || mongoose.model('tailors', tailorSchema)

export default tailorModel