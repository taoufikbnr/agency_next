import { NextResponse } from "next/server";
import { connectToDb } from "./connectDB";
import { Post, User } from "./models";
import bcrypt from "bcrypt";
export const createPost = async (formData) =>{
    "use server";
    const {title,desc,slug,userId} = Object.fromEntries(formData);
    try {
        connectToDb();
        const newPost = {
            title,
            desc,
            slug,
            userId
        }
        const post = Post.create(newPost);
    } catch (error) {
        
    }
}

export const register = async (prev,formData) =>{
    "use server";
    const {username,email,password,retypePassword} = Object.fromEntries(formData);
    if(password !== retypePassword) return {error:"Passwords do not match"};

 
    try {
        connectToDb();
        const userExist = await User.findOne({email});
        if(userExist) return {error:"Email already exists"};
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt)
        const user =new User({username,email,password:hashedPassword});

      await user.save();
      return { success: true }
    } catch (error) {
        console.log(error);
    }
}

export const login = async (prev,formData) =>{
    "use server"
   const {username,password} = Object.fromEntries(formData);

    try {
        connectToDb()
        const user =await User.findOne({username});
        if(!user) return {error:"User doesnt exist"};
       const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch) return {success:"user"};
        
    } catch (error) {
        console.log(error);
    }
}