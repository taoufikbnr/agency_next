import NextAuth from "next-auth/next";



export const {handlers,auth} = NextAuth({providers:[GitHub]})