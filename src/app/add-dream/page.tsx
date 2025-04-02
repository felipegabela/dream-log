"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Home, X } from "lucide-react"
import Link from "next/link"

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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Add New Dream</h1>
        <Link href="/">
          <Button variant="outline">
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Log a New Dream</CardTitle>
          <CardDescription>Record your dream and associated emotions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="content">Dream Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Describe your dream..."
              />
            </div>
            <div>
              <Label htmlFor="emotions">Emotions (comma-separated)</Label>
              <Input
                id="emotions"
                value={emotions}
                onChange={(e) => setEmotions(e.target.value)}
                placeholder="e.g. happy, scared, excited"
              />
            </div>
            <div>
              <Label htmlFor="theme">Theme</Label>
              <Input
                id="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                placeholder="e.g. adventure, family, work"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => router.push("/")}>
            <X className="mr-2 h-4 w-4" /> Cancel
          </Button>
          <Button onClick={addDream}>Log Dream</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 