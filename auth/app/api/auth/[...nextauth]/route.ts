import { NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Email',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
        console.log(credentials);

            return {
                id: "user1",
                name: "User One",
                email: credentials.username,
            };
        },
      })
  ],
secret: process.env.NEXTAUTH_SECRET,
callbacks: {
  jwt: async ({token, user, account, profile, isNewUser}) => {
    console.log(token);
    
    return token
  
  }
}
})


export const GET = handler;

export const POST = handler;