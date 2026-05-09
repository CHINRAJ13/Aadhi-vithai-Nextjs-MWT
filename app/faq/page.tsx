"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is Aadhi Vithai a religion?",
    answer: "No. Aadhi Vithai is a spiritual awareness tradition rooted in the Tamil Siddhar lineage. It does not require belief in any specific deity or dogma. It is a path of direct observation and self-understanding that is open to people of all backgrounds and faiths.",
  },
  {
    question: "Can beginners join the Gurukulam?",
    answer: "Yes. Sincerity is the only prerequisite. We welcome those who have never practiced awareness or meditation before, as well as experienced seekers. The residential environment is designed to support the transition from a noisy mind to a state of stillness.",
  },
  {
    question: "Is there a fee for staying at the Gurukulam?",
    answer: "We operate on a participation-based model. While we do not have fixed commercial fees, we rely on the contributions of residents and supporters to maintain the Gurukulam and provide food (Annadanam). We believe the path should be accessible to all sincere seekers.",
  },
  {
    question: "How long can I stay?",
    answer: "For first-time visitors, we typically recommend a stay of 3 to 7 days to experience the foundation of our practice. Long-term residential options are available for students who demonstrate a deep commitment to the tradition and the path of awareness.",
  },
  {
    question: "What is the daily schedule like?",
    answer: "The schedule is structured around silence and awareness. It includes periods of quiet sitting, traditional chanting, shared meals (Annadanam), and participation in the Gurukulam's daily maintenance activities. The focus is on maintaining awareness in every action.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <HelpCircle className="mx-auto mb-6 text-gold" size={48} />
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.4em] text-gold uppercase">
              Clarification
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium text-charcoal md:text-7xl">
              Common <span className="italic text-gold">Inquiries.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-charcoal/60 leading-relaxed md:text-xl">
              Understanding the path of awareness and the logistics of our 
              Gurukulam.
            </p>
          </motion.div>
        </section>

        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-charcoal/5 bg-white transition-all shadow-ambient"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-serif text-xl font-semibold text-charcoal">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="text-gold" size={24} />
                    ) : (
                      <ChevronDown className="text-gold" size={24} />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openIndex === index ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-charcoal/5 p-6 text-charcoal/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-8 text-lg text-charcoal/60">
              Still have questions? We are here to guide you.
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:info@aadivithai.com" className="text-gold font-bold uppercase tracking-widest hover:underline decoration-gold underline-offset-8">Email Us</a>
              <span className="text-charcoal/20">|</span>
              <a href="#" className="text-gold font-bold uppercase tracking-widest hover:underline decoration-gold underline-offset-8">Message on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
