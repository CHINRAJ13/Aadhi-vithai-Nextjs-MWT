"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import { FileText, PlayCircle, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/Button";

const resources = [
  {
    type: "Guide",
    icon: <Download className="text-gold" size={24} />,
    title: "Beginner's Guide to Awareness",
    description: "A comprehensive PDF guide on the basics of self-observation and the Aadhi Vithai method.",
    action: "Download PDF",
  },
  {
    type: "Article",
    icon: <FileText className="text-gold" size={24} />,
    title: "The Nature of Thought",
    description: "An exploration into how the mind creates illusion and how to remain as the observer.",
    action: "Read Article",
  },
  {
    type: "Video",
    icon: <PlayCircle className="text-gold" size={24} />,
    title: "Introduction to Silence",
    description: "A short cinematic introduction to the role of silence in our traditional practice.",
    action: "Watch Video",
  },
  {
    type: "Article",
    icon: <BookOpen className="text-gold" size={24} />,
    title: "The Siddhar Tradition",
    description: "Understanding the roots of our lineage and the ancient science of the inner self.",
    action: "Read Article",
  },
];

export default function ResourcesPage() {
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
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.4em] text-gold uppercase">
              Knowledge Hub
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium text-charcoal md:text-7xl">
              Deepen Your <span className="italic text-gold">Understanding.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-charcoal/60 leading-relaxed md:text-xl">
              A curated collection of resources designed to support your journey 
              into awareness and the Siddhar tradition.
            </p>
          </motion.div>
        </section>

        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource, index) => (
                <GlassCard key={resource.title} delay={index * 0.1} className="flex flex-col h-full">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="p-3 bg-white rounded-xl shadow-ambient">
                      {resource.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-gold uppercase">{resource.type}</span>
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-charcoal flex-grow">{resource.title}</h3>
                  <p className="mb-8 text-sm text-charcoal/60 leading-relaxed">{resource.description}</p>
                  <Button variant="outline" className="w-full text-xs py-2">{resource.action}</Button>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Quote */}
        <section className="py-32">
          <div className="container mx-auto px-6 text-center">
            <div className="mx-auto max-w-3xl">
              <p className="font-serif text-3xl italic text-charcoal/80 leading-relaxed">
                "Information is not wisdom. Wisdom is the direct observation of truth 
                beyond the movement of the mind."
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
