import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* Eyebrow */}
          <p className="text-sm text-muted-foreground mb-4">
            FAA Certified • Veteran-Owned • Inspection & Media Capture
          </p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            AERIAL DRONE
            <br />
            CAPTURE & INSPECTIONS
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-muted-foreground max-w-md">
            High-resolution drone services for 3D site modeling, property
            inspection, and professional aerial photography. Built for real
            estate, construction, and commercial projects.
          </p>

          {/* Tags */}
          <div className="flex gap-3 mt-6 text-sm text-muted-foreground">
            <span>3D Mapping</span>
            <span>•</span>
            <span>Inspections</span>
            <span>•</span>
            <span>Aerial Photography</span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Request Consultation
            </Link>

            <Link
              href="/services"
              className="px-5 py-3 rounded-md border border-border text-foreground hover:bg-card transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[520px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-purple-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/images/gallery/construction.JPG"
              alt="Construction Site Progress"
              width={900}
              height={700}
              className="w-full h-[520px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
