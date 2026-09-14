import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { GlassCard } from '../components/ui/GlassCard';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Web3Forms Access Key (set via .env or directly)
  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    // If Web3Forms API key is available, send via Web3Forms API to luckyrakoto20@gmail.com
    if (WEB3FORMS_KEY) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Message Portfolio de ${formData.name}`,
            message: formData.message,
            from_name: formData.name,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 6000);
          return;
        } else {
          throw new Error(data.message || 'Erreur lors de l’envoi');
        }
      } catch (err: any) {
        console.error('Erreur Web3Forms:', err);
        // Fallback to mailto if API request fails
        triggerMailtoFallback();
      }
    } else {
      // Fallback if no Web3Forms API key is configured
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || `Prise de contact par ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${DEVELOPER_INFO.email}?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Lucky, je vous contacte depuis votre portfolio pour discuter d'un projet.`
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 h-[calc(100vh-130px)] flex flex-col allow-scroll">
      {/* Header */}
      <div className="shrink-0 mb-6 border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/30 text-xs font-mono text-[#60a5fa] uppercase tracking-wider mb-2">
          05 • Contact
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
          Discutons de <span className="gradient-text-blue">votre projet</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1">
          Laissez-moi un message ou contactez-moi directement via WhatsApp ou Email.
        </p>
      </div>

      {/* Main Scrollable Grid */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Glass Contact Form */}
          <GlassCard className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between" cursorLabel="Formulaire">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Monsieur / Madame"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass-input text-sm"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">
                    Votre email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Monsieur/Madame@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass-input text-sm"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">
                  Sujet de votre message
                </label>
                <input
                  type="text"
                  placeholder="Proposition de projet / Opportunité de stage"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 glass-input text-sm"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">
                  Votre message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Bonjour Lucky, je souhaiterais échanger avec vous concernant..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 glass-input text-sm resize-none"
                />
              </div>

              {/* Error Banner */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-500 focus:outline-none ${
                    isSubmitted
                      ? 'bg-[#2563eb] text-white shadow-[0_0_30px_rgba(37,99,235,0.6)]'
                      : 'bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] active:scale-98'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-mono">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Envoi du message en cours...
                    </span>
                  ) : isSubmitted ? (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-2 text-white font-extrabold"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      Message transmis avec succès !
                    </motion.span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </GlassCard>

          {/* Right Column: Direct Contact & Instant Messaging */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Quick Instant Messaging Cards */}
            <GlassCard className="p-6 space-y-4" cursorLabel="Contact Rapide">
              <h3 className="font-heading font-bold text-lg text-white mb-1">
                Contact Direct & Instantané
              </h3>
              <p className="text-xs text-gray-400 font-mono mb-3">
                Réponse rapide garantie. Choisissez votre canal préféré :
              </p>

              {/* WhatsApp Direct Action Button */}
              <a
                href={`${DEVELOPER_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)]">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp Direct
                    </span>
                    <span className="block text-[11px] text-gray-400 font-mono">
                      +261 34 45 480 48
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Direct Email Action */}
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#2563eb]/10 hover:bg-[#2563eb]/20 border border-[#2563eb]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#2563eb] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs text-white group-hover:text-[#60a5fa] transition-colors">
                      Email Professionnel
                    </span>
                    <span className="block text-[11px] text-gray-400 font-mono">
                      {DEVELOPER_INFO.email}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#60a5fa] transition-colors" />
              </a>

              {/* Phone Direct Action */}
              <a
                href={`tel:${DEVELOPER_INFO.phone}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs text-white group-hover:text-[#3b82f6] transition-colors">
                      Téléphone Direct
                    </span>
                    <span className="block text-[11px] text-gray-400 font-mono">
                      {DEVELOPER_INFO.phone}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#3b82f6] transition-colors" />
              </a>
            </GlassCard>

            {/* Interactive Dark Map Mockup Card */}
            <GlassCard className="p-4 flex flex-col justify-center items-center text-center relative overflow-hidden h-44" cursorLabel="Localisation">
              <div className="absolute inset-0 bg-[#070f26] opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#2563eb]/20 border border-[#2563eb] flex items-center justify-center shadow-[0_0_20px_#2563eb] mb-2 animate-bounce">
                  <MapPin className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <span className="font-heading font-bold text-sm text-white">
                  Antananarivo, Madagascar
                </span>
                <span className="text-[10px] text-gray-400 font-mono mt-0.5">
                  Disponible pour opportunités locales & Remote International
                </span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};
