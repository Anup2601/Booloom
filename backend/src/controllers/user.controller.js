import httpStatus from "http-status"
import { User } from "../models/user.model.js";
import bcrypt, {hash} from "bcrypt"
import crypto from "crypto";


const login=async (req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({message:"Provide Detail"})
    }

    try{
        // Find user by username
        const user=await User.findOne({username});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"User not found"});
        }
         // Compare passwords
         
         if (!user.password) {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid username or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(isPasswordCorrect){
            let token=crypto.randomBytes(20).toString("hex");
            user.token=token;
            await user.save();
            return res.status(httpStatus.OK).json({token:token});
        }
        else{
            return res.status(httpStatus.UNAUTHORIZED).json({message:"Invalid username and Password"});
        }
    }catch(e){
        return res.status(500).json({message:`Somthing Went Wrong ${e}`});
    }
}

// for registration
const register=async (req,res)=>{
    const {name ,username,password}=req.body;

    if (!name || !username || !password) {
        return res.status(400).json({ message: "Provide name, username, and password" });
    }
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }
    try{
        const existingUser=await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.CONFLICT).json({message:"User already exist"});
        }

        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            name,
            username,
            password:hashedPassword
        });
        await newUser.save();
        res.status(httpStatus.CREATED).json({message:"User Registered"});
    }catch(e){

        return res.json({message:`Something went wrong ${e}`});
    }
}

export {login,register};