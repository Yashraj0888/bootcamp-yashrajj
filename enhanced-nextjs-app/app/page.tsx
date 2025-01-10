"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const [username, setUsername] = useState('')
  const [greeting, setGreeting] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setGreeting(`Hello, ${username}`)
    toast({
      title: "Form Submitted",
      description: `Greeting created for ${username}`,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
          {greeting && (
            <Card className="mt-4">
              <CardContent className=" py-2">

                <p className="text-center font-bold"> {greeting}</p>
                <p className="text-center">Welcome to your dashboard.</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

