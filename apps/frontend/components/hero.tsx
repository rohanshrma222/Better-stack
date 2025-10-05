import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
          See everything.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2">Fix anything.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          All-in-one platform for uptime and incident response with effortless monitoring, status pages, tracing,
          infrastructure monitoring and log management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Your work email"
              className="px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chart-1 w-64"
            />
            <Button size="lg" className="bg-chart-1 text-white hover:bg-chart-1/90 text-base">
                <Link href="/signup" className="flex items-center gap-2 text-[15px]">
                Start for free
                </Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Looking for an enterprise solution?{" "}
          <a href="#" className="text-chart-1 hover:underline">
            Book a demo
          </a>
        </p>
      </div>

      <div className="mt-20 space-y-6">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider">Trusted by developers at</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
          <div className="text-xl font-semibold">Raycast</div>
          <div className="text-xl font-semibold">Shopify</div>
          <div className="text-xl font-semibold">Linear</div>
          <div className="text-xl font-semibold">Vercel</div>
          <div className="text-xl font-semibold">Supabase</div>
          <div className="text-xl font-semibold">Cloudflare</div>
        </div>
      </div>
    </section>
  )
}
