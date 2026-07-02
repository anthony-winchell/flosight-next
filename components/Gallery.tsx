"use client";

import { gallery } from "@/lib/gallery";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            A selection of aerial captures across residential, commercial, and
            mapping projects.
          </p>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {gallery.map((item) => (
            <Dialog key={item.title}>
              {/* Trigger image */}
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                    <div className="translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                      <p className="text-white text-sm font-medium">
                        {item.title}
                      </p>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {/* Modal */}
              <DialogContent className="max-w-5xl bg-black border-border animate-in fade-in zoom-in-95 duration-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
