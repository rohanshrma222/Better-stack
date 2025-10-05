import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Header } from "@/components/header"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
    </main>
  )
}
