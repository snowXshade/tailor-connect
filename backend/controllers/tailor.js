import tailorModel from '../models/tailorModel.js'


const changeAvailabiity = async (req,res) =>{
    try {
        const {tailId} =req.body
        const tailData = await tailorModel.findById(tailId)
        await tailorModel.findByIdAndUpdate(tailId,{available:!tailData.available})
        res.json({success:true, message:'Availability changed'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}

const tailorList = async (req,res) =>{
    try {
        const tailors = await tailorModel.find({}).select(['-password','-email'])
        res.json({success:true, tailors})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export {changeAvailabiity, tailorList}