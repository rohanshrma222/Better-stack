import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
          Ready to transform how you spend your time?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who have mastered their schedules and achieved better work-life balance with
          personalized coaching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
            Start Your Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base border-border text-foreground hover:bg-secondary bg-transparent"
          >
            Talk to Sales
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
