import { Sparkles } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="flex items-center space-x-2 mb-8">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </div>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-8">
          At DreamLog, we believe in protecting your dreams and your privacy. This policy explains how we handle your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Dreams, Your Data</h2>
        <p>
          All your dream entries are stored locally on your device. We don&apos;t collect, store, or transmit your dream data to any servers. Your dreams remain private and accessible only to you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Local Storage</h2>
        <p>
          DreamLog uses your browser&apos;s local storage to save your dream entries. This means your data stays on your device and isn&apos;t shared with us or any third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">No Tracking</h2>
        <p>
          We don&apos;t use any analytics or tracking tools. Your journey through DreamLog remains completely private.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p>
          Since all your data is stored locally, you have complete control over it. You can:
        </p>
        <ul>
          <li>View all your dream entries</li>
          <li>Edit or delete entries at any time</li>
          <li>Export your data if you wish to back it up</li>
          <li>Clear all data by clearing your browser&apos;s local storage</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be reflected on this page.
        </p>

        <p className="mt-8 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
} 