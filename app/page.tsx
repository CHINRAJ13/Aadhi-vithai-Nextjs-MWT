"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-hidden text-charcoal">
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION (Unchanged) */}
        <section className="relative flex min-h-screen items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://res.cloudinary.com/dregnmagh/image/upload/v1778060747/ChatGPT_Image_May_6_2026_03_15_09_PM_uuieol.png"
              alt="Sacred Stillness"
              fill
              className="object-cover opacity-60 transition-transform duration-[20s] hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
          </div>

          <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto max-w-4xl"
            >
              <motion.h1 variants={fadeUp} className="mb-8 font-serif text-5xl font-medium leading-tight md:text-7xl lg:text-8xl">
                You are not your thoughts.<br />
                <span className="italic text-gold">You are the one aware of them.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-charcoal/70 md:text-xl">
                An ancient Tamil Siddhar approach to understanding the mind—<br className="hidden md:block"/>
                lived today in a traditional Gurukulam.
                <br /><br />
                No belief. No rituals. No complexity.
                Only direct observation.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-6 md:flex-row">
                <Link href="/practice">
                  <Button size="lg">Start Here</Button>
                </Link>
                <Link href="/gurukulam">
                  <Button variant="ghost" size="lg" className="group">
                    Experience the Gurukulam
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. HUMAN ENTRY (RELATABLE TRUTH) - Layout Update */}
        <section className="bg-pearl py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[3/2] overflow-hidden rounded-2xl"
              >
                <Image
                  src="https://res.cloudinary.com/dregnmagh/image/upload/v1778058773/ChatGPT_Image_May_6_2026_02_33_44_PM_os91wd.png"
                  alt="Human reflection"
                  fill
                  className="object-cover transition-transform duration-[8s] h-[80vh] w-[50vw] hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-charcoal/20" />
                <div className="absolute -top-[1px] -right-[1px] w-20 h-20 border-t border-r border-gold/40 z-10"></div> */}
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeUp} className="mb-4 inline-block text-xs font-bold tracking-widest text-gold uppercase">
                  The Human Condition
                </motion.span>
                <motion.div variants={fadeUp} className="space-y-6 font-serif text-3xl md:text-5xl font-medium leading-tight text-charcoal mb-8">
                  <p>You try to be calm…<br />but your mind keeps moving.</p>
                  <p>You look for clarity…<br />but thoughts keep interfering.</p>
                </motion.div>
                <motion.div variants={fadeUp} className="border-t border-charcoal/10 pt-8 mt-8">
                  <p className="text-xl text-charcoal/70 italic">
                    "This is not a problem to fix.<br />It is something to understand."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. THE SHIFT (CLARITY MOMENT) */}
        <section className="py-32 relative overflow-hidden flex items-center min-h-[60vh]">
          <div className="absolute inset-0 bg-charcoal">
            <Image
              src="https://res.cloudinary.com/dregnmagh/image/upload/v1778061257/8db63f6b-568f-4680-b816-24cbbc620f18_djunkc.png"
              alt="Clarity"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />
          </div>
          
          <div className="container relative z-10 mx-auto px-6 text-center text-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-4xl"
            >
              <span className="mb-6 inline-block text-xs font-bold tracking-widest text-gold uppercase">
                A Different Way
              </span>
              <h2 className="mb-8 font-serif text-4xl md:text-6xl font-medium leading-tight">
                What if you didn’t try to control your mind?<br />
                <span className="italic text-gold">What if you simply observed it?</span>
              </h2>
              <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent mx-auto my-8"></div>
              <div className="text-xl text-white/60 space-y-2">
                <p>Not forcing silence. Not chasing peace.</p>
                <p className="text-white font-medium">Just seeing clearly.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. WHAT YOU WILL DISCOVER */}
        <section className="bg-white py-32">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-20">
              <span className="mb-4 inline-block text-xs font-bold tracking-widest text-gold uppercase">
                Through Observation
              </span>
              <h2 className="font-serif text-4xl font-medium md:text-5xl text-charcoal">
                You begin to see
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {[
                "Why thinking never stops",
                "How thoughts lose intensity when not followed",
                "What awareness actually is",
                "A natural sense of clarity—without effort"
              ].map((text, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-8 border-b border-black/5 pb-8 last:border-0"
                >
                  <span className="font-serif text-5xl md:text-6xl text-charcoal/10 font-bold mt-1">
                    0{idx + 1}
                  </span>
                  <p className="text-xl md:text-2xl text-charcoal/80 pt-2">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SIMPLE PRACTICE */}
        <section className="bg-charcoal text-white py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20">
              <span className="mb-4 inline-block text-xs font-bold tracking-widest text-gold uppercase">
                How to begin
              </span>
              <h2 className="font-serif text-4xl font-medium md:text-5xl">
                Three steps. Nothing more.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
              {[
                { roman: "I", title: "Sit quietly", text: "Find a space where you won't be disturbed." },
                { roman: "II", title: "Let thoughts come", text: "Do not try to stop or change them." },
                { roman: "III", title: "Notice awareness", text: "Simply observe that you are aware." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group relative p-10 md:p-14 border-b md:border-b-0 border-r-0 md:border-r border-white/10 last:border-r-0"
                >
                  <span className="font-serif text-6xl text-white/5 block mb-6">{step.roman}</span>
                  <h3 className="font-serif text-2xl font-medium text-white mb-4">{step.title}</h3>
                  <p className="text-white/50 text-lg leading-relaxed">{step.text}</p>
                  <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-gold/50 to-transparent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center pt-20 mt-1 border-t border-white/10">
              <p className="text-2xl italic font-serif text-white/50">
                "That’s it. No technique. No control. No goal."
              </p>
            </div>
          </div>
        </section>

        {/* 6. DIFFERENT FROM EVERYTHING ELSE */}
        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-20">
              <span className="mb-4 inline-block text-xs font-bold tracking-widest text-gold uppercase">
                Inquiry
              </span>
              <h2 className="font-serif text-4xl font-medium md:text-5xl text-charcoal">
                Why Aadhi Vithai is Different
              </h2>
            </div>
            
            <div className="space-y-16">
              {[
                { 
                  title: "Approach", 
                  left: "Try to control mind",
                  right: "Understand the mind"
                },
                { 
                  title: "Method", 
                  left: "Guided techniques",
                  right: "Direct observation"
                },
                { 
                  title: "Outcome", 
                  left: "Goal-oriented",
                  right: "No goal—only clarity"
                }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-b border-charcoal/5 pb-16 last:border-0 last:pb-0">
                  <div>
                    <h3 className="text-sm tracking-widest uppercase text-gold font-bold mb-4">{item.title}</h3>
                    <div className="w-10 h-[1px] bg-gold/30"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <span className="text-xs tracking-widest uppercase text-charcoal/40 font-bold block mb-4">Most Methods</span>
                      <p className="text-lg text-charcoal/60 italic">{item.left}</p>
                    </div>
                    <div>
                      <span className="text-xs tracking-widest uppercase text-gold font-bold block mb-4">Aadhi Vithai</span>
                      <p className="text-lg text-charcoal font-medium">{item.right}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. TWO PATHS (GLOBAL + DEPTH) */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 z-10"></div>
          
          <div className="group relative flex flex-col justify-end p-12 md:p-20 min-h-[50vh] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dregnmagh/image/upload/v1778061677/ChatGPT_Image_May_6_2026_03_30_47_PM_nkgl1a.png')] bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-xs tracking-widest uppercase text-gold font-bold block mb-6">Start Anywhere</span>
              <h3 className="font-serif text-4xl md:text-5xl font-medium mb-6">Aadhivithai</h3>
              <p className="text-lg text-white/70 mb-10 max-w-sm">
                Simple, direct understanding of the mind — accessible to anyone, anywhere.
              </p>
              <Link href="/practice" className="inline-flex items-center text-xs tracking-widest uppercase text-gold hover:text-white transition-colors">
                Explore the Practice <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="group relative flex flex-col justify-end p-12 md:p-20 min-h-[50vh] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dregnmagh/image/upload/v1778062613/ChatGPT_Image_May_6_2026_03_46_16_PM_jy9ndh.png')] bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-xs tracking-widest uppercase text-gold font-bold block mb-6">Go Deeper</span>
              <h3 className="font-serif text-4xl md:text-5xl font-medium mb-6">Gurukulam</h3>
              <p className="text-lg text-white/70 mb-10 max-w-sm">
                A living Siddhar environment where this is not practiced occasionally— but lived every day.
              </p>
              <Link href="/gurukulam" className="inline-flex items-center text-xs tracking-widest uppercase text-gold hover:text-white transition-colors">
                Discover the Gurukulam <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. THE GURUKULAM */}
        <section className="bg-charcoal text-white">
          <div className="container mx-auto px-6 py-32">
            <span className="mb-4 inline-block text-xs font-bold tracking-widest text-gold uppercase">
              Shree Datta Easanamma Gurukulam
            </span>
            <h2 className="mb-20 font-serif text-4xl md:text-6xl font-medium leading-tight max-w-3xl">
              Not a retreat.<br />Not a program.<br />
              <span className="italic text-gold">A living space.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
              <div className="text-xl text-white/70 leading-relaxed font-serif italic">
                "Nothing is taught as theory. Everything is lived."
              </div>
              <div className="space-y-6">
                <p className="text-lg text-white/60 mb-6">A space where:</p>
                <div className="border-b border-white/10 pb-4">
                  <p className="font-serif text-xl italic text-gold">Discipline is natural</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <p className="font-serif text-xl italic text-gold">Silence is part of daily life</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <p className="font-serif text-xl italic text-gold">Awareness is observed continuously</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. LIVING GUIDANCE */}
        <section className="bg-pearl py-32">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <span className="mb-4 inline-block text-xs font-bold tracking-widest text-gold uppercase">
              Living Guidance
            </span>
            <h2 className="mb-8 font-serif text-4xl md:text-5xl font-medium text-charcoal">
              Guided by Shree Datta Easanamma
            </h2>
            <div className="text-xl text-charcoal/70 space-y-4 mb-16">
              <p>Not to give answers— but to bring clarity.</p>
              <p>Not to create followers— but to dissolve confusion.</p>
            </div>
            
            <div className="border-t border-black/5 pt-16 text-left max-w-2xl mx-auto">
              <span className="mb-8 inline-block text-xs font-bold tracking-widest text-charcoal/40 uppercase">
                In her presence, many notice
              </span>
              <ul className="space-y-6">
                <li className="font-serif text-2xl italic text-charcoal">A quieter mind</li>
                <li className="font-serif text-2xl italic text-charcoal">Reduced inner disturbance</li>
                <li className="font-serif text-2xl italic text-charcoal">A sense of stillness</li>
              </ul>
              <p className="mt-12 text-sm tracking-widest uppercase text-gold font-bold">
                No claim. No promise. Only observation.
              </p>
            </div>
          </div>
        </section>

        {/* 10. SUKUMA & 11. INNER HEALING */}
        <section className="bg-white py-32 text-center">
          <div className="container mx-auto px-6 max-w-4xl space-y-32">
            
            {/* Sukuma */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium mb-8">
                Some changes do not come through action.
              </h2>
              <p className="text-2xl text-charcoal/60 italic font-serif mb-12">
                They happen when disturbance reduces.
              </p>
              <div className="text-sm tracking-widest uppercase text-charcoal/40 flex justify-center gap-8">
                <span>No method</span>
                <span>•</span>
                <span>No touch</span>
                <span>•</span>
                <span>No effort</span>
              </div>
              <p className="text-xl text-gold font-medium mt-12 italic font-serif">
                Yet something begins to shift.
              </p>
            </div>

            <div className="w-16 h-[1px] bg-gold/30 mx-auto"></div>

            {/* Inner Healing */}
            <div>
              <h2 className="font-serif text-4xl text-charcoal font-medium mb-6">
                Healing is not something given here.
              </h2>
              <p className="text-xl text-charcoal/70 mb-12 font-serif italic">
                It is what begins when the system is no longer disturbed.
              </p>
              <div className="inline-block px-8 py-4 bg-pearl rounded-full">
                <p className="text-lg text-charcoal font-medium">
                  This is not medical treatment. <span className="text-gold italic">It is a return to balance.</span>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 12. REALITY CHECK */}
        <section className="py-32 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-6 inline-block text-xs font-bold tracking-widest text-white/40 uppercase">
                  An Honest Word
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
                  This may not<br />
                  be for <span className="italic text-white/40">you.</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-gold font-bold mb-6">Not for those seeking</h4>
                  <ul className="space-y-4 text-white/60">
                    <li className="border-b border-white/10 pb-2">Quick solutions</li>
                    <li className="border-b border-white/10 pb-2">Constant guidance</li>
                    <li className="border-b border-white/10 pb-2">Spiritual experiences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-gold font-bold mb-6">For those willing to</h4>
                  <ul className="space-y-4 text-white/90">
                    <li className="border-b border-gold/20 pb-2">Observe</li>
                    <li className="border-b border-gold/20 pb-2">Stay</li>
                    <li className="border-b border-gold/20 pb-2">See clearly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. TRUST BLOCK & 14. PARTICIPATION */}
        <section className="py-32 bg-pearl">
          <div className="container mx-auto px-6 max-w-6xl">
            
            <div className="mb-16">
              <span className="mb-4 inline-block text-xs font-bold tracking-widest text-charcoal/40 uppercase">
                This is happening now
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal">
                At the Gurukulam
              </h2>
            </div>

            {/* Masonry-style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative aspect-[4/3] md:col-span-2 md:row-span-2 overflow-hidden rounded-lg">
                <Image src="/images/gurukulam.png" alt="Gurukulam" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="https://res.cloudinary.com/dregnmagh/image/upload/v1778061677/ChatGPT_Image_May_6_2026_03_30_47_PM_nkgl1a.png" alt="Daily Practice" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/images/practice.png" alt="Students" fill className="object-cover" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-24">
              <div className="bg-white p-8 border border-black/5 rounded-lg text-center">
                <span className="font-serif text-5xl text-gold block mb-2">25</span>
                <span className="text-xs tracking-widest uppercase text-charcoal/60">Residential Othuvar students</span>
              </div>
              <div className="bg-white p-8 border border-black/5 rounded-lg text-center">
                <span className="font-serif text-5xl text-gold block mb-2">Daily</span>
                <span className="text-xs tracking-widest uppercase text-charcoal/60">Annadanam conducted</span>
              </div>
              <div className="bg-white p-8 border border-black/5 rounded-lg text-center">
                <span className="font-serif text-5xl text-gold block mb-2">Live</span>
                <span className="text-xs tracking-widest uppercase text-charcoal/60">Traditional practices</span>
              </div>
              <div className="bg-white p-8 border border-black/5 rounded-lg text-center flex flex-col justify-center">
                <span className="text-xs tracking-widest uppercase text-charcoal/60 leading-relaxed">Teachings offered without commercial structure</span>
              </div>
            </div>

            {/* Participation */}
            <div className="max-w-2xl mx-auto text-center border-t border-black/5 pt-16">
              <p className="text-lg text-charcoal/70 mb-4">
                This continues through those who understand its value.
              </p>
              <h3 className="font-serif text-3xl font-medium text-charcoal mb-10">
                Not as charity. <span className="italic text-gold">But as participation.</span>
              </h3>
              <Link href="/support">
                <Button size="lg" className="px-12 bg-charcoal text-white hover:bg-gold">Support the Gurukulam</Button>
              </Link>
            </div>

          </div>
        </section>

        {/* 15. FINAL SECTION (SILENT CLOSE) */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-charcoal text-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            transition={{ duration: 3 }}
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-charcoal to-charcoal"
          />
          
          <div className="container relative z-10 mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto"
            >
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-medium text-white mb-12 leading-tight">
                A true Gurukulam does not call people.<br />
                <span className="italic text-gold">It remains.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-white/60 mb-16">
                If something within you does not allow you to leave,<br className="hidden md:block" />
                you may continue.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/visit">
                  <Button size="lg" className="bg-gold text-white hover:bg-white hover:text-charcoal border-none">
                    Begin Your Journey
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
