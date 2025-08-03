import jwt from 'jsonwebtoken'

//admin auth middlware

const authAdmin = async (req,res,next) => {

    try {
        
        const {atoken} = req.headers
        if(!atoken){
            return res.json({success:false, message:"not authorized login again!"})
        }

        //verify token
        const token_decode = jwt.verify(atoken,process.env.JWT)

        //check email and pass
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASS){
            return res.json({success:false, message:"not authorized login again!"})
        }

        next()

    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }

}

export default authAdmin