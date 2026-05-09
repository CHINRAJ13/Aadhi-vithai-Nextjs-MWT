"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const contacts = [
  {
    icon: <IoIosMail size={32} />,
    title: "Email",
    value: "info@aadivithai.com",
    href: "mailto:info@aadivithai.com",
  },
  {
    icon: <FaWhatsapp size={32} />,
    title: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  {
    icon: <FaInstagram size={32} />,
    title: "Instagram",
    value: "@aadivithai",
    href: "https://instagram.com/aadivithai",
  },
  {
    icon: <FaYoutube size={32} />,
    title: "YouTube",
    value: "Aadhi Vithai Tradition",
    href: "https://youtube.com/aadivithai",
  },
  {
    icon: <IoLocationSharp size={32} />,
    title: "Gurukulam",
    value: "South India Heritage",
    href: "#",
  },
];

export default function ContactPage() {
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
              Connect
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium text-charcoal md:text-7xl">
              Reach <span className="italic text-gold">Out.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-charcoal/60 leading-relaxed md:text-xl">
              Whether you have a question about the practice or wish to apply 
              for residency, we are here to support your inquiry.
            </p>
          </motion.div>
        </section>

        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              {contacts.map((contact, index) => (
                <a 
                  key={contact.title} 
                  href={contact.href}
                  className="group"
                >
                  <GlassCard delay={index * 0.1} className="h-full flex flex-col items-center text-center p-6 transition-all hover:scale-105">
                    <div className="mb-6 text-gold group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-semibold text-charcoal">{contact.title}</h3>
                    <p className="text-xs text-charcoal/50 font-medium break-all">{contact.value}</p>
                  </GlassCard>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-medium text-charcoal">Find Us in Stillness</h2>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl border border-charcoal/5 bg-pearl shadow-ambient">
              <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                <IoLocationSharp className="mb-4 text-gold/20" size={64} />
                <p className="text-charcoal/40 italic">Gurukulam location details are provided upon application approval.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
