"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import LoginForm from "./components/LoginForm"
import { Snowflake } from "lucide-react"

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userRole = localStorage.getItem("userRole")

    if (token) {
      if (userRole === "ADMIN") {
        router.push("/admin")
      } else {
        router.push("/user")
      }
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50" />
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-blue-200 opacity-60 snowflake"
            size={Math.random() * 30 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10vh`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <div className="mb-8 float-animation">
            <div className="inline-block p-6 bg-gradient-to-br from-red-400 to-green-400 rounded-full shadow-lg">
              <Snowflake className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Secret Santa
          </h1>
          <p className="text-xl text-gray-600 mb-12">Gift Exchange Manager</p>

          <LoginForm />
        </div>
      </div>
    </div>
  )
}
