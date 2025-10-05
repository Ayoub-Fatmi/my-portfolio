// src/components/ExperienceDialog.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechBadge from "./TechBadge";
import Lightbox from "./Lightbox";

interface ExperienceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  images?: string[];
}

export default function ExperienceDialog({
  isOpen,
  onClose,
  title,
  company,
  period,
  description,
  technologies,
  images = [],
}: ExperienceDialogProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl border border-border shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center text-black dark:text-white hover:bg-black/20 dark:hover:bg-white/20 transition"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-black dark:text-white">{title}</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {company} • {period}
                </p>
              </div>

              {/* Images */}
              {images.length > 0 && (
                <div className="mb-6">
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {images.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setLightboxIndex(idx);
                          setLightboxOpen(true);
                        }}
                        className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden border border-border cursor-pointer"
                      >
                        <img
                          src={img}
                          alt={`${title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/300?text=Preview+Not+Available";
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full description */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {description}
              </p>

              {/* Tech stack */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <TechBadge key={idx}>{tech}</TechBadge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Lightbox for full-size image viewing */}
      <Lightbox
        images={images.length > 0 ? images : ["https://via.placeholder.com/800x600"]}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}