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

export const register = async (formData) =>{
    "use server";
    const {username,email,password,retypePassword} = Object.fromEntries(formData);
    if(password!==retypePassword){
        return "Passwords do not match"
    }
 
    try {
        connectToDb();
        const userExist = await User.findOne({email});
        if(userExist) return "Email already exists";
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt)
        const user =new User({username,email,password:hashedPassword});

      await user.save();
    } catch (error) {
        console.log(error);
    }
}