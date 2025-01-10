import React from 'react'
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  username: string
}

export const Card: React.FC<CardProps> = ({ username, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-lg border shadow-sm p-6 animate-in fade-in-50 duration-500",
        className
      )}
      {...props}
    >
      <h2 className="text-2xl font-semibold mb-2">Hello {username}!</h2>
      <p className="text-muted-foreground">Welcome to our application.</p>
    </div>
  )
}

