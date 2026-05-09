"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import Image from "next/image";
import { Users, Utensils, Zap, Shield } from "lucide-react";

const pillars = [
  {
    icon: <Shield className="text-gold" size={32} />,
    title: "Silence",
    description: "The primary teacher. In silence, the noise of the mind becomes visible.",
  },
  {
    icon: <Zap className="text-gold" size={32} />,
    title: "Discipline",
    description: "A structured life that serves the pursuit of clarity and awareness.",
  },
  {
    icon: <Users className="text-gold" size={32} />,
    title: "Community",
    description: "Living with fellow seekers in a shared commitment to the path.",
  },
  {
    icon: <Utensils className="text-gold" size={32} />,
    title: "Annadanam",
    description: "Traditional food service provided to all residents and visitors.",
  },
];

export default function GurukulamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.4em] text-gold uppercase">
              Our Home
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium text-charcoal md:text-7xl">
              A Living <span className="italic text-gold">Gurukulam.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-charcoal/60 leading-relaxed md:text-xl">
              More than a space, it is a living entity where the ancient tradition 
              breathes through every action and every moment of silence.
            </p>
          </motion.div>
        </section>

        {/* Cinematic Section */}
        <section className="relative h-[70vh] w-full">
          <Image
            src="/images/gurukulam.png"
            alt="Gurukulam Architecture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </section>

        {/* Pillars Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="mb-6 font-serif text-4xl font-medium text-charcoal md:text-5xl">
                The <span className="italic text-gold">Four Pillars.</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-charcoal/60">
                The foundation of life at Aadhi Vithai ensures that every student 
                is supported in their inward journey.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, index) => (
                <GlassCard key={pillar.title} delay={index * 0.1}>
                  <div className="mb-6">{pillar.icon}</div>
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal">{pillar.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{pillar.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Life at Gurukulam Section */}
        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-8 font-serif text-4xl font-medium text-charcoal md:text-5xl">
                  Life in <br />
                  <span className="italic text-gold">Authenticity.</span>
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-charcoal/70">
                  This is NOT a retreat, a holiday, or a weekend workshop. Residents 
                  at Aadhi Vithai participate in the daily life of the Gurukulam—which 
                  includes maintenance, food service, and chanting, all performed 
                  in awareness.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 border-b border-charcoal/5 pb-4">
                    <span className="font-serif text-2xl text-gold">25+</span>
                    <span className="text-charcoal/60 uppercase tracking-widest text-xs font-bold">Residential Students</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-charcoal/5 pb-4">
                    <span className="font-serif text-2xl text-gold">Daily</span>
                    <span className="text-charcoal/60 uppercase tracking-widest text-xs font-bold">Annadanam Service</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-charcoal/5 pb-4">
                    <span className="font-serif text-2xl text-gold">365 Days</span>
                    <span className="text-charcoal/60 uppercase tracking-widest text-xs font-bold">A Living Tradition</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-3xl shadow-ambient">
                <div className="absolute inset-0 bg-gold/10" />
                <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                  <h3 className="font-serif text-3xl font-medium text-charcoal">"To live here is to face oneself without distraction."</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
