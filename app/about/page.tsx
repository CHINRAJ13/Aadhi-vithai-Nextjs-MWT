"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.4em] text-gold uppercase">
              The Essence
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium text-charcoal md:text-7xl">
              Rooted in <span className="italic text-gold">Tradition.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-charcoal/60 leading-relaxed md:text-xl">
              Aadhi Vithai is an ancient Tamil Siddhar tradition, preserved for centuries 
              and shared today in its purest form to help seekers understand the nature of the mind.
            </p>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-ambient">
                  <Image
                    src="/images/about.png"
                    alt="Siddhar Heritage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="mb-8 font-serif text-4xl font-medium text-charcoal md:text-5xl">
                  A Path of <br />
                  <span className="italic text-gold">Direct Observation.</span>
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-charcoal/70">
                  <p>
                    The Tamil Siddhar tradition is not one of belief or dogma. It is a tradition 
                    of science—the science of the inner self. For thousands of years, 
                    Siddhars have explored the boundaries of human consciousness through 
                    direct observation.
                  </p>
                  <p>
                    At Aadhi Vithai, we maintain this purity. We do not offer guided meditations 
                    or mental techniques designed to soothe. Instead, we provide the environment 
                    and the guidance for you to notice the one who is already quiet within you.
                  </p>
                  <p className="font-serif italic text-gold text-2xl">
                    "Truth is not something to be achieved; it is something to be observed."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Lineage Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="mb-6 font-serif text-4xl font-medium text-charcoal md:text-5xl">
                The <span className="italic text-gold">Lineage.</span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-charcoal/60">
                Lineage is the thread that keeps the teaching alive and authentic. 
                Our Gurukulam is built on the direct realizations of the Siddhar masters.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <GlassCard>
                <h4 className="mb-4 text-xs font-bold tracking-widest text-gold uppercase">Foundation</h4>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal">Tamil Siddhar Heritage</h3>
                <p className="text-charcoal/60 leading-relaxed">
                  Deeply rooted in the ancient spiritual geography of South India, 
                  where awareness was explored as the ultimate reality.
                </p>
              </GlassCard>

              <GlassCard delay={0.1}>
                <h4 className="mb-4 text-xs font-bold tracking-widest text-gold uppercase">Guidance</h4>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal">Shree Datta Easanamma</h3>
                <p className="text-charcoal/60 leading-relaxed">
                  Leading the tradition with profound stillness and direct clarity, 
                  ensuring the teachings remain applicable for today's seeker.
                </p>
              </GlassCard>

              <GlassCard delay={0.2}>
                <h4 className="mb-4 text-xs font-bold tracking-widest text-gold uppercase">Living Proof</h4>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal">Direct Experience</h3>
                <p className="text-charcoal/60 leading-relaxed">
                  The tradition lives not in books, but in the direct experience 
                  of those who practice within the Gurukulam.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
