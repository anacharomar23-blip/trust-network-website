import React from 'react';
import { Globe, Facebook, Linkedin, Twitter } from 'lucide-react';
import { SectionId } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="text-brand-400" size={24} />
              <span className="font-bold text-xl">TRUST NETWORK</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluções avançadas em VoIP e comunicações unificadas para empresas que buscam eficiência e inovação em Moçambique.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Soluções</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href={`#${SectionId.SERVICES}`} className="hover:text-brand-400 transition-colors">VoIP PABX</a></li>
              <li><a href={`#${SectionId.SERVICES}`} className="hover:text-brand-400 transition-colors">Call Center</a></li>
              <li><a href={`#${SectionId.URA}`} className="hover:text-brand-400 transition-colors">URA Interativa</a></li>
              <li><a href={`#${SectionId.FEATURES}`} className="hover:text-brand-400 transition-colors">Gravação de Chamadas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Notícias</a></li>
              <li><a href={`#${SectionId.CONTACT}`} className="hover:text-brand-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-semibold mb-6">Redes Sociais</h4>
             <div className="flex space-x-4">
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                 <Facebook size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                 <Twitter size={18} />
               </a>
             </div>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TRUST NETWORK LDA. Todos os direitos reservados.</p>
          <p className="mt-2">Rua Samuel Dambula, nº 34, R/C, Maputo – Moçambique</p>
        </div>
      </div>
    </footer>
  );
};