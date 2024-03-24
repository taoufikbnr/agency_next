import { connectToDb } from "./connectDB";
import { Post } from "./models";

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