"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Home, Save, X } from "lucide-react"
import Link from "next/link"

interface Dream {
  id: string
  date: string
  content: string
  emotions: string[]
  theme: string
}

export default function DreamPage({ params }: { params: { id: string } }) {
  const [dream, setDream] = useState<Dream | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedDream, setEditedDream] = useState<Dream | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedDreams = localStorage.getItem("dreams")
    if (storedDreams) {
      const dreams = JSON.parse(storedDreams)
      const foundDream = dreams.find((d: Dream) => d.id === params.id)
      if (foundDream) {
        setDream(foundDream)
        setEditedDream(foundDream)
      }
    }
  }, [params.id])

  const handleSave = () => {
    if (editedDream) {
      const storedDreams = localStorage.getItem("dreams")
      if (storedDreams) {
        const dreams = JSON.parse(storedDreams)
        const updatedDreams = dreams.map((d: Dream) =>
          d.id === editedDream.id ? editedDream : d
        )
        localStorage.setItem("dreams", JSON.stringify(updatedDreams))
      }
      setDream(editedDream)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditedDream(dream)
    setIsEditing(false)
  }

  if (!dream) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dream Not Found</h1>
          <Link href="/">
            <Button variant="outline">
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dream Details</h1>
        <Link href="/">
          <Button variant="outline">
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{dream.date}</CardTitle>
          <CardDescription>
            {isEditing ? (
              <Input
                value={editedDream?.theme || ""}
                onChange={(e) =>
                  setEditedDream((prev) =>
                    prev ? { ...prev, theme: e.target.value } : null
                  )
                }
                placeholder="Theme"
              />
            ) : (
              dream.theme
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="content">Dream Content</Label>
              {isEditing ? (
                <Textarea
                  id="content"
                  value={editedDream?.content || ""}
                  onChange={(e) =>
                    setEditedDream((prev) =>
                      prev ? { ...prev, content: e.target.value } : null
                    )
                  }
                  placeholder="Describe your dream..."
                />
              ) : (
                <p className="mt-2">{dream.content}</p>
              )}
            </div>
            <div>
              <Label htmlFor="emotions">Emotions</Label>
              {isEditing ? (
                <Input
                  id="emotions"
                  value={editedDream?.emotions.join(", ") || ""}
                  onChange={(e) =>
                    setEditedDream((prev) =>
                      prev
                        ? {
                            ...prev,
                            emotions: e.target.value.split(",").map((e) => e.trim()),
                          }
                        : null
                    )
                  }
                  placeholder="e.g. happy, scared, excited"
                />
              ) : (
                <div className="mt-2 flex flex-wrap gap-1">
                  {dream.emotions.map((emotion) => (
                    <span
                      key={emotion}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {emotion}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                <X className="mr-2 h-4 w-4" /> Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" /> Save
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>Edit Dream</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
} 