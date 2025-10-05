"use client"
import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-chart-1" />
          <span className="text-xl font-semibold text-foreground">BetterStack</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Platform
          </a>
          <a href="#monitoring" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Monitoring
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
        </nav>
        <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-foreground">
                <Link href="/signin">Login</Link>
              </Button>
              <Button size="sm" className="bg-chart-1 text-white hover:bg-chart-1/90">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
      </div>
    </header>
  )
}
