import React, { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'
import { Label } from "@/components/ui/label"

interface FormProps {
  onSubmit: (username: string) => void
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
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
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      onSubmit(username)
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}

