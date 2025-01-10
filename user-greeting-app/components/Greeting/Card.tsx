import { Card as ShadcnCard, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "../UserForm/Button"

interface CardProps {
  username: string
  onReset: () => void
}

export function Card({ username, onReset }: CardProps) {
  return (
    <ShadcnCard className="w-full">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center">
          Hello {username}!
        </h2>
        <p className="text-center text-muted-foreground">
          Welcome to your dashboard.
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onReset} className="w-full">
          Home page
        </Button>
      </CardFooter>
    </ShadcnCard>
  )
}

