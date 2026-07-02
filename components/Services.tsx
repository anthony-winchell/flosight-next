import { services } from "@/lib/services";
import Section from "@/components/ui/Section";

export function Services() {
  return (
    <div id="services">
      <Section
        title="Services"
        subtitle="A structured suite of aerial capture, mapping, and inspection services."
      >
        <div  className="space-y-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="h-[320px] rounded-xl border border-border bg-card relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-orange-500/10 to-cyan-400/10" />
                <div className="relative h-full flex items-center justify-center text-muted-foreground">
                  Visual Placeholder
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {service.category}
                </p>

                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>

                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <ul className="text-sm text-muted-foreground space-y-2">
                  {service.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}