"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold tracking-wide">
          FLOSIGHT DRONEWORKS
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
          <Link href="/services" className="hover:text-foreground transition">
            Services
          </Link>
          <Link href="/gallery" className="hover:text-foreground transition">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-foreground transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground transition">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}
