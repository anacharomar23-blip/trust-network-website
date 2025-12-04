import React from 'react';
import { SectionId } from '../types';
import { Server, Headset, Mic, Smartphone, Laptop, PhoneCall } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-700 font-semibold tracking-wide uppercase text-sm mb-2">Módulos Integrados</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trust VoIP Server</h3>
          <p className="text-gray-600 text-lg">
            Um Servidor de Comunicações Unificadas que integra tecnologia de ponta para conectar sua empresa ao mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: VoIP PABX */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-500 group">
            <div className="bg-brand-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors">
              <Server className="text-brand-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">VoIP PABX</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Realize chamadas entre colaboradores (matriz e filiais) e clientes com total flexibilidade.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <Smartphone size={16} className="text-brand-500" />
                <span className="text-sm">Integração Mobile</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Laptop size={16} className="text-brand-500" />
                <span className="text-sm">Softphone Desktop</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <PhoneCall size={16} className="text-brand-500" />
                <span className="text-sm">Desk-phones IP</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Call Center */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500 group">
            <div className="bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
              <Headset className="text-purple-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Call Center</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Central de atendimento para suporte, vendas e cobranças. Gerencie agentes e campanhas eficientemente.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-sm">Login de Agentes</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-sm">Formulários de Atendimento</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-sm">Gestão de Campanhas</span>
              </li>
            </ul>
          </div>

          {/* Card 3: URA Interativa */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500 group">
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
              <Mic className="text-orange-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">URA Interativa</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Unidade de Resposta Audível. Automatize o atendimento e direcione chamadas de forma humanizada.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span className="text-sm">Menus Personalizáveis</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span className="text-sm">Redução de Custos</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span className="text-sm">Agilidade no Suporte</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};