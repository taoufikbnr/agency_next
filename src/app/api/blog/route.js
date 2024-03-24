import { connectToDb } from "@/app/lib/connectDB"
import { Post } from "@/app/lib/models";
import { NextResponse } from "next/server"

export const GET = async () =>{
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
    }
}