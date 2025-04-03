"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Edit2, Trash2, ArrowLeft, Sparkles, Moon } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

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

export default function DreamPage({ params }: { params: { id: string } }) {
  const [dream, setDream] = useState<Dream | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
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

  const handleDelete = () => {
    if (dream) {
      const storedDreams = localStorage.getItem("dreams")
      if (storedDreams) {
        const dreams = JSON.parse(storedDreams)
        const updatedDreams = dreams.filter((d: Dream) => d.id !== dream.id)
        localStorage.setItem("dreams", JSON.stringify(updatedDreams))
      }
      router.push("/")
    }
  }

  if (!dream) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
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
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="flex items-center space-x-2 mb-8">
        <Moon className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Your Dream</h1>
      </div>

      <Card className="relative overflow-hidden group">
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
          style={{ background: getGradientForEmotions(dream.emotions) }}
        />
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>{dream.theme}</span>
              </CardTitle>
              <CardDescription>{dream.date}</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Link href={`/dream/${dream.id}/edit`}>
                <Button variant="ghost" size="icon" className="group">
                  <Edit2 className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  <span className="sr-only">Edit</span>
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                className="group text-destructive hover:text-destructive"
                onClick={() => setIsDeleteDialogOpen(true)}
              >
                <Trash2 className="h-4 w-4 transition-transform group-hover:rotate-12" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="whitespace-pre-wrap">{dream.content}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
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
        <CardFooter className="relative z-10">
          <Link href="/" className="block">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Trash2 className="h-5 w-5 text-destructive" />
              <span>Delete Dream</span>
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this dream? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => {
                handleDelete()
                setIsDeleteDialogOpen(false)
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Dream
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
} 