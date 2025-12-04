import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { SectionId } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', id: SectionId.HOME },
    { label: 'Serviços', id: SectionId.SERVICES },
    { label: 'Funcionalidades', id: SectionId.FEATURES },
    { label: 'URA', id: SectionId.URA },
    { label: 'Contacto', id: SectionId.CONTACT },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection(SectionId.HOME)}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-brand-700 text-white' : 'bg-white text-brand-800'}`}>
              <Globe size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                TRUST NETWORK
              </span>
              <span className={`text-xs tracking-wider ${isScrolled ? 'text-gray-500' : 'text-brand-100'}`}>
                MAPUTO, MOÇAMBIQUE
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-brand-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-gray-700 hover:text-brand-600 font-medium text-lg py-2 border-b border-gray-100 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};