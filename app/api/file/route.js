
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData()

  console.log(data);
  

  return new NextResponse("Thank you")
}





