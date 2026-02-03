import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Ban } from 'lucide-react'

export default function PageRemoved() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center text-center px-4">
      <Ban className="w-24 h-24 text-destructive/20 mb-4" />
      <h1 className="mt-4 text-3xl font-headline font-semibold">Page Removed</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        This page and its functionality have been removed.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back to Homepage</Link>
      </Button>
    </div>
  )
}
