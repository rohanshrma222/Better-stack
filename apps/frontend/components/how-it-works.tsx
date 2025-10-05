import { Zap } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Services",
      description:
        "Integrate with your infrastructure in minutes using our SDKs, agents, or API. Support for all major platforms and languages.",
    },
    {
      number: "02",
      title: "Configure Monitoring",
      description:
        "Set up uptime checks, log collection, and custom metrics. Define alert rules and notification channels for your team.",
    },
    {
      number: "03",
      title: "Respond to Incidents",
      description:
        "Get instant alerts when issues occur. Use our incident management tools to coordinate response and resolve problems fast.",
    },
    {
      number: "04",
      title: "Analyze & Improve",
      description:
        "Review detailed analytics, identify patterns, and optimize your infrastructure based on real-time insights and historical data.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-card/30 border-y border-border/40 px-25">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chart-1/10 border border-chart-1/20">
              <Zap className="h-4 w-4 text-chart-1" />
              <span className="text-sm text-chart-1 font-medium">Quick Setup</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Start monitoring in minutes</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our streamlined onboarding process gets you up and running quickly, so you can focus on building great
              products.
            </p>
          </div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-xl border border-border/40 bg-background hover:bg-card/50 transition-colors"
              >
                <div className="text-3xl font-bold text-chart-1/40 font-mono">{step.number}</div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
