'use client'

import { useState } from 'react'
import { Form } from './UserForm/Form'
import { Card } from './Greeting/Card'

export default function UserGreeting() {
  const [username, setUsername] = useState<string>('')
  const [showGreeting, setShowGreeting] = useState<boolean>(false)

  const handleSubmit = (submittedUsername: string) => {
    setUsername(submittedUsername)
    setShowGreeting(true)
  }

  return (
    <div className="w-full max-w-md">
      {!showGreeting ? (
        <Form onSubmit={handleSubmit} />
      ) : (
        <Card username={username} onReset={() => setShowGreeting(false)} />
      )}
    </div>
  )
}

