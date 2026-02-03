import { cn } from "@/lib/utils"

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
       <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary mr-2"
      >
        <rect width="32" height="32" rx="8" fill="currentColor"/>
        <path d="M9 23V9H14.5C16.9853 9 19 11.0147 19 13.5V13.5C19 15.9853 16.9853 18 14.5 18H12" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18L15 23" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="font-headline text-xl font-bold tracking-tighter">
        Landcraft Holdings
      </span>
    </div>
  )
}
