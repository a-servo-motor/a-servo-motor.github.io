"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when pathname changes (navigation)
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const handleResumeDownload = () => {
  // Create a temporary anchor element
  const link = document.createElement('a');
  
  // Set the href to your PDF file in the public folder
  link.href = '/Site_Images/Resume_Website_Aug2025.pdf'; // This points to public/Servando_Avalos_Resume.pdf
  
  // Set the download attribute to force download instead of opening
  link.download = 'Avalos_Servando_Resume.pdf'; // This will be the downloaded filename
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <img src="/Site_Images/SA Logo - White.png" alt="Servando Avalos" className="h-10" />
        </Link>
        <nav className="hidden md:flex gap-6 items-center nav-toggle-visible">
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-white"}`}
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/projects") ? "text-primary" : "text-white"}`}
          >
            Projects & Work
          </Link>
          <Link
            href="/youtube"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/youtube") ? "text-primary" : "text-white"}`}
          >
            YouTube Channel
          </Link>
          {/* <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-white"}`}
          >
            Contact
          </Link> */}
          <Button variant="outline" size="sm" className="" onClick={handleResumeDownload}>
            <FileText className="h-4 w-4 mr-2" />
            Resume
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden nav-toggle-hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        {isMenuOpen && (
          <div ref={menuRef} className="fixed inset-0 z-50 bg-background/100 backdrop-blur-none md:hidden">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/">
                <img src="/Site_Images/SA Logo - White.png" alt="Servando Avalos" className="h-10" />
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="nav-toggle-hidden">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container grid gap-6 py-6 bg-background">
              <Link href="/about" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                About Me
              </Link>
              <Link href="/projects" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                Projects & Work
              </Link>
              <Link href="/youtube" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                YouTube Channel
              </Link>
              {/* <Link href="/contact" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                Contact
              </Link> */}
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

