import React from 'react';
import { motion } from 'framer-motion';
import { PageId } from '../types';
import { DEVELOPER_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  Sparkles,
  X,
  Server,
  Monitor,
  Smartphone,
  Bell,
  Check,
  CheckCircle2,
  Languages,
  Gamepad2,
  Code2,
  Dumbbell,
  Activity,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Trophy,
  Database,
  User
} from 'lucide-react';

interface AboutProps {
  onNavigate?: (id: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const subCardsSoutenance = [
    {
      title: 'Backend Django',
      desc: 'Django REST Framework et API REST sécurisée avec authentification JWT.',
      icon: <Server className="w-5 h-5 text-[#00BFFF]" />,
    },
    {
      title: 'Frontend Web',
      desc: 'React avec une interface utilisateur moderne, réactive et ergonomique.',
      icon: <Monitor className="w-5 h-5 text-[#00BFFF]" />,
    },
    {
      title: 'Application Mobile',
      desc: 'Flutter pour une utilisation mobile fluide et multiplateforme.',
      icon: <Smartphone className="w-5 h-5 text-[#00BFFF]" />,
    },
    {
      title: 'Temps réel & BDD',
      desc: 'PostgreSQL et notifications instantanées via Firebase Cloud Messaging (FCM).',
      icon: <Bell className="w-5 h-5 text-[#00BFFF]" />,
    },
  ];

  const languages = [
    { name: 'Malgache', level: 'Langue maternelle', percent: 100 },
    { name: 'Français', level: 'Courant', percent: 80 },
    { name: 'Anglais', level: 'Intermédiaire', percent: 60 },
  ];

  const hobbies = [
    { label: 'Basketball', icon: <Activity className="w-3.5 h-3.5 text-[#00BFFF]" /> },
    { label: 'Jeux vidéo', icon: <Gamepad2 className="w-3.5 h-3.5 text-[#00BFFF]" /> },
    { label: 'Coding', icon: <Code2 className="w-3.5 h-3.5 text-[#00BFFF]" /> },
    { label: 'Sport', icon: <Dumbbell className="w-3.5 h-3.5 text-[#00BFFF]" /> },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 h-[calc(100vh-130px)] flex flex-col allow-scroll">
      {/* Header section with Close button */}
      <div className="shrink-0 mb-6 flex items-start justify-between gap-4 border-b border-[#5a82c8]/15 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span>PARCOURS & COMPÉTITIONS</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Expérience Académique & <span className="bg-gradient-to-r from-white via-[#22D3EE] to-[#00BFFF] bg-clip-text text-transparent">Réalisations</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-mono mt-1 max-w-2xl">
            Projets d'envergure universitaire, réalisations techniques et expériences de développement.
          </p>
        </div>

        {/* Circular Glassmorphism Close Button */}
        <button
          onClick={() => onNavigate?.('home')}
          className="p-3 rounded-full bg-[#142244]/70 backdrop-blur-xl border border-[#5a82c8]/20 hover:border-[#00BFFF] hover:bg-[#00BFFF]/20 text-[#D8E2F0] hover:text-white transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-[0_0_15px_rgba(0,191,255,0.2)] focus:outline-none shrink-0"
          data-cursor="Fermer"
          title="Retour à l'accueil"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-10 pb-12">
        {/* Presentation & Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#142244]/70 backdrop-blur-xl border border-[#5a82c8]/15 rounded-[20px] p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-[#00BFFF]/40 transition-all duration-300 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Image Column */}
            <div className="md:col-span-4 lg:col-span-4 flex justify-center">
              <div className="relative group max-w-[280px] w-full">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00BFFF] to-[#22D3EE] opacity-30 blur-lg group-hover:opacity-60 transition duration-500" />
                <img
                  src={DEVELOPER_INFO.aboutImage}
                  alt="Rakotomalala Volaranja Lucky"
                  className="relative w-full h-[260px] sm:h-[300px] object-cover object-top rounded-2xl border border-[#00BFFF]/30 shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Text Description Column */}
            <div className="md:col-span-8 lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-wider">
                <User className="w-3.5 h-3.5 text-[#00BFFF]" />
                <span>Présentation</span>
              </div>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                À propos de moi
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-[#D8E2F0] leading-relaxed font-sans">
                <p>
                  Je m'appelle <span className="font-semibold text-white">Rakotomalala Volaranja Lucky</span>, développeur web & mobile basé à Antananarivo, Madagascar. Actuellement en <span className="text-[#22D3EE] font-semibold">Licence 3 (L3) Génie Logiciel</span> à l'Institut National Supérieur d'Informatique (INSI), je suis passionné par la création d'interfaces modernes et la résolution de problèmes techniques.
                </p>
                <p>
                  Je contribue activement à des projets web et mobile, du backend à l'interface utilisateur, en travaillant avec des stacks comme <span className="text-[#22D3EE] font-semibold">React, Next.js, Vue.js, Django, Flutter</span> et bien d'autres. Rigoureux et engagé, je m'efforce de produire un travail de qualité et de faire évoluer mes compétences à travers chaque projet, avec pour objectif d'apporter une réelle valeur ajoutée au sein d'une équipe.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top Grid: Left Vertical Timeline + Right Additional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-heading font-extrabold text-xl text-white flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-[#00BFFF]" />
              <span>Projets & Compétitions</span>
            </h3>

            <div className="relative pl-6 md:pl-8 space-y-8 border-l-2 border-[#00BFFF]/30">
              {/* TIMELINE ITEM 1: Projet de soutenance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Node glowing cyan dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#071126] border-2 border-[#00BFFF] shadow-[0_0_12px_#00BFFF]" />

                <div className="bg-[#142244]/70 backdrop-blur-xl border border-[#5a82c8]/15 rounded-[20px] p-5 sm:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-[#00BFFF]/40 hover:shadow-[0_0_25px_rgba(0,191,255,0.2)] transition-all duration-300">
                  {/* Header badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[10px] sm:text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-wider">
                      PROJET DE SOUTENANCE — MÉMOIRE DE LICENCE L2
                    </span>
                    <span className="text-xs font-mono text-[#00BFFF] font-extrabold px-2.5 py-0.5 rounded-md bg-[#00BFFF]/10">
                      2024 — 2025
                    </span>
                  </div>

                  <h4 className="font-heading font-extrabold text-xl text-white mb-2">
                    Application de Gestion et de Suivi de Doléances
                  </h4>
                  <p className="text-sm text-[#D8E2F0] leading-relaxed mb-4">
                    Conception et développement intégral d'une plateforme numérique destinée à faciliter le dépôt, la gestion et le suivi des doléances citoyennes.
                  </p>

                  {/* 4 Sub-cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subCardsSoutenance.map((card, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0d1934]/75 backdrop-blur-md border border-[#5a82c8]/15 rounded-[16px] p-3.5 hover:border-[#00BFFF]/30 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="p-1.5 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/20">
                            {card.icon}
                          </div>
                          <h5 className="font-heading font-bold text-xs text-white">
                            {card.title}
                          </h5>
                        </div>
                        <p className="text-[11px] text-[#94A3B8] leading-normal font-sans">
                          {card.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Validation Badge */}
                  <div className="mt-4 pt-3 border-t border-[#5a82c8]/15 flex items-center gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-xs font-semibold text-[#22D3EE]">
                      <CheckCircle2 className="w-4 h-4 text-[#00BFFF]" />
                      <span>Modélisation UML & Soutenance publique validée(Avec Mention)</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* TIMELINE ITEM 2: Hackathon INSI */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative"
              >
                {/* Node glowing cyan dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#071126] border-2 border-[#22D3EE] shadow-[0_0_12px_#22D3EE]" />

                <div className="bg-[#142244]/70 backdrop-blur-xl border border-[#5a82c8]/15 rounded-[20px] p-5 sm:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-[#00BFFF]/40 hover:shadow-[0_0_25px_rgba(0,191,255,0.2)] transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[10px] sm:text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-wider">
                      PARTICIPATION AU HACKATHON
                    </span>
                    <span className="text-xs font-mono text-[#22D3EE] font-extrabold px-2.5 py-0.5 rounded-md bg-[#22D3EE]/10">
                      Décembre 2025
                    </span>
                  </div>

                  <h4 className="font-heading font-extrabold text-xl text-white mb-2 flex items-center gap-2">
                    <span>Hackathon Interne de l'INSI</span>
                    <Sparkles className="w-4 h-4 text-[#22D3EE]" />
                  </h4>
                  <p className="text-sm text-[#D8E2F0] leading-relaxed mb-4">
                    Développement intensif d'une solution éducative propulsée par l'Intelligence Artificielle en temps limité.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#5a82c8]/15">
                    <div className="flex items-start gap-2.5 text-xs text-[#D8E2F0]">
                      <div className="p-0.5 rounded-full bg-[#00BFFF]/20 text-[#00BFFF] mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Collaboration agile en équipe pluridisciplinaire et répartition stratégique des tâches.</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-[#D8E2F0]">
                      <div className="p-0.5 rounded-full bg-[#00BFFF]/20 text-[#00BFFF] mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Gestion du stress, respect strict des délais impartis et prototypage fonctionnel rapide.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Informations Complémentaires */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-white flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#00BFFF]" />
              <span>Informations Complémentaires</span>
            </h3>

            {/* Carte Formation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#142244]/70 backdrop-blur-xl border border-[#5a82c8]/15 rounded-[20px] p-5 sm:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-[#00BFFF]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30">
                  <GraduationCap className="w-5 h-5 text-[#00BFFF]" />
                </div>
                <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
                  FORMATION
                </h4>
              </div>

              {/* Formation actuelle */}
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#00BFFF] px-2 py-0.5 rounded bg-[#00BFFF]/10 inline-block">
                  2025 — 2026 (en cours)
                </span>
                <h5 className="font-heading font-extrabold text-base text-white">
                  Licence en Génie Logiciel
                </h5>
                <p className="text-xs text-[#94A3B8] font-mono">
                  Institut National Supérieur d'Informatique (INSI)
                </p>
              </div>

              {/* Discrete separator line */}
              <div className="border-b border-[#5a82c8]/15 my-4" />

              {/* Formation précédente */}
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#00BFFF] px-2 py-0.5 rounded bg-[#00BFFF]/10 inline-block">
                  2023
                </span>
                <h5 className="font-heading font-extrabold text-base text-white">
                  Baccalauréat
                </h5>
                <p className="text-xs text-[#94A3B8] font-mono">
                  Lycée Ny Fahombiazako, Antananarivo (Avec Mention)
                </p>
              </div>
            </motion.div>

            {/* Carte Langues */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#142244]/70 backdrop-blur-xl border border-[#5a82c8]/15 rounded-[20px] p-5 sm:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-[#00BFFF]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30">
                  <Languages className="w-5 h-5 text-[#00BFFF]" />
                </div>
                <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
                  LANGUES
                </h4>
              </div>

              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white font-heading">{lang.name}</span>
                      <span className="text-[#94A3B8] font-mono">{lang.level}</span>
                    </div>

                    <div className="h-2 w-full bg-[#0d1934] rounded-full overflow-hidden p-0.5 border border-[#5a82c8]/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#00BFFF] to-[#22D3EE] rounded-full shadow-[0_0_10px_#00BFFF]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Carte Loisirs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#142244]/70 backdrop-blur-xl border border-[#5a82c8]/15 rounded-[20px] p-5 sm:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-[#00BFFF]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30">
                  <Gamepad2 className="w-5 h-5 text-[#00BFFF]" />
                </div>
                <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
                  LOISIRS
                </h4>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {hobbies.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d1934]/75 border border-[#5a82c8]/20 text-xs font-semibold text-[#D8E2F0] hover:border-[#00BFFF]/50 hover:text-white transition-all duration-300"
                  >
                    {h.icon}
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Phrase finale discrète en italique */}
              <p className="text-xs text-[#64748B] italic text-center font-mono border-t border-[#5a82c8]/15 pt-3">
                Équilibre, rigueur et esprit d'équipe
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Contact Footer Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#142244]/90 via-[#0d1934]/95 to-[#142244]/90 backdrop-blur-2xl border border-[#00BFFF]/30 rounded-[20px] p-6 sm:p-8 shadow-[0_0_30px_rgba(0,191,255,0.15)] flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Prêt à concrétiser vos projets ?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl font-sans">
              Discutons de vos besoins technologiques, d'un stage ou d'une opportunité d'ingénierie Web & Mobile.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#22D3EE] font-mono hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{DEVELOPER_INFO.email}</span>
              </a>
              <span className="text-[#64748B]">•</span>
              <a
                href={`tel:${DEVELOPER_INFO.phone}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#22D3EE] font-mono hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{DEVELOPER_INFO.phone}</span>
              </a>
              <span className="text-[#64748B]">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#00BFFF]" />
                <span>{DEVELOPER_INFO.location}</span>
              </span>
            </div>
          </div>

          <button
            onClick={() => onNavigate?.('contact')}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00BFFF] to-[#2563eb] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(0,191,255,0.5)] hover:shadow-[0_0_30px_rgba(0,191,255,0.8)] hover:scale-102 transition-all duration-300 shrink-0"
            data-cursor="Contact"
          >
            <span>Me contacter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
