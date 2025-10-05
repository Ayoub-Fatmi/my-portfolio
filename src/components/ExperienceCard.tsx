// src/components/ExperienceCard.tsx
"use client";

import TechBadge from "./TechBadge";
import { useState } from "react";
import Lightbox from "./Lightbox";
import ExperienceDialog from "./ExperienceDialog";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  images?: string[];
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  images = [],
}: ExperienceProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div onClick={() => setDialogOpen(true)} className="cursor-pointer">
        {/* Glowing card container */}
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
          {/* Glowing effect */}
          <GlowingEffect
            blur={0}
            borderWidth={4}
            spread={80}
            glow={true}
            disabled={false}
            proximity={50}
            inactiveZone={0.01}
          />

          {/* Card content */}
          <div className="relative z-10 h-full bg-white dark:bg-zinc-900 rounded-2xl p-5 sm:p-6 flex flex-col">
            <div className="flex gap-5 h-full">
              {/* Image area */}
              <div className="hidden md:block w-1/3 flex-shrink-0">
                {images.length > 0 ? (
                  <div className="w-full h-36 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={images[0]}
                      alt={title}
                      width={288} // w-full in 1/3 of max-w-6xl (~960px/3 = 320px → use 288 for safety)
                      height={144} // h-36 → 36 * 4 = 144px
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://via.placeholder.com/300?text=Preview+Not+Available";
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-36 bg-muted rounded-lg border border-border flex items-center justify-center">
                    <span className="text-muted-foreground text-sm text-center px-2">
                      No preview
                    </span>
                  </div>
                )}
              </div>

              {/* Content area */}
              <div className="flex-1 min-w-0 flex flex-col">
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  {company} • {period}
                </p>

                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 flex-grow overflow-hidden">
                  <span className="line-clamp-3">{description}</span>
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {technologies.map((tech, idx) => (
                    <TechBadge key={idx}>{tech}</TechBadge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        images={
          images.length > 0
            ? images
            : ["https://via.placeholder.com/800x600?text=No+Image"]
        }
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <ExperienceDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={title}
        company={company}
        period={period}
        description={description}
        technologies={technologies}
        images={images}
      />
    </>
  );
}
