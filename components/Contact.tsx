import React, { useState } from 'react';
import { SectionId } from '../types';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Fale Conosco</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Entre em contato</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Pronto para transformar a comunicação da sua empresa? Nossa equipe em Maputo está pronta para atendê-lo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">Rua Samuel Dambula, nº 34, R/C</p>
                  <p className="text-gray-600">Maputo – Moçambique</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="text-gray-600">+258 87 612 4389</p>
                  <p className="text-sm text-gray-500">Seg-Sex, 8h às 17h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">trustnetwork.vendas@outlook.com</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-2xl overflow-hidden relative group">
                 <img src="https://picsum.photos/600/300?blur=2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Map" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="bg-white/90 px-4 py-2 rounded-lg text-sm font-medium shadow-lg backdrop-blur-sm">Mapa em Breve</span>
                 </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h4>
            
            {formStatus === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <Send size={32} />
                </div>
                <h5 className="text-xl font-bold text-gray-900">Mensagem Enviada!</h5>
                <p className="text-gray-600 mt-2">Nossa equipe entrará em contato em breve.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-brand-600 hover:text-brand-700 font-medium underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none" 
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Profissional</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none" 
                    placeholder="voce@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Interesse</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none bg-white">
                    <option>VoIP PABX</option>
                    <option>Call Center</option>
                    <option>URA Interativa</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none resize-none" 
                    placeholder="Como podemos ajudar sua empresa?"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={formStatus === 'sending'}
                  className="disabled:opacity-70 disabled:cursor-wait"
                >
                  {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};