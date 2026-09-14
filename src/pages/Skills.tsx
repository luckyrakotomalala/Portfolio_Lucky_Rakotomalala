import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { GlassCard } from '../components/ui/GlassCard';
import {
  FaReact, FaJava, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiSpringboot, SiExpress,
  SiDjango, SiDotnet, SiFlutter, SiPostgresql, SiMysql, SiMongodb,
  SiFirebase, SiGithubactions, SiKubernetes
} from 'react-icons/si';
import { Code2, Cpu, Server, Smartphone, Database, Cloud, Wrench } from 'lucide-react';

type SkillGroupId = 'all' | 'frontend_mobile' | 'backend_database' | 'tools_tech';

interface SectionConfig {
  id: SkillGroupId;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  categories: SkillCategory[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillGroupId>('all');

  const tabs: { id: SkillGroupId; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Tous', icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'frontend_mobile', label: 'Frontend & Mobile', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: 'backend_database', label: 'Backend & DataBase', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'tools_tech', label: 'Outils & Technologies', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const sections: SectionConfig[] = [
    {
      id: 'frontend_mobile',
      title: 'Frontend & Mobile',
      subtitle: 'Interfaces web dynamiques, frameworks modernes & applications mobiles cross-platform',
      icon: <Smartphone className="w-5 h-5 text-[#60a5fa]" />,
      categories: ['frontend', 'mobile'],
    },
    {
      id: 'backend_database',
      title: 'Backend & DataBase',
      subtitle: 'Architectures serveurs, APIs RESTful sécurisées & gestion de bases de données',
      icon: <Database className="w-5 h-5 text-[#60a5fa]" />,
      categories: ['backend', 'database'],
    },
    {
      id: 'tools_tech',
      title: 'Outils & Technologies',
      subtitle: 'Conteneurisation, contrôle de version, CI/CD & infrastructure Cloud',
      icon: <Wrench className="w-5 h-5 text-[#60a5fa]" />,
      categories: ['devops', 'cloud'],
    },
  ];

  const getTechBadge = (name: string) => {
    switch (name) {
      case 'React': return <FaReact className="w-7 h-7 text-[#61dafb]" />;
      case 'NextJS': return <SiNextdotjs className="w-7 h-7 text-white" />;
      case 'TypeScript': return <SiTypescript className="w-7 h-7 text-[#3178c6]" />;
      case 'JavaScript': return <SiJavascript className="w-7 h-7 text-[#f7df1e]" />;
      case 'Spring Boot': return <SiSpringboot className="w-7 h-7 text-[#6db33f]" />;
      case 'Java': return <FaJava className="w-7 h-7 text-[#f89820]" />;
      case 'NodeJS': return <FaNodeJs className="w-7 h-7 text-[#68a063]" />;
      case 'Express': return <SiExpress className="w-7 h-7 text-white" />;
      case 'Python': return <FaPython className="w-7 h-7 text-[#3776ab]" />;
      case 'Django REST': return <SiDjango className="w-7 h-7 text-[#092e20]" />;
      case 'ASP.NET / .NET': return <SiDotnet className="w-7 h-7 text-[#512bd4]" />;
      case 'Flutter': return <SiFlutter className="w-7 h-7 text-[#02569b]" />;
      case 'React Native': return <FaReact className="w-7 h-7 text-[#61dafb]" />;
      case 'PostgreSQL': return <SiPostgresql className="w-7 h-7 text-[#4169e1]" />;
      case 'MySQL': return <SiMysql className="w-7 h-7 text-[#4479a1]" />;
      case 'MongoDB': return <SiMongodb className="w-7 h-7 text-[#47a248]" />;
      case 'Firebase': return <SiFirebase className="w-7 h-7 text-[#ffca28]" />;
      case 'Docker': return <FaDocker className="w-7 h-7 text-[#2496ed]" />;
      case 'Git': return <FaGitAlt className="w-7 h-7 text-[#f05032]" />;
      case 'GitHub / GitLab': return <FaGithub className="w-7 h-7 text-white" />;
      case 'CI/CD Pipelines': return <SiGithubactions className="w-7 h-7 text-[#2088ff]" />;
      case 'Kubernetes': return <SiKubernetes className="w-7 h-7 text-[#326ce5]" />;
      default: return <Code2 className="w-7 h-7 text-[#3b82f6]" />;
    }
  };

  const activeSections = activeCategory === 'all'
    ? sections
    : sections.filter((s) => s.id === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 h-[calc(100vh-130px)] flex flex-col allow-scroll">
      {/* Header (Fixed height portion) */}
      <div className="shrink-0 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/30 text-xs font-mono text-[#60a5fa] uppercase tracking-wider mb-2">
            04 • Compétences
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
            Stack & <span className="gradient-text-blue">Expertise Technique</span>
          </h2>
        </div>

        {/* Group Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-[#0e1738] p-1.5 rounded-2xl border border-white/10 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 focus:outline-none ${
                activeCategory === tab.id
                  ? 'bg-[#2563eb] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              data-cursor={tab.label}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Container with custom scrollbar */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-8 pb-10">
        {activeSections.map((section) => {
          const sectionSkills = SKILLS.filter((s) => section.categories.includes(s.category));

          return (
            <div key={section.id} className="space-y-4">
              {/* Section Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#2563eb]/15 border border-[#2563eb]/30">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white flex items-center gap-2">
                      {section.title}
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2563eb]/20 text-[#60a5fa] text-xs font-mono font-bold border border-[#2563eb]/30">
                        {sectionSkills.length}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">
                      {section.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {sectionSkills.map((skill, index) => (
                  <GlassCard
                    key={skill.id}
                    className="flex flex-col justify-between p-4 group hover:border-[#2563eb]/50"
                    cursorLabel={skill.name}
                  >
                    <div>
                      {/* Header Icon + Level */}
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          {getTechBadge(skill.name)}
                        </div>
                        <span className="font-mono text-xs font-extrabold text-[#3b82f6] bg-[#2563eb]/10 px-2 py-0.5 rounded-full border border-[#2563eb]/20">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h4 className="font-heading font-bold text-sm text-white mb-0.5 group-hover:text-[#3b82f6] transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-mono mb-3 line-clamp-2">
                        {skill.tagline}
                      </p>
                    </div>

                    {/* Fill Progress Bar */}
                    <div className="w-full">
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.04, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-full shadow-[0_0_10px_#2563eb]"
                        />
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};