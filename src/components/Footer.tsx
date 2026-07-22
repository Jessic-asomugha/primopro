import React from 'react';
import { Flame, Check, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNav: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export default function Footer({ onNav }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: 'home' | 'services' | 'about' | 'contact') => {
    onNav(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-accent">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  primo<span className="text-brand-accent">.</span>
                </span>
                <span className="block text-[8px] font-semibold tracking-widest text-gray-400 uppercase -mt-1">
                  Oil & Energy Solutions
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Primo is committed to securing global energy requirements through sustainable exploration, high-yield refining, and strategic oil, gas, and low-carbon energy infrastructure.
            </p>

            <div className="pt-2 text-xs text-gray-500">
              &copy; {currentYear} Primo Energy Corporation. All rights reserved.
              <span className="block mt-1">Powered by Primo Infrastructure.</span>
            </div>
          </div>

          {/* Column 2: Quick Navigations & Checklists */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Navigations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <button 
                  onClick={() => handleLinkClick('home')} 
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-accent transition text-left"
                >
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  Home Page
                </button>
                <button 
                  onClick={() => handleLinkClick('services')} 
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-accent transition text-left"
                >
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  Services Index
                </button>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-accent transition text-left"
                >
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  About Our Fleet
                </button>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-accent transition text-left"
                >
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  Contact Desk
                </button>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  FAQ&apos;s
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  Privacy Policy
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="h-3.5 w-3.5 text-brand-accent" />
                  Term & Conditions
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Contacts */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Global Headquarters
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  4096 Modesto, CA 95350, United States
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-accent shrink-0" />
                <a href="tel:+12094728764" className="font-mono hover:text-white transition">
                  +1 (209) 472-8764
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-accent shrink-0" />
                <a href="mailto:info@primoenergy.com" className="hover:text-white transition">
                  info@primoenergy.com
                </a>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-brand-accent font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Dispatch Center Active 24/7
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
