import React from 'react';
import { Github, Linkedin, Mail, Heart, MapPin, Phone, Globe } from 'lucide-react';

export function Footer() {
  const contactInfo = [
    { icon: Mail, text: 'manujaisiwarakumaragama@gmail.com', href: 'mailto:manujaisiwarakumaragama@gmail.com' },
    { icon: Phone, text: '+94 71 340 1667', href: 'tel:+94713401667' },
    { icon: MapPin, text: 'No:09, "Sanhidha", Narampanawa', href: '#' },
    { icon: Globe, text: 'Portfolio', href: 'https://example.com' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/isiwarakumaragama', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/isiwara-k', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:manujaisiwarakumaragama@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 glitch" data-text="Contact Quest">
              Contact Quest
            </h3>
            <p className="text-gray-400 mb-6">
              Ready to start a new adventure? Join forces with a Level 99 Developer!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-trigger p-2 bg-[#121212] rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-[#1A1A1A] hover:shadow-[0_0_20px_rgba(54,188,247,0.3)]"
                  aria-label={label}
                >
                  <Icon size={20} className="hover-target transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Quest Locations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center space-x-4 text-gray-400 hover:text-[#36BCF7] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#121212] flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors">
                    <Icon size={20} />
                  </div>
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-[#2A2A2A] text-center text-gray-400">
          <p className="flex items-center justify-center">
            Crafted with <Heart size={16} className="mx-2 text-[#36BCF7]" /> by Isiwara Kumaragama
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved | Achievement Unlocked: Portfolio Created</p>
        </div>
      </div>
    </footer>
  );
}