"use client"
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (<div>

    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-96">
        <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
        <div className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="border p-2" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="border p-2" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={async () => {
            const res = await axios.post("http://localhost:3000/api/user", { email, password });
            console.log(res);
            router.push("/");
          }}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>)
};