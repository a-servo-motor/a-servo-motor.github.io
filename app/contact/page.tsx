"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      // Add this after successful submission
      alert("Message sent successfully! Thank you for contacting me.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({
      title: "Error",
      description: "There was a problem sending your message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Cambridge, MA / Houston, TX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Linkedin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <Link
                    href="https://linkedin.com/in/servando-avalos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/servando-avalos
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Massachusetts Institute of Technology</h3>
                  <p className="text-muted-foreground">Bachelor of Science in Mechanical Engineering</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-muted-foreground">Expected Graduation: May 2026</span>
                    <span className="text-sm font-medium">GPA: 4.6/5.0</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

