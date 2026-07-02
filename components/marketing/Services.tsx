import { services } from "@/lib/marketing/services";
import Section from "@/components/ui/Section";
import Image from "next/image";

export function Services() {
  return (
    <div>
      <Section
        title="Services"
        subtitle="A structured suite of aerial capture, mapping, and inspection services."
      >
        <div className="space-y-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {service.mediaType === "image" ? (
                <div className="relative h-[360px] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
                  <iframe
                    src={`https://lumalabs.ai/embed/${service.lumaId}?mode=sparkles&showMenu=false`}
                    className="absolute inset-0 h-full w-full"
                    allowFullScreen
                  />
                </div>
              )}

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
