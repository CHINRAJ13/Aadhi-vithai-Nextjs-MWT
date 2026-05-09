"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";
import { Heart, Coffee, Home, Users } from "lucide-react";

const options = [
  {
    icon: <Coffee className="text-gold" size={32} />,
    title: "Annadanam Support",
    description: "Contribute to the daily traditional food service for residents, seekers, and the local community.",
  },
  {
    icon: <Home className="text-gold" size={32} />,
    title: "Gurukulam Maintenance",
    description: "Support the preservation and upkeep of our sacred spaces and traditional infrastructure.",
  },
  {
    icon: <Users className="text-gold" size={32} />,
    title: "Student Sponsorship",
    description: "Directly support the living expenses and traditional education of full-time residential seekers.",
  },
];

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heart className="mx-auto mb-6 text-gold" size={48} />
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.4em] text-gold uppercase">
              Participation
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium text-charcoal md:text-7xl">
              Support the <span className="italic text-gold">Tradition.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-charcoal/60 leading-relaxed md:text-xl">
              Aadhi Vithai is sustained by those who recognize its value. We see support 
              not as charity, but as active participation in the preservation of truth.
            </p>
          </motion.div>
        </section>

        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {options.map((option, index) => (
                <GlassCard key={option.title} delay={index * 0.1}>
                  <div className="mb-6">{option.icon}</div>
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal">{option.title}</h3>
                  <p className="mb-8 text-charcoal/60 leading-relaxed">{option.description}</p>
                  <Button variant="outline" className="w-full">Contribute Now</Button>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Support Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <h2 className="mb-8 font-serif text-4xl font-medium text-charcoal md:text-5xl">
                  A Path <br />
                  <span className="italic text-gold">Worth Preserving.</span>
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-charcoal/70">
                  <p>
                    For thousands of years, the Siddhar tradition has relied on the 
                    support of those who understand the importance of inner clarity. 
                    In a world increasingly lost in noise, spaces of profound silence 
                    are more vital than ever.
                  </p>
                  <p>
                    Every contribution, no matter the size, goes directly toward maintaining 
                    the Gurukulam and ensuring that the teachings of Aadhi Vithai remain 
                    accessible to all sincere seekers, regardless of their financial status.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-pearl rounded-3xl p-12 text-center border border-charcoal/5">
                <h3 className="mb-6 font-serif text-3xl text-charcoal">"Support is an act of awareness, a realization of our interconnectedness on the path."</h3>
                <div className="h-[1px] w-20 bg-gold mx-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
