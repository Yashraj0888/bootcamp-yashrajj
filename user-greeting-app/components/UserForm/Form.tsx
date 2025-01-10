'use client'

import { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'

interface FormProps {
  onSubmit: (username: string) => void
}

export function Form({ onSubmit }: FormProps) {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (username.trim().length < 2) {
      setError('Username must be at least 2 characters long')
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)

    onSubmit(username.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={error}
        disabled={isLoading}
      />
      <Button type="submit" isLoading={isLoading}>
        Submit
      </Button>
    </form>
  )
}

