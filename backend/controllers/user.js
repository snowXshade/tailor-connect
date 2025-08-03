import validator from 'validator'
import bcrypt, { hashSync } from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import { v2 as cloudinary } from 'cloudinary'
import tailorModel from '../models/tailorModel.js'
import appointModel from '../models/AppointmentModel.js'


//api for register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.json({ success: false, message: "Fill all fields!" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email Id!" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password should be mini 8 letters!" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'User doesnt exist!' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: 'invalid credentials!' })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api for user profile data 

const getProfile = async (req, res) => {
    try {

        const userId = req.user.userId
        const userdata = await userModel.findById(userId).select('-password')

        res.json({ success: true, userdata })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//update user

const updateProfile = async (req, res) => {
    try {
        const { name, phone, address, dob, gender } = req.body
        const imageFile = req.file
        const userId = req.user.userId

        if (!name || !phone || !address || !dob) {
            return res.json({ success: false, message: "data missing" })
        }

        await userModel.findByIdAndUpdate(userId, { name, phone, address, dob, gender })

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
            const imageUrl = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, { image: imageUrl })

            res.json({ success: true, message: 'profile updated' })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const bookApointment = async (req, res) => {
    try {
        const { userId, tailId, slotDate, slotTime } = req.body
        const tailData = await tailorModel.findById(tailId).select('-password')

        if (!tailData.available) {
            return res.json({ success: false, message: 'tailor not available' })
        }

        let slotBooked = tailData.slots.booked

        if (slotBooked[slotDate]) {
            if (slotBooked[slotDate].includes(slotTime)) {
                return res.json({ success: false, message: 'slot not available' })
            } else {
                slotBooked[slotDate].push(slotTime)
            }

        } else {
            slotBooked[slotDate] = []
            slotBooked[slotDate].push(slotTime)
        }

        const userdata = await userModel.findById(userId).select('-password')

        delete tailData.slotBooked

        const appointment = {
            userId, tailId, userdata, tailData, amount:tailData.fee, slotTime,slotDate, date:Date.now()
        }

        const newappoint = new appointModel(appointment)
        await newappoint.save()

        await tailorModel.findByIdAndUpdate(tailId , {slotBooked})

        res.json({success:true,message: 'appointment booked'})
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { registerUser, loginUser, getProfile, updateProfile, bookApointment }