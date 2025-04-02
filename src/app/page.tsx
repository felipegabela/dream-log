"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Grid, PlusCircle } from "lucide-react"

interface Dream {
  id: string
  date: string
  content: string
  emotions: string[]
  theme: string
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dream Journal</h1>
        <div className="space-x-2">
          <Link href="/add-dream">
            <Button variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Dream
            </Button>
          </Link>
          <Link href="/gallery">
            <Button variant="outline">
              <Grid className="mr-2 h-4 w-4" /> Gallery
            </Button>
          </Link>
        </div>
      </div>

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
                    <Badge key={emotion} variant="secondary" className="mr-1">
                      {emotion}
                    </Badge>
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