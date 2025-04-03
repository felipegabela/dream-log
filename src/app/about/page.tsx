import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Dream Log",
  description: "Learn about Dream Log and its mission to help you capture your dreams",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Dream Log</h1>
          <p className="text-xl text-muted-foreground">
            Trace the shape of your dreams. Feel them again.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <p>
            Dream Log is a space to capture the fleeting, surreal, and beautiful moments that unfold behind closed eyes. We believe that dreams are more than stories — they&apos;re emotional echoes, fragments of our subconscious that slip through our fingers if we don&apos;t hold onto them. This is your place to hold on.
          </p>

          <p>
            Here, you can record your dreams as vividly or loosely as you remember them — not to trap them in rigid detail, but to preserve the feeling they gave you. Even when the imagery fades, that feeling can be found again. Like a soft thread pulled through time, re-reading your dreams can return you to a version of yourself that only exists in sleep.
          </p>

          <p>
            Dreams are like soft fingerprints on water — they vanish, but they leave ripples. You don&apos;t need to remember every detail to return to the feeling. The moment you step into the mood, the texture, the temperature of the dream, it becomes yours again — or maybe it always was.
          </p>

          <p>
            We embrace the magic of evanescent memories — the ones that don&apos;t always make sense, but still feel true. The ache, the beauty, the confusion, the warmth — all of it stays with us, even when the imagery dissolves.
          </p>

          <p>
            Dream Log is your archive, your mirror, your portal. Fill in the gaps. Let your imagination keep the memory warm.
          </p>

          <p className="text-xl font-semibold italic">
            This isn&apos;t just about remembering. It&apos;s about returning.
          </p>
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild size="lg">
            <a href="/add-dream">
              Start Your Dream Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
} 