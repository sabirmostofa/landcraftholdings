import { cn } from "@/lib/utils"

export default function Logo({ className, showTagline = false }: { className?: string, showTagline?: boolean }) {
  return (
    <div className={cn("flex items-center", className)}>
       <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
        >
        <g>
            <rect width="100" height="100" rx="20" fill="hsl(var(--primary))" />
            <path d="M30 70 L30 30 L50 30" stroke="hsl(var(--primary-foreground))" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70 30 L70 70 L50 70" stroke="hsl(var(--primary-foreground))" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>
      <div>
        <span className="font-headline text-xl font-bold tracking-tighter uppercase">
          Landcraft Holdings
        </span>
        {showTagline && (
        <p className="font-body text-xs text-muted-foreground -mt-1">
            building your dream
        </p>
        )}
      </div>
    </div>
  )
}
