import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Servando Avalos</p>
        <div className="flex items-center gap-4">
          <Link href="https://linkedin.com/in/servando-avalos" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:avalos10@mit.edu">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

