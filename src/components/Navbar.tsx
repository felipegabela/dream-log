"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Grid, PlusCircle, Menu, X, Home, Info } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Dream Journal
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <Link href="/">
            <Button variant="outline">
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
          </Link>
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
          <Link href="/about">
            <Button variant="outline">
              <Info className="mr-2 h-4 w-4" /> About
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <Home className="mr-2 h-4 w-4" /> Home
                  </Button>
                </Link>
                <Link href="/add-dream" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Dream
                  </Button>
                </Link>
                <Link href="/gallery" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <Grid className="mr-2 h-4 w-4" /> Gallery
                  </Button>
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <Info className="mr-2 h-4 w-4" /> About
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
} 