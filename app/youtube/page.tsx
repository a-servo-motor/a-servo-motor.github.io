import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Link } from "lucide-react"

const youtubeVideos = [
  {
    id: "uav",
    title: "3D Printed UAV",
    description: "",
    youtubeEmbed: "https://www.youtube.com/embed/WqrYSWyrIXY",
    tags: [""],
  },
  {
    id: "formlabs",
    title: "Formlabs Hackathon - Grilled Cheese Maker",
    description: "",
    youtubeEmbed: "https://www.youtube.com/embed/G4-ctfMp_y4",
    tags: [""],
  },
  {
    id: "formlabs",
    title: "MIT Arcturus - RoboBoat 2025",
    description: "Video won 3rd place out of 27 team videos at RoboBoat 2025 for Video Documentation.",
    youtubeEmbed: "https://www.youtube.com/embed/YlYUVPL47cQ",
    tags: [""],
  },

]

export default function YouTubePage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold mb-8">YouTube Channel</h1>
      <h3 className="mb-8">Here I enjoy posting more of my engineering projects.</h3>
      {/* YouTube Channel Button */}
      <div className="flex mb-12">
        <a href="https://www.youtube.com/@lenservo" 
            target="_blank" 
            rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="text-lg text-white bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700"
          >
            Open on YouTube
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>

      {/* YouTube Video Grid */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {youtubeVideos.map((video, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.youtubeEmbed}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {video.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
