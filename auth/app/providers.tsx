"use client"

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"

export function Session({ children }: any) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
} 