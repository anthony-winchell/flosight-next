import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/updated-hero.png"
            alt="FloSight Drones"
            width={280}
            height={280}
            className="w-48 md:w-60 lg:w-72 h-auto"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            FAA Certified • Veteran-Owned • Inspection & Media Capture
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            AERIAL DRONE
            <br />
            CAPTURE & INSPECTIONS
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Servicing <b>Central Florida</b> with high-resolution drone services
            for 3D site modeling, property inspections, and professional aerial
            photography. Built for real estate, construction, infrastructure,
            and commercial projects.
          </p>

          <div className="flex justify-center gap-3 mt-6 text-sm text-muted-foreground flex-wrap">
            <span>3D Mapping</span>
            <span>•</span>
            <span>Inspections</span>
            <span>•</span>
            <span>Aerial Photography</span>
          </div>
          <h3 className="mt-6 text-2xl font-semibold">(352) 729-1059</h3>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Request Consultation
            </Link>

            <Link
              href="#services"
              className="px-6 py-3 rounded-md border border-border hover:bg-card transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-16">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-orange-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/images/gallery/construction.JPG"
              alt="Construction Site Progress"
              width={1600}
              height={900}
              className="w-full h-[500px] md:h-[600px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
