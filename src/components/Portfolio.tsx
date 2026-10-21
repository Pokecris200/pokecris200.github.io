import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, ProjectCategory } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const tabs: { key: 'all' | ProjectCategory; labelKey: string }[] = [
    { key: 'all', labelKey: 'portfolio.tab.all' },
    { key: 'completos', labelKey: 'portfolio.tab.complete' },
    { key: 'aprendizaje', labelKey: 'portfolio.tab.learning' },
    { key: 'game-jams', labelKey: 'portfolio.tab.gamejams' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portafolio" className="relative py-24 border-t border-[#25465b]/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#184e77]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#34a0a4] uppercase">
              {t('portfolio.index')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#edf5f5] tracking-tight">
            {t('portfolio.title')}
          </h2>

          <p className="text-base text-[#a2bac9] leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#25465b]/40">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#edf5f5]'
                    : 'text-[#a2bac9] hover:text-[#edf5f5] hover:bg-[#102b40]/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 rounded-xl bg-[#102b40] border border-[#34a0a4]/60 shadow-[0_2px_12px_rgba(52,160,164,0.2)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{t(tab.labelKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
