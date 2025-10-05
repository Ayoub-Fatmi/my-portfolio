// src/components/BioSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function BioSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/30 bg-muted">
              <Image
                src="/PicCV.png"
                alt="Fatmi Ayoub"
                width={192} // md:w-48 → 48 * 4 = 192px
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glow behind avatar */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10" />
          </div>

          {/* Bio Content */}
          <div className="space-y-5 text-center md:text-left w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                Ayoub Fatmi
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-medium">
              Ingénieur Informatique
            </h2>

            {/* Desktop: full bio */}
            <p className="hidden md:block text-base text-neutral-300 max-w-2xl leading-relaxed text-justify">
              Je suis Fatmi Ayoub,{" "}
              <span className="text-primary font-medium">
                diplômé en génie informatique
              </span>{" "}
              et actuellement en{" "}
              <span className="text-primary font-medium">Master 2 ILIADE</span>{" "}
              à l’UBO en France. Je conçois et développe des applications web et
              desktop, de l’architecture à la mise en production, avec des
              compétences en Java, Angular, .NET et Python. Je me distingue par
              ma capacité à collaborer efficacement et ma facilité d’adaptation.
              Je recherche aujourd’hui un{" "}
              <span className="text-primary font-medium">
                stage de fin d’études
              </span>{" "}
              pour mettre à profit mes compétences, relever de nouveaux défis et
              contribuer à des projets concrets.
            </p>

            {/* Mobile: split bio */}
            <div className="md:hidden space-y-4">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Diplômé en génie informatique et actuellement en{" "}
                <span className="text-primary font-medium">
                  Master 2 ILIADE
                </span>{" "}
                à l’UBO (France), je conçois et développe des applications web
                et desktop — de l’architecture à la production — avec Java,
                Angular, .NET et Python.
              </p>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                À la recherche d’un{" "}
                <span className="text-primary font-medium">
                  stage de fin d’études
                </span>{" "}
                pour relever de nouveaux défis et contribuer à des projets
                concrets.
              </p>
            </div>

            {/* Football sentence — visible on all, but styled differently */}
            <p className="text-sm text-neutral-400 md:text-justify text-center">
              En dehors du code, on me retrouve souvent en train de jouer au
              football, ce qui m’a appris la coopération et la persévérance, des
              valeurs que j’applique dans mon travail.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="px-6 sm:px-8 w-full sm:w-auto"
              >
                <Link href="#experience">Découvrir mon travail</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 w-full sm:w-auto border-neutral-700 hover:bg-neutral-800/50"
              >
                <Link href="#contact">Contactez-moi</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
