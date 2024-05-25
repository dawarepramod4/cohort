"use client"

import { Session } from "@/app/providers";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"



export default function () {
  const session = useSession()
  return (
    <Session>
      <div className="h-16 flex justify-end items-center border-b space-x-1">
        <div className="text-lg font-bold">{JSON.stringify(session)}</div>
        <button className=" font-bold h-10 border-2 border-sky-50" onClick={() => {
          signIn();
        }}>Login</button>
        <button className=" font-bold h-10 border-2 border-sky-50 " onClick={() => { signOut() }}>LogOut</button>

      </div>
    </Session>
  )
}