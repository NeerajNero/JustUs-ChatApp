import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
const protectRoute = async(req,res,next) => {
    try{
        //get cookie from req
        const token = req.cookies.jwt
        if(!token){
            return res.status(401).json({error: "unauthorised access : No Token Provided"})
        }
        // verify token with secret key to get userId
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            return res.status(404).json({error: "Unauthorized - Invalid Token"})
        }
        // find the user using userId and save it in user without password
        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(404).json({error: "User Not Found"})
        }
        //save the user data in req.user
        req.user = user
        // proceed with next step when everything is successfull 
        next()
    }catch(error){
        console.log("couldnt verify token", error.message)
        res.status(500).json({message: "internal error", error: error.message})
    }
}

export default protectRoute