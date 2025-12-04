import React from 'react';
import { Button } from './Button';
import { SectionId } from '../types';
import { Phone, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Office Communication" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/30 border border-brand-400/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide uppercase">Inovação em Maputo</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Comunicações Unificadas <br/>
            <span className="text-brand-300">Sem Fronteiras</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-2xl leading-relaxed">
            Implementação do sistema VoIP Server. Conecte sua empresa com eficiência através de desk-phones, computadores e smartphones em qualquer lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} className="gap-2">
              <Phone size={20} />
              Fale Conosco
            </Button>
            <Button variant="outline" onClick={scrollToServices} className="!text-white !border-white hover:!bg-white/10 gap-2">
              Nossas Soluções
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave (SVG) - Optional, simplified with a div for now */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </section>
  );
};