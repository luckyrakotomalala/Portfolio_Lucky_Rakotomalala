import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { GlassCard } from '../components/ui/GlassCard';
import { Github, ArrowRight, X, Layers, CheckCircle, Sparkles, Target, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Full Stack', 'Mobile', 'Backend'];

  const filteredProjects = activeCategory === 'Tous'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const otherProjects = filteredProjects.filter((p) => p.id !== (featuredProject?.id ?? ''));

  return (
    /* ─── Scrollable page container ─────────────────────────────────────── */
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 h-[calc(100vh-130px)] flex flex-col allow-scroll projects-scroll-container">

      {/* ── Header & Filter Controls ── */}
      <div className="shrink-0 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-xs font-mono text-[#60a5fa] uppercase tracking-wider mb-2">
            03 • Projets
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
            Réalisations & <span className="gradient-text-blue">Projets Phares</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0e1738] border border-white/10 shrink-0">
          <span className="pl-2 pr-1 text-xs text-gray-400 flex items-center gap-1 font-mono">
            <Filter className="w-3.5 h-3.5 text-[#60a5fa]" />
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#2563eb] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Scrollable Content Area ── */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-8 pb-12">
        {/* ── Featured Project Showcase Card ── */}
        {featuredProject && (
          <GlassCard
            className="p-6 md:p-8 border-[#2563eb]/30 shadow-[0_0_30px_rgba(37,99,235,0.12)] group"
            cursorLabel="Projet Majeur"
            onClick={() => setSelectedProject(featuredProject)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#2563eb] text-white font-extrabold text-[10px] font-mono uppercase tracking-wider">
                    ★ PROJET MAJEUR
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {featuredProject.category}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#60a5fa] transition-colors">
                  {featuredProject.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 py-2">
                  {featuredProject.metrics.map((m) => (
                    <div key={m.label} className="p-2.5 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/20">
                      <span className="block font-bold text-xs text-[#60a5fa] font-mono">{m.value}</span>
                      <span className="block text-[10px] text-gray-400 font-mono">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.technologies.slice(0, 7).map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {featuredProject.technologies.length > 7 && (
                    <span className="px-2.5 py-1 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 text-xs font-mono text-[#60a5fa]">
                      +{featuredProject.technologies.length - 7}
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(featuredProject);
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#2563eb] text-white font-bold text-xs flex items-center gap-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all"
                  >
                    <span>Découvrir l'expérience complète</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-102 transition-transform duration-500">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070f26]/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </GlassCard>
        )}

        {/* ── Secondary Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="flex flex-col justify-between p-6 group"
              cursorLabel="Voir Détails"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div className="relative rounded-xl overflow-hidden mb-4 border border-white/10 h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#070f26]/80 border border-white/10 text-[10px] font-mono text-[#60a5fa] backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-[#60a5fa] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#2563eb]/10 text-[10px] font-mono text-[#60a5fa]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="w-full py-2 rounded-xl bg-[#2563eb]/10 hover:bg-[#2563eb]/20 border border-[#2563eb]/20 hover:border-[#2563eb]/50 text-xs font-semibold text-gray-200 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <span>Voir plus & architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          FULLSCREEN PROJECT DETAIL OVERLAY (DARK THEME SYNCHRONIZED)
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#070f26]/90 backdrop-blur-2xl overflow-y-auto custom-scrollbar p-4 md:p-12 flex flex-col items-center justify-start allow-scroll"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative w-full max-w-5xl bg-[#0e1738]/95 border border-[#5a82c8]/20 rounded-[28px] p-6 md:p-10 shadow-2xl my-auto text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#2563eb] hover:text-white text-gray-300 transition-all focus:outline-none z-10 border border-white/10"
                data-cursor="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Header */}
              <div className="relative rounded-2xl overflow-hidden mb-8 h-64 sm:h-80 border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1738] via-[#0e1738]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#2563eb] text-white font-extrabold text-xs font-mono uppercase">
                      {selectedProject.category}
                    </span>
                    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 font-mono">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-4 py-2 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs flex items-center gap-2 shadow-md transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Overview, Objectives, Features */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#60a5fa]" />
                      <span>Présentation</span>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {selectedProject.objectives && selectedProject.objectives.length > 0 && (
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#60a5fa]" />
                        <span>Objectifs du Projet</span>
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] mt-1.5 shrink-0" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#60a5fa]" />
                      <span>Fonctionnalités</span>
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.keyFeatures.map((kf, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-1.5 shrink-0" />
                          <span>{kf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Metrics, Architecture, Stack */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Metrics Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProject.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-xl bg-[#070f26]/80 border border-white/10">
                        <span className="block font-bold text-xs text-[#60a5fa] font-mono">{m.value}</span>
                        <span className="block text-[9px] text-gray-400 font-mono mt-0.5">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl bg-[#070f26]/80 border border-white/10">
                    <h3 className="font-heading font-bold text-sm text-white mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#60a5fa]" />
                      <span>Architecture Technique</span>
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-mono">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Stack Technique & Outils
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/40 text-xs font-mono text-[#60a5fa]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
