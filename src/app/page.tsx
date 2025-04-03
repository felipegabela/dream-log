"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle, Sparkles, Moon } from "lucide-react"

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

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="relative">
        <Moon className="h-16 w-16 text-primary animate-pulse" />
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">The Night&apos;s Canvas Awaits</h2>
        <p className="text-muted-foreground max-w-md">
          Like a blank page under the moonlight, your dream journal is ready to capture the whispers of your subconscious. Begin your journey of self-discovery by recording your first dream.
        </p>
      </div>
      <Link href="/add-dream">
        <Button size="lg" className="group">
          <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
          Record Your First Dream
        </Button>
      </Link>
    </div>
  )
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="relative">
        <Moon className="h-16 w-16 text-primary animate-pulse" />
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Gathering Your Dreams</h2>
        <p className="text-muted-foreground max-w-md">
          Like stars emerging in the twilight, your dreams are coming into view...
        </p>
      </div>
    </div>
  )
}

export default function DreamJournal() {
  const [dreams, setDreams] = useState<Dream[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Increased delay to 3 seconds
    const timer = setTimeout(() => {
      const storedDreams = localStorage.getItem("dreams")
      if (storedDreams) {
        setDreams(JSON.parse(storedDreams))
      }
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingState />
  }

  if (dreams.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        {dreams.map((dream) => (
          <Link key={dream.id} href={`/dream/${dream.id}`}>
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{dream.date}</span>
                  <span className="text-sm font-normal text-muted-foreground">{dream.theme}</span>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {dream.content}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {dream.emotions.map((emotion) => (
                    <span
                      key={emotion}
                      className="px-3 py-1 rounded-full text-sm text-white transition-transform group-hover:scale-105"
                      style={{ backgroundColor: hashEmotionToColor(emotion) }}
                    >
                      {emotion}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 