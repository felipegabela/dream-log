"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function DreamJournal() {
  const [dreams, setDreams] = useState<Dream[]>([])

  useEffect(() => {
    const storedDreams = localStorage.getItem("dreams")
    if (storedDreams) {
      setDreams(JSON.parse(storedDreams))
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        {dreams.map((dream) => (
          <Link key={dream.id} href={`/dream/${dream.id}`}>
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <CardTitle>{dream.date}</CardTitle>
                <CardDescription>{dream.theme}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2">{dream.content}</p>
                <div className="mt-2">
                  {dream.emotions.map((emotion) => (
                    <span
                      key={emotion}
                      className="px-2 py-1 rounded-md text-sm text-white mr-1"
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