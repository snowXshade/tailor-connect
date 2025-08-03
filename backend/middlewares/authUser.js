import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

//admin auth middlware

const authUser = async (req,res,next) => {

    try {
        
        const {token} = req.headers
        if(!token){
            return res.json({success:false, message:"not authorized login again!"})
        }

        //verify token
        const token_decode = jwt.verify(token,process.env.JWT)

        req.user = {userId : token_decode.id}

        next()

    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }

}

export default authUser