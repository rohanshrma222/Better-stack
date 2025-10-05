export function Stats() {
    const stats = [
      {
        value: "99.99%",
        label: "uptime SLA",
        company: "Reliability",
      },
      {
        value: "< 1min",
        label: "average incident response",
        company: "Speed",
      },
      {
        value: "10M+",
        label: "checks per day",
        company: "Scale",
      },
      {
        value: "150+",
        label: "global monitoring locations",
        company: "Coverage",
      },
    ]
  
    return (
      <section className="border-y border-border/40 bg-card/30 ml-30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider">{stat.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  