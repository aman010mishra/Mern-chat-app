import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from '../lib/cloudinary.js';


export const signup = async (req, res)=>{
    const { fullName, email, password } = req.body;
    try{
        if(!fullName|| !email || !password){
            return res.status(400).json({msg: "All fields required"});
        }
        if(password.length < 6){
            return res.status(400).json({msg: "Password must be atleast 6 char"});
        }
        const user = await User.findOne({ email });
        if(user) return res.status(400).json({msg: "Email already exists"});
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });
        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        }else{
            res.status(400).json({msg: "Invalid Server Error"});
        }
    }catch(err){
        console.log("Error in signup controller", err.message);
        res.status(500).json({msg: "Internal server Error"});
    }
};

export const login = async (req, res)=>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({msg: "Invalid credentials"});
        }
        const isPass = await bcrypt.compare(password, user.password);
        if(!isPass) return res.status(400).json({msg: "Invalid credentials"});

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error in login controller", err.message);
        res.status(500).json({msg: "Internal server error"});
    }
};

export const logout = async (req,res)=>{
    try {
        res.cookie("jwt","", { maxAge: 0});
        res.status(200).json({msg: "Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller");
        res.status(500).json({msg: "Internal server error"});
    }
};

export const updateProfile = async (req,res)=>{
    try {
        const { profilePic } = req.body;
        const userId = req.user._id;
        if(!profilePic) return res.status(400).json({msg: "Profile pic is required"});

        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: uploadResponse.secure_url },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log("Error in update profile controller");
        res.status(500).json({msg: "Internal server error"});
    }
};

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};