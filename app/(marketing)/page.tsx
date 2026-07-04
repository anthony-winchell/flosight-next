import Contact from "@/components/marketing/Contact";
import Hero from "@/components/marketing/Hero";
import { Services } from "@/components/marketing/Services";
import Gallery from "@/components/marketing/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </main>
  );
}
