"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

function getGradientForEmotions(emotions: string[]): string {
  const colors = emotions.map(hashEmotionToColor)
  if (colors.length === 1) {
    return `linear-gradient(to bottom right, ${colors[0]}, ${colors[0]})`
  }
  return `linear-gradient(to bottom right, ${colors.join(", ")})`
}

function DreamTile({ dream }: { dream: Dream }) {
  return (
    <Link href={`/dream/${dream.id}`}>
      <div
        className="rounded-lg p-4 text-white shadow-md h-40 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow duration-200"
        style={{ background: getGradientForEmotions(dream.emotions) }}
      >
        <div>
          <h3 className="font-bold">{dream.theme}</h3>
          <p className="text-sm opacity-80">{dream.date}</p>
        </div>
      </div>
    </Link>
  )
}

export default function DreamGallery() {
  const [dreams, setDreams] = useState<Dream[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const storedDreams = localStorage.getItem("dreams")
    if (storedDreams) {
      setDreams(JSON.parse(storedDreams))
    }
  }, [])

  const filteredDreams = dreams.filter(
    (dream) =>
      dream.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dream.emotions.some((emotion) => emotion.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Label htmlFor="search">Search Dreams</Label>
        <Input
          id="search"
          placeholder="Search by theme or emotion..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredDreams.map((dream) => (
          <DreamTile key={dream.id} dream={dream} />
        ))}
      </div>
    </div>
  )
} 