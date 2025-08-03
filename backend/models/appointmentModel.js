import mongoose from "mongoose";

const appointschema = new mongoose.Schema({
    userId : {type:String, require:true},
    tailId : {type:String, require:true},
    slotDate : {type:String, require:true},
    slotTime : {type:String, require:true},
    tailData : {type:Object, require:true},
    amount : {type:Number, require:true},
    date : {type:String, require:true},
    canceled : {type:Boolean, default:false},
    payement : {type:Boolean, default:false},
    completed : {type:Boolean, default:false}
})

const appointModel = mongoose.model.appoint || mongoose.model('appoint', appointschema)

export default appointModel