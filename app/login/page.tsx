"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { signIn } from "next-auth/react"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })
        if(result?.error) {
            console.log(result.error)
        } else {
            router.push("/")
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
        <div>
            <p>Do not have an account? <a href="/register">Register</a></p>
        </div>
    </div>
  )
}

export default LoginPage