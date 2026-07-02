
import { FacebookLogoIcon, InstagramLogoIcon, MailboxIcon, MapPinIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold">FloSight Droneworks</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Aerial imaging, inspections, 3D modeling, and FPV capture services
              across Central Florida.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link
                href="#services"
                className="hover:text-foreground transition"
              >
                Services
              </Link>
              <Link
                href="#gallery"
                className="hover:text-foreground transition"
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="hover:text-foreground transition"
              >
                Contact
              </Link>
              <Link href="#home" className="hover:text-foreground transition">
                Home
              </Link>
            </div>
          </div>

          {/* CONTACT / SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MailboxIcon size={16} />
                <span>info@flosightdrones.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPinIcon size={16} />
                <span>Central Florida</span>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/flosightdrones/"
                target="_blank"
                className="hover:text-primary transition"
              >
                <InstagramLogoIcon size={18} />
              </a>

              <a
                href="https://www.youtube.com/@FloSightDrones"
                target="_blank"
                className="hover:text-primary transition"
              >
                <YoutubeLogoIcon size={18} />
              </a>

              <a
                href="https://www.facebook.com/FLoSightDrones"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FacebookLogoIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FloSight Droneworks LLC</p>
          <p>FAA Part 107 Certified • Fully Insured</p>
        </div>
      </div>
    </footer>
  );
}
