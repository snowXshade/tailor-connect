import express from "express";
import {addTailors, allTailors, loginAdmin} from '../controllers/admin.js'
import upload from '../middlewares/multer.js'
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router()

adminRouter.post('/add-tailor', authAdmin, upload.single('image'), addTailors)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-tailors', authAdmin, allTailors)

export default adminRouter