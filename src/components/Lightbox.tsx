"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  startIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({
  images,
  startIndex,
  isOpen,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    if (isOpen) setCurrentIndex(startIndex);
  }, [isOpen, startIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <div
          className="relative max-w-6xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white text-2xl hover:text-primary"
            aria-label="Close"
          >
            &times;
          </button>

          <div className="relative">
            <Image
              src={images[currentIndex]}
              alt={`Project view ${currentIndex + 1}`}
              width={800} // or your max expected width
              height={600} // maintain aspect ratio
              className="w-full max-h-[80vh] object-contain rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/placeholder.png";
              }}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev > 0 ? prev - 1 : images.length - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev < images.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
