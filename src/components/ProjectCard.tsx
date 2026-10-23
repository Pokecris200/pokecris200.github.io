import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2 } from 'lucide-react';
import { Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { lang, t } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl bg-[#102b40]/60 border border-[#25465b] hover:border-[#34a0a4]/60 transition-all duration-300 overflow-hidden hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:-translate-y-1"
    >
      {/* Card Header / Thumbnail Area */}
      <div className="relative aspect-[16/10] w-full p-4 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#184e77]/40 via-[#102b40] to-[#091c2b]">
        {/* Project Cover Image (if provided) */}
        {project.imageUrl ? (
          <>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Dark gradient overlay for badge readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#091c2b] via-[#091c2b]/40 to-black/60 pointer-events-none" />
          </>
        ) : (
          /* Subtle decorative grid/glow for placeholder */
          <div
            className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity"
            style={{
              backgroundImage: `radial-gradient(rgba(52, 160, 164, 0.5) 1px, transparent 1px)`,
              backgroundSize: '18px 18px'
            }}
          />
        )}

        <div className="relative z-10 flex items-center justify-between">
          {!project.isPending ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#091c2b]/85 border border-[#34a0a4]/50 text-[10px] font-mono tracking-wider text-[#b5e48c] uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5e48c]" />
              {project.categoryLabel[lang]}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#091c2b]/80 border border-[#25465b] text-[10px] font-mono tracking-wider text-[#b5e48c] uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5e48c]" />
              {t('portfolio.exampleBadge')}
            </span>
          )}

          <span className="text-[10px] font-mono text-[#a2bac9] tracking-wider uppercase drop-shadow">
            {project.tagline[lang]}
          </span>
        </div>

        {/* Center Artwork only for projects without imageUrl */}
        {!project.imageUrl && (
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-[#091c2b]/70 border border-[#34a0a4]/30 flex items-center justify-center shadow-inner group-hover:scale-105 group-hover:border-[#34a0a4] transition-all">
              <Gamepad2 className="w-8 h-8 text-[#34a0a4] group-hover:text-[#b5e48c] transition-colors" />
            </div>
            <span className="mt-2 text-[10px] font-mono tracking-wider text-[#a2bac9] uppercase opacity-80">
              {project.tagline[lang]}
            </span>
          </div>
        )}

        {/* Bottom subtle glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#25465b] to-transparent group-hover:via-[#34a0a4] transition-colors" />
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-heading font-bold text-[#edf5f5] group-hover:text-[#b5e48c] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[#a2bac9] leading-relaxed line-clamp-3">
            {project.description[lang]}
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-2">
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#091c2b]/90 text-[#a2bac9] border border-[#25465b]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action button */}
          <div className="pt-2 border-t border-[#25465b]/50 flex items-center justify-between">
            <a
              href={project.itchUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#edf5f5] hover:text-[#b5e48c] transition-colors"
            >
              <span>{t('portfolio.itchLink')}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#34a0a4]" />
            </a>

            {project.isPending && (
              <span className="text-[11px] font-mono text-[#a2bac9]/60">
                {t('portfolio.pendingLink')}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
