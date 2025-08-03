import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

import adminRouter from './routes/admin.js'
import tailorRouter from './routes/tailor.js'
import userRouter from './routes/user.js'

//app config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())


//api endpoint
app.use('/api/admin', adminRouter)
// localhost:4000/api/admin/add-tailor
// localhost:4000/api/admin/login
// localhost:4000/api/admin/all-tailors

app.use('/api/tailor',tailorRouter)
//localhost:4000/api/tailor/list

app.use('/api/user', userRouter)
//localhost:4000/api/user/register

app.listen(port,()=>console.log('sever running', port)
 )