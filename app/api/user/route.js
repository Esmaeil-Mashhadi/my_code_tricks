import { connectDB } from "@/utils/connection";
import { sign, verify } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req){
try {
    await connectDB()

    const {email  , password} = await req.json()
    // const user = await userModel.create({
    //     email , password
    // })


    const SECRET = 'somerandomSecret'
    const token = sign({email} , SECRET , {expiresIn:'1d'})

       const result =  verify(token , SECRET)
   

       const res = NextResponse.json({message :"you signed up successfully"}, {status:200})
       res.cookies.set({
         name:"jwt",
         value: token,
         httpOnly: true,
         maxAge: 60*60*60*24*7
       })

       return res


} catch (error) {
   return NextRequest.json({status:500 , message:error.message})
}
}

 



