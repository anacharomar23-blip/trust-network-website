import React from 'react';
import { SectionId } from '../types';
import { FileBarChart, HardDrive, ShieldCheck, Clock } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id={SectionId.FEATURES} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image/Visual Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://picsum.photos/600/500?grayscale" 
              alt="Analytics Dashboard" 
              className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Controle Total</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Gestão Inteligente de Chamadas</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Nosso sistema oferece ferramentas robustas para monitorar, analisar e garantir a qualidade do atendimento da sua empresa.
            </p>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <FileBarChart size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Relatórios Detalhados</h4>
                  <p className="text-gray-600">
                    Extraia informações cruciais sobre o tráfego telefônico:
                  </p>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={14} /> Data da ligação
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-500">
                      <UserIcon size={14} /> Autor e Destino
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={14} /> Duração da chamada
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                    <HardDrive size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Gravação de Chamadas</h4>
                  <p className="text-gray-600">
                    Grave e extraia todas as chamadas para assegurar o que foi dito e como foi dito.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-2 rounded-md w-fit">
                    <ShieldCheck size={16} />
                    <span>Respaldo jurídico e auditoria</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UserIcon: React.FC<{size?: number}> = ({size}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);