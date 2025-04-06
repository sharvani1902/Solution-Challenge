"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { Camera, Upload, Globe, User } from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import NetworkStatus from "@/components/network-status"
import AgriBot from "@/components/agri-bot"
import Image from "next/image"

export default function Home() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem("user")
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gradient-to-b from-green-50 to-yellow-50">
      <div className="w-full max-w-md flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="AgriScan Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <h1 className="text-2xl font-bold text-green-700">AgriScan</h1>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <NetworkStatus />
        </div>
      </div>

      <Card className="w-full max-w-md p-6 shadow-lg border-green-100 mb-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="AgriScan Hero"
            width={200}
            height={200}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold text-center text-green-800">
            AI-powered crop pest & disease identifier
          </h2>
          <p className="text-center text-gray-600 mt-2">Scan your crops to identify pests and diseases instantly</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white h-16 text-lg"
            onClick={() => router.push("/scan")}
          >
            <Camera className="mr-2 h-6 w-6" />
            Scan My Crop
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-green-600 text-green-700 hover:bg-green-50 h-16 text-lg"
            onClick={() => router.push("/upload")}
          >
            <Upload className="mr-2 h-6 w-6" />
            Upload Image
          </Button>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <Button
              variant="outline"
              className="border-yellow-600 text-yellow-700 hover:bg-yellow-50"
              onClick={() => router.push("/database")}
            >
              <Globe className="mr-2 h-5 w-5" />
              Browse Database
            </Button>

            <Button
              variant="outline"
              className="border-blue-600 text-blue-700 hover:bg-blue-50"
              onClick={() => router.push(isLoggedIn ? "/account" : "/login")}
            >
              <User className="mr-2 h-5 w-5" />
              {isLoggedIn ? "My Account" : "Login / Signup"}
            </Button>
          </div>
        </div>
      </Card>

      <AgriBot />
    </main>
  )
}

