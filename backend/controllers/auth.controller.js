import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js"
export const signUp = async(req,res) => {
    try{
        const {fullName, userName, password, confirmPassword, gender} = req.body
        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords dont match"})
        }
        // find user here
        const user = await User.findOne({userName})
        if(user){
            return res.status(400).json({error: "username already exists"})
        }
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        //save new User
        const newUser = await User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
        return res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        })
        }else{
            return res.status(400).json({error: "invalid user data"})
        }
    }catch(error){
        res.status(500).json({message: "error occured while signing up", error: error.message})
    }
}
export const login = async(req,res) => {
    try{
        const {userName,password} = req.body
        const user = await User.findOne({userName})
        if(!user){
            return res.status(404).json({error: "User doesnt exist"})
        }
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "invalid username or password"})
        }

        generateTokenAndSetCookie(user._id,res)
        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })
    }catch(error){
        console.log("error occured while logingin:", error.message)
        res.status(500).json({error: "internal error", error: error.message})
    }
}
export const logout = async(req,res) => {
    try{
        res.clearCookie('jwt', {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
           })
        res.status(200).json({message: "logged out successfully"})
    }catch(error){
        console.log("error occured while loging out:", error.message)
        res.status(500).json({error: "internal error", error: error.message})
    }
} 