import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import tailorModel from '../models/tailorModel.js'
import jwt from 'jsonwebtoken'


//API for adding Tailor
const addTailors = async (req,res) =>{

    try {
        const {name, email, password, specialization, city, experience, about, fee, address} = req.body;
        const imageFile = req.file

        // console.log({name, email, phone, password, specialization, city, experience, about, available, fee, address},imageFile)

        //ckecking data to add it in mongo
        if(!name || !email || !password || !specialization || !city || !experience || !about || !fee || !address || !imageFile){
            return res.json({success:false, message:"please fill everything!"})
        }

        //validate email
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"invalid email!"})
        }

        //password strong
        if(password.length < 8){
            return res.json({success:false, message:"password should be more than 8 characters!"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword =  await bcrypt.hash(password, salt)

        //image upload to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const tailorData = {
            name,
            email,
            image:imageUrl,
            // phone, 
            password:hashedPassword,
            specialization, 
            city, 
            experience, 
            about, 
            // available, 
            fee, 
            address,
            date: Date.now()
        }

        const newTailor = new tailorModel(tailorData)
        await newTailor.save()

        res.json({success:true, message:"Tailor Added"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}


//API FOR ADMIN LOGIN

const loginAdmin = async (req,res) => {

    try {
        const {email,password} = req.body

        if(!email || !password){
            res.json({success:false,message:"enter both email and password!"})
        }

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS){
            
            const token = jwt.sign(email+password, process.env.JWT)
            res.json({success:true, token})

        }else{
            res.json({success:false,message:"invalid credentials!"})
        }

    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }

}


// API to fetch all tailors data to admin panel

const allTailors = async (req,res) => {

    try {
        const tailors = await tailorModel.find({}).select('-password')
        
        res.json({success:true, tailors})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }

}


export {addTailors,loginAdmin,allTailors}