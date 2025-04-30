"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const handleResumeDownload = () => {
    // Replace with actual resume file URL
    const resumeUrl = "/Servando_Avalos_Resume.pdf"
    window.open(resumeUrl, "_blank")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Servando Avalos
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/projects") ? "text-primary" : "text-muted-foreground"}`}
          >
            Projects & Work
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-muted-foreground"}`}
          >
            Contact
          </Link>
          <Button variant="outline" size="sm" className="ml-4" onClick={handleResumeDownload}>
            <FileText className="h-4 w-4 mr-2" />
            Resume
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="font-bold text-xl">
                Servando Avalos
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container grid gap-6 py-6">
              <Link href="/about" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                About Me
              </Link>
              <Link href="/projects" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                Projects & Work
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                Contact
              </Link>
              <Button
                variant="outline"
                onClick={() => {
                  handleResumeDownload()
                  toggleMenu()
                }}
              >
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

