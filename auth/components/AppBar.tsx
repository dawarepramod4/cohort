"use client"

import { signIn, signOut } from "next-auth/react"



export default function () {
  return (
    <div className="h-16 flex justify-end items-center border-b space-x-1">
      <button className=" font-bold h-10 border-2 border-sky-50" onClick={() => {
        signIn();
      }}>Login</button>
      <button className=" font-bold h-10 border-2 border-sky-50 " onClick={() => { signOut() }}>LogOut</button>

    </div>
  )
}