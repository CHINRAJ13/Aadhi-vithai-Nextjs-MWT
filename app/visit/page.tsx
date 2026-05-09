"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";
import { useState } from "react";

export default function VisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    purpose: "",
    duration: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application received. We will contact you soon.");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-6 py-20">
          <div className="flex flex-col gap-16 lg:flex-row">
            {/* Content Area */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="mb-4 inline-block text-xs font-bold tracking-[0.4em] text-gold uppercase">
                  Join Us
                </span>
                <h1 className="mb-8 font-serif text-5xl font-medium text-charcoal md:text-7xl">
                  Begin Your <span className="italic text-gold">Journey.</span>
                </h1>
                <p className="mb-12 text-lg text-charcoal/60 leading-relaxed md:text-xl">
                  We welcome all sincere seekers who are ready to experience the 
                  stillness and authenticity of our Gurukulam. Please fill out the 
                  form to apply for a residential stay.
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-4 font-serif text-2xl font-semibold text-charcoal">Visitor Guidelines</h4>
                    <ul className="space-y-4 text-charcoal/60">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span>Residents must observe the Gurukulam's discipline and silence.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span>Participation in daily activities is mandatory.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span>A minimum stay of 3 days is recommended.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Area */}
            <div className="w-full lg:w-1/2">
              <GlassCard>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-charcoal/40 uppercase">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full border-b border-charcoal/10 bg-transparent py-2 text-charcoal focus:border-gold outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-charcoal/40 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full border-b border-charcoal/10 bg-transparent py-2 text-charcoal focus:border-gold outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-charcoal/40 uppercase">Country</label>
                      <input
                        type="text"
                        required
                        className="w-full border-b border-charcoal/10 bg-transparent py-2 text-charcoal focus:border-gold outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-charcoal/40 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full border-b border-charcoal/10 bg-transparent py-2 text-charcoal focus:border-gold outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-charcoal/40 uppercase">Purpose of Visit</label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-charcoal/10 bg-transparent py-2 text-charcoal focus:border-gold outline-none transition-colors"
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-charcoal/40 uppercase">Preferred Duration</label>
                    <select
                      required
                      className="w-full border-b border-charcoal/10 bg-transparent py-2 text-charcoal focus:border-gold outline-none transition-colors"
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    >
                      <option value="">Select Duration</option>
                      <option value="3-7 days">3 - 7 Days</option>
                      <option value="1-2 weeks">1 - 2 Weeks</option>
                      <option value="1 month">1 Month</option>
                      <option value="Long term">Long Term</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-charcoal/40 uppercase">Message</label>
                    <textarea
                      rows={4}
                      className="w-full border border-charcoal/10 bg-transparent p-4 text-charcoal focus:border-gold outline-none transition-colors rounded-xl"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">Apply to Visit</Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
