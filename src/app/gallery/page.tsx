"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, PlusCircle } from "lucide-react"

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
  const gradient = getGradientForEmotions(dream.emotions)
  return (
    <Link href={`/dream/${dream.id}`}>
      <div
        className="w-full aspect-square rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
        style={{ background: gradient }}
      >
        <div className="w-full h-full p-4 bg-black bg-opacity-30 flex flex-col justify-end">
          <h3 className="text-white font-semibold mb-1">{dream.theme}</h3>
          <p className="text-white text-sm">{dream.date}</p>
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dream Gallery</h1>
        <div className="space-x-2">
          <Link href="/add-dream">
            <Button variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Dream
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline">
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="search">Search Dreams</Label>
        <Input
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by theme or emotion..."
        />
      </div>

      {filteredDreams.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[200px] text-muted-foreground">
          <p className="text-lg">No dreams found matching your search.</p>
          <p className="text-sm mt-2">Try adjusting your search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredDreams.map((dream) => (
            <DreamTile key={dream.id} dream={dream} />
          ))}
        </div>
      )}
    </div>
  )
} 