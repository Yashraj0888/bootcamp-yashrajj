import { Input as ShadcnInput } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  error?: string
}

export function Input({ id, error, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Username</Label>
      <ShadcnInput
        id={id}
        className={error ? 'border-red-500' : ''}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

