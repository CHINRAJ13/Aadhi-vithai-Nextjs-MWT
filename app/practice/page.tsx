"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sit Quietly",
    description: "Find a space where you won't be disturbed for 20 minutes. Sit in a posture that is both comfortable and alert. Close your eyes and allow the body to become still.",
  },
  {
    number: "02",
    title: "Allow Thoughts",
    description: "Do not try to meditate. Do not try to focus. Simply let every thought, emotion, or sensation arise exactly as it is. Do not resist anything; do not follow anything.",
  },
  {
    number: "03",
    title: "Notice Awareness",
    description: "Simply observe that you are aware of whatever is appearing. The thoughts are changing, but the awareness in which they appear is unchanging and still.",
  },
];

export default function PracticePage() {
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
              The Path
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium text-charcoal md:text-7xl">
              The Way of <span className="italic text-gold">Awareness.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-charcoal/60 leading-relaxed md:text-xl">
              A path that requires no belief, no special technique, and no mental control. 
              Only the courage to see things as they are.
            </p>
          </motion.div>
        </section>

        {/* Steps Section */}
        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex gap-8"
                    >
                      <span className="font-serif text-4xl font-light text-gold/30">{step.number}</span>
                      <div>
                        <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal">{step.title}</h3>
                        <p className="text-lg leading-relaxed text-charcoal/60">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white shadow-2xl">
                  <Image
                    src="/images/practice.png"
                    alt="Direct Practice"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gold/5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="mb-6 font-serif text-4xl font-medium text-charcoal md:text-5xl">
                A <span className="italic text-gold">Different</span> Approach.
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-charcoal/60">
                Understanding why direct awareness is fundamentally different from 
                traditional meditation techniques.
              </p>
            </div>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-charcoal/5 bg-white shadow-ambient">
              <div className="grid grid-cols-2 bg-charcoal text-white text-sm font-bold tracking-widest uppercase">
                <div className="p-6 text-center border-r border-white/10">Traditional Methods</div>
                <div className="p-6 text-center text-gold">Aadhi Vithai</div>
              </div>
              
              <div className="divide-y divide-charcoal/5">
                <div className="grid grid-cols-2">
                  <div className="p-8 text-charcoal/50 border-r border-charcoal/5">Focus on controlling or calming the mind through techniques.</div>
                  <div className="p-8 text-charcoal font-medium flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                    Focus on understanding the mind by letting it be exactly as it is.
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-8 text-charcoal/50 border-r border-charcoal/5">Requires belief, visualization, or repeating mantras.</div>
                  <div className="p-8 text-charcoal font-medium flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                    Requires only direct, non-judgmental observation.
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-8 text-charcoal/50 border-r border-charcoal/5">Goal is to reach a specific "peaceful" state or experience.</div>
                  <div className="p-8 text-charcoal font-medium flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                    Goal is clarity—the realization that you are already awareness.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-32 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-8 font-serif text-4xl font-medium md:text-5xl">
              Ready to <span className="italic text-gold">See for Yourself?</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white/60">
              The practice is simple, but the journey is profound. Apply to visit our 
              Gurukulam for deeper residential guidance.
            </p>
            <Link href="/visit">
              <Button size="lg">Apply for Residential Learning</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
