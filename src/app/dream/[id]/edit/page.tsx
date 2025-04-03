"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sparkles, Moon, Wand2, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Dream {
  id: string
  date: string
  content: string
  emotions: string[]
  theme: string
}

function hashEmotionToColor(emotion: string): string {
  let hash = 0
  for (let i = 0; i < emotion.length; i++) {
    hash = emotion.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue = Math.abs(hash) % 360
  return `hsl(${hue}, 70%, 60%)`
}

export default function EditDreamPage({ params }: { params: { id: string } }) {
  const [dream, setDream] = useState<Dream | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedDreams = localStorage.getItem("dreams")
    if (storedDreams) {
      const dreams = JSON.parse(storedDreams)
      const foundDream = dreams.find((d: Dream) => d.id === params.id)
      if (foundDream) {
        setDream(foundDream)
      }
    }
  }, [params.id])

  const handleSave = async () => {
    if (dream) {
      setIsSubmitting(true)
      // Simulate a brief delay for a better UX
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const storedDreams = localStorage.getItem("dreams")
      if (storedDreams) {
        const dreams = JSON.parse(storedDreams)
        const updatedDreams = dreams.map((d: Dream) =>
          d.id === dream.id ? dream : d
        )
        localStorage.setItem("dreams", JSON.stringify(updatedDreams))
      }
      router.push(`/dream/${dream.id}`)
    }
  }

  if (!dream) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <Link href={`/dream/${params.id}`}>
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Dream
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Dream not found</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex items-center space-x-2 mb-8">
        <Moon className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Edit Your Dream</h1>
      </div>

      <Card className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <CardHeader className="relative z-10">
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Refine Your Dream</span>
          </CardTitle>
          <CardDescription>
            Like polishing a gem, take a moment to perfect your dream&apos;s details.
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
              value={dream.theme}
              onChange={(e) => setDream({ ...dream, theme: e.target.value })}
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
              value={dream.emotions.join(", ")}
              onChange={(e) => setDream({ ...dream, emotions: e.target.value.split(",").map(e => e.trim()) })}
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
              value={dream.content}
              onChange={(e) => setDream({ ...dream, content: e.target.value })}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between relative z-10">
          <Link href={`/dream/${dream.id}`}>
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Cancel
            </Button>
          </Link>
          <Button 
            onClick={handleSave} 
            className="group relative overflow-hidden"
            disabled={isSubmitting}
          >
            <span className="relative z-10 flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                  Saving Changes...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
                  Save Changes
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