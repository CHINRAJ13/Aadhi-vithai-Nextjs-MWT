"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Languages, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Practice", href: "/practice" },
  { name: "Gurukulam", href: "/gurukulam" },
  { name: "Support", href: "/support" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled ? "bg-white shadow-ambient py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tighter text-charcoal">
            AADHI <span className="text-gold">VITHAI</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-charcoal/80 transition-colors hover:text-gold"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-charcoal/10" />
          <button className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold">
            <Languages size={18} />
            <span>EN</span>
          </button>
          <Link href="/apply" >
            <Button size="sm">Apply to Visit</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-charcoal lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-charcoal/5 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 text-lg font-medium text-charcoal">
                <Languages size={20} />
                <span>Language: English</span>
              </div>
              <Link href="/visit" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Apply to Visit</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
