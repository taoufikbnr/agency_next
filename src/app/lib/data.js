import { connectToDb } from "./connectDB"
import { Post, User } from "./models";


export const getPosts = async () => {
    try {
      connectToDb();
      const posts = await Post.find();
      return posts;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };
  export const getPost = async (slug) => {
    try {
      connectToDb();
      const post = await Post.findOne({slug});
      return post;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };
  export const getUsers = async () => {
    try {
      connectToDb();
      const users = await User.find();
      return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };