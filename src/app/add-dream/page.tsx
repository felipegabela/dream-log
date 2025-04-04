"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sparkles, Moon, Wand2 } from "lucide-react"

interface Dream {
  id: string
  date: string
  content: string
  emotions: string[]
  theme: string
}

export default function AddDream() {
  const [dreams, setDreams] = useState<Dream[]>([])
  const [content, setContent] = useState("")
  const [emotions, setEmotions] = useState("")
  const [theme, setTheme] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedDreams = localStorage.getItem("dreams")
    if (storedDreams) {
      setDreams(JSON.parse(storedDreams))
    }
  }, [])

  const addDream = async () => {
    if (content && emotions && theme) {
      setIsSubmitting(true)
      // Simulate a brief delay for a better UX
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const newDream: Dream = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        content,
        emotions: emotions.split(",").map((e) => e.trim()),
        theme,
      }
      const updatedDreams = [...dreams, newDream]
      setDreams(updatedDreams)
      localStorage.setItem("dreams", JSON.stringify(updatedDreams))
      router.push("/")
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex items-center space-x-2 mb-8">
        <Moon className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Record Your Dream</h1>
      </div>

      <Card className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <CardHeader className="relative z-10">
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Capture Your Dream</span>
          </CardTitle>
          <CardDescription>
            Like stars in the night sky, every dream is unique. Take a moment to record yours.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <div className="space-y-2">
            <Label htmlFor="theme" className="flex items-center space-x-2">
              <Wand2 className="h-4 w-4 text-primary" />
              <span>Theme</span>
            </Label>
            <Input
              id="theme"
              placeholder="e.g., Flying, Falling, Being Chased"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emotions" className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Emotions</span>
            </Label>
            <Input
              id="emotions"
              placeholder="e.g., Fear, Joy, Confusion (separate with commas)"
              value={emotions}
              onChange={(e) => setEmotions(e.target.value)}
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content" className="flex items-center space-x-2">
              <Moon className="h-4 w-4 text-primary" />
              <span>Dream Content</span>
            </Label>
            <Textarea
              id="content"
              placeholder="Describe your dream in detail... Let your thoughts flow like a gentle stream."
              className="min-h-[200px] transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="relative z-10">
          <Button 
            onClick={addDream} 
            className="w-full group relative overflow-hidden"
            disabled={isSubmitting}
          >
            <span className="relative z-10 flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                  Saving Your Dream...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
                  Save Dream
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
} 