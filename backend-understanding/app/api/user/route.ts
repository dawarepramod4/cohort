import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export function GET(){
    return Response.json({
        name: "John Doe",
        email: "dawarepramod4@gmail.com"
    });
}

export async function POST(req: NextRequest){
    const body = await req.json();

    console.log(body);
   await client.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    });
    return Response.json({
        message: "User created"
    });
}
