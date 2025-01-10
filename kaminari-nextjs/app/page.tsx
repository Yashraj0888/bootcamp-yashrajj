"use client"

import React, { useState } from 'react'
import { Form } from '@/src/components/UserForm/Form'
import { Card } from '@/src/components/Greeting/Card'

export default function Home() {
  const [greeting, setGreeting] = useState<string | null>(null)

  const handleSubmit = (username: string) => {
    setGreeting(username)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-4xl font-bold text-center">User Greeting App</h1>
        {greeting ? (
          <Card username={greeting} />
        ) : (
          <Form onSubmit={handleSubmit} />
        )}
      </div>
    </main>
  )
}

