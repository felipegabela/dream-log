"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

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
  const router = useRouter()

  useEffect(() => {
    const storedDreams = localStorage.getItem("dreams")
    if (storedDreams) {
      setDreams(JSON.parse(storedDreams))
    }
  }, [])

  const addDream = () => {
    if (content && emotions && theme) {
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
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Record Your Dream</CardTitle>
          <CardDescription>
            Capture the details of your dream to reflect on later
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <Input
              id="theme"
              placeholder="e.g., Flying, Falling, Being Chased"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emotions">Emotions (comma separated)</Label>
            <Input
              id="emotions"
              placeholder="e.g., Fear, Joy, Confusion"
              value={emotions}
              onChange={(e) => setEmotions(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Dream Content</Label>
            <Textarea
              id="content"
              placeholder="Describe your dream in detail..."
              className="min-h-[200px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addDream} className="w-full">Save Dream</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 