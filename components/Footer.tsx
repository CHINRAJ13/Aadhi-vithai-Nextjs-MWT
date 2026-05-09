import React from "react";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-pearl py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 block">
              <span className="font-serif text-3xl font-bold tracking-tighter text-charcoal">
                AADHI <span className="text-gold">VITHAI</span>
              </span>
            </Link>
            <p className="max-w-md italic text-charcoal/60">
              "You are not your thoughts. You are the awareness in which they appear."
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold text-charcoal">The Path</h4>
            <ul className="flex flex-col gap-4 text-sm text-charcoal/60">
              <li><Link href="/about" className="hover:text-gold transition-colors">About the Tradition</Link></li>
              <li><Link href="/practice" className="hover:text-gold transition-colors">The Practice</Link></li>
              <li><Link href="/gurukulam" className="hover:text-gold transition-colors">A Living Gurukulam</Link></li>
              <li><Link href="/visit" className="hover:text-gold transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold text-charcoal">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-ambient transition-all hover:scale-110 hover:text-gold text-charcoal">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-ambient transition-all hover:scale-110 hover:text-gold text-charcoal">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-ambient transition-all hover:scale-110 hover:text-gold text-charcoal">
                <IoIosMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-charcoal/5 pt-8 text-xs tracking-widest text-charcoal/40 lg:flex-row">
          <span>© {new Date().getFullYear()} AADHI VITHAI. ALL RIGHTS RESERVED.</span>
          <div className="mt-4 flex gap-8 lg:mt-0">
            <Link href="/privacy" className="hover:text-charcoal transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms" className="hover:text-charcoal transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
