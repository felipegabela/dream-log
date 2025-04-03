import { Sparkles } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="flex items-center space-x-2 mb-8">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Terms of Service</h1>
      </div>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-8">
          Welcome to DreamLog. By using our service, you agree to these terms. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using DreamLog, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
        <p>
          DreamLog is a personal dream journal application that allows you to record, organize, and reflect on your dreams. The service is provided &quot;as is&quot; and we make no warranties of any kind.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
        <p>
          As a user of DreamLog, you agree to:
        </p>
        <ul>
          <li>Use the service for personal, non-commercial purposes only</li>
          <li>Not attempt to reverse engineer or modify the application</li>
          <li>Not use the service for any illegal or unauthorized purpose</li>
          <li>Be responsible for maintaining the confidentiality of your data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Storage</h2>
        <p>
          DreamLog stores all data locally on your device. We are not responsible for any data loss that may occur due to:
        </p>
        <ul>
          <li>Clearing your browser&apos;s local storage</li>
          <li>Using private/incognito browsing mode</li>
          <li>Browser updates or changes</li>
          <li>Device malfunctions or loss</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any changes by updating the &quot;Last updated&quot; date at the bottom of this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
        <p>
          DreamLog shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
        </p>

        <p className="mt-8 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
} 