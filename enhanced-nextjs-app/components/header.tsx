"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { useToast } from "@/hooks/use-toast"

const Header = () => {
  const router = useRouter()
  const { toast } = useToast()

  const handleNavigation = (path: string, message: string) => {
    router.push(path)
    toast({
      title: "Navigation",
      description: message,
    })
  }

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><button onClick={() => handleNavigation("/", "Welcome to the Home page")} className="hover:underline">Home</button></li>
            <li><button onClick={() => handleNavigation("/about", "Learn more about us")} className="hover:underline">About</button></li>
            <li><button onClick={() => handleNavigation("/contact", "Get in touch with us")} className="hover:underline">Contact</button></li>
            <li><ThemeToggle /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

