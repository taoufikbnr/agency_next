import { connectToDb } from "./connectDB";
import { Post, User } from "./models";

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
    const userExist = await User.findOne({email});
    if(userExist) return "Email already exists";
    try {
        connectToDb();
        const user =new User({username,email,password});

      await user.save();
    } catch (error) {
        console.log(error);
    }
}