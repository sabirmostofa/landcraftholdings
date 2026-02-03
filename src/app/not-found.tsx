import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center text-center px-4">
      <Search className="w-24 h-24 text-primary/20 mb-4" />
      <h1 className="text-6xl font-headline font-bold text-primary">404</h1>
      <h2 className="mt-4 text-3xl font-headline font-semibold">Page Not Found</h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back to Homepage</Link>
      </Button>
    </div>
  )
}
