"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">{"Let's Connect"}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Interested in working together? Feel free to reach out through
          LinkedIn or WhatsApp!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link
              href="https://www.linkedin.com/in/ayoub-fatmi/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="https://wa.me/+33635001005" target="_blank">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
