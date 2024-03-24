import { connectToDb } from "@/app/lib/connectDB"
import { Post } from "@/app/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) =>{
    const {slug} = params;
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        
    }
}