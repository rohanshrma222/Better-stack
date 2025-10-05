import { Activity, Bell, BarChart3, Globe, FileText, Shield } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Activity,
      title: "Uptime Monitoring",
      description: "Monitor your websites, APIs, and servers from 150+ locations worldwide with sub-minute checks.",
    },
    {
      icon: Bell,
      title: "Incident Management",
      description: "Powerful on-call scheduling, escalation policies, and alert routing to resolve incidents faster.",
    },
    {
      icon: FileText,
      title: "Log Management",
      description: "Centralize logs from all your services with lightning-fast search and powerful filtering.",
    },
    {
      icon: BarChart3,
      title: "Infrastructure Monitoring",
      description: "Track CPU, memory, disk usage, and custom metrics across your entire infrastructure.",
    },
    {
      icon: Globe,
      title: "Status Pages",
      description: "Beautiful, customizable status pages to keep your customers informed during incidents.",
    },
    {
      icon: Shield,
      title: "SSL & Domain Monitoring",
      description: "Never miss an expiring SSL certificate or domain registration with automated alerts.",
    },
  ]

  return (
    <section id="features" className="container mx-auto px-30 py-20 md:py-32">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
          Everything you need to monitor your infrastructure
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive monitoring and incident management tools built for modern development teams.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="p-6 rounded-xl border border-border/40 bg-card/30 hover:bg-card/50 transition-colors group"
            >
              <div className="h-12 w-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4 group-hover:bg-chart-1/20 transition-colors">
                <Icon className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
