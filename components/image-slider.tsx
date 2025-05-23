"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ImageSliderProps {
  images: string[]
  alt: string
  className?: string
}

export default function ImageSlider({ images, alt, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className={`relative h-[400px] bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  return (
    <div className={`relative h-[400px] rounded-lg overflow-hidden group ${className}`}>
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            className="object-contain transition-opacity duration-300"
        />
      </div>

      {/* Navigation Arrows - Only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots Indicator - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}