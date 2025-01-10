import { Button as ShadcnButton } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export function Button({ children, isLoading, ...props }: ButtonProps) {
  return (
    <ShadcnButton className="w-full" disabled={isLoading} {...props}>
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </ShadcnButton>
  )
}

