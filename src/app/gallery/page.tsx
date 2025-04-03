"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Sparkles, Moon } from "lucide-react"

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
    return `linear-gradient(135deg, ${colors[0]}, ${colors[0]}80)`
  }
  return `linear-gradient(135deg, ${colors.join(", ")})`
}

function DreamTile({ dream }: { dream: Dream }) {
  return (
    <Link href={`/dream/${dream.id}`}>
      <div
        className="rounded-xl p-6 text-white shadow-lg h-48 flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] relative overflow-hidden"
        style={{ background: getGradientForEmotions(dream.emotions) }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-1">{dream.theme}</h3>
          <p className="text-sm opacity-90">{dream.date}</p>
        </div>
        <div className="relative z-10">
          <p className="text-sm opacity-90 line-clamp-2">
            {dream.content}
          </p>
        </div>
      </div>
    </Link>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="relative">
        <Sparkles className="h-16 w-16 text-primary animate-pulse" />
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Your Dream Canvas Awaits</h2>
        <p className="text-muted-foreground max-w-md">
          Like stars waiting to be discovered in the night sky, your dreams are ready to be captured and cherished. Begin your journey of self-discovery by recording your first dream.
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

function NoResultsState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-6">
      <div className="relative">
        <Moon className="h-16 w-16 text-primary animate-pulse" />
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Dreams Hidden in the Mist</h2>
        <p className="text-muted-foreground max-w-md">
          Like elusive stars behind passing clouds, no dreams match your search. Try different words, or let your mind wander to new horizons.
        </p>
      </div>
      <Button 
        variant="outline" 
        size="lg" 
        className="group"
        onClick={() => window.location.reload()}
      >
        <Moon className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
        Clear Search
      </Button>
    </div>
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

  if (dreams.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-2">
          <Label htmlFor="search" className="text-lg">Search Dreams</Label>
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          id="search"
          placeholder="Search by theme or emotion..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      {filteredDreams.length === 0 && searchTerm ? (
        <NoResultsState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDreams.map((dream) => (
            <DreamTile key={dream.id} dream={dream} />
          ))}
        </div>
      )}
    </div>
  )
} 