import React from 'react';
import { SectionId } from '../types';

export const UraDemo: React.FC = () => {
  return (
    <section id={SectionId.URA} className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-300 font-semibold tracking-wide uppercase text-sm mb-2">Automação</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Exemplo de URA Interativa</h3>
          <p className="text-brand-100 max-w-2xl mx-auto text-lg">
            O cliente é atendido por um menu de opções inteligente que direciona para o setor responsável, solucionando problemas com agilidade.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-brand-500 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg mb-8 animate-bounce-slow">
              "Seja bem-vindo a nossa instituição..."
            </div>
            
            <div className="w-1 h-8 bg-brand-500/50 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
               <UraOption number={1} label="Consultas sobre Vendas" />
               <UraOption number={2} label="Suporte Técnico" />
               <UraOption number={3} label="Departamento de Facturamento" />
               <UraOption number={4} label="Horário e Localização" />
               <UraOption number={5} label="Falar com Agente" />
               <UraOption number={6} label="Repetir Opções" isAction />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-100">
            <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm">Disponibilidade</div>
            </div>
             <div>
                <div className="text-4xl font-bold text-white mb-2">-40%</div>
                <div className="text-sm">Tempo de Espera</div>
            </div>
             <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm">Direcionamento Correto</div>
            </div>
        </div>
      </div>
    </section>
  );
};

const UraOption: React.FC<{number: number; label: string; isAction?: boolean}> = ({ number, label, isAction }) => (
    <div className={`flex items-center p-4 rounded-xl transition-all hover:bg-white/10 ${isAction ? 'border border-dashed border-white/30' : 'bg-white/5'}`}>
        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center font-bold text-xl mr-4 shadow-inner">
            {number}
        </div>
        <span className="text-lg font-light">{label}</span>
    </div>
);