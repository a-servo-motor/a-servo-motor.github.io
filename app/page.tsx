import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24_2.008-55.JPG-Wk0AShBb2ee4HX1Nl72AOWVpnUpz35.jpeg"
            alt="MIT Engineering Project"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none mb-4">
            Servando Avalos
          </h1>
          <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-gray-200 mb-8">Mechanical Engineering at MIT</p>
          <div className="space-x-4">
            <Link href="/about">
              <Button size="lg" variant="default" className="text-lg">
                About Me
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="text-lg">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

