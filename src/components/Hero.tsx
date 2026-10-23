import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Gamepad2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ComingSoonCircle } from './ComingSoonCircle';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#184e77]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#34a0a4]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main hero grid */}
      <div className="max-w-6xl mx-auto px-6 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start gap-6"
        >
          {/* Role badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102b40]/80 border border-[#25465b] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#b5e48c]" />
            <span className="text-xs font-mono font-medium tracking-wide text-[#b5e48c] uppercase">
              {t('hero.badge')}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold text-[#edf5f5] tracking-tight leading-[1.08]">
            Cristian<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#edf5f5] via-[#a2bac9] to-[#34a0a4]">
              Forero.
            </span>
          </h1>

          {/* Subtitle / Intro */}
          <p className="text-base sm:text-lg text-[#a2bac9] max-w-xl font-normal leading-relaxed">
            {t('hero.intro')}
          </p>

          {/* Main Action Button */}
          <div className="pt-2">
            <a
              href="#portafolio"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#34a0a4] hover:bg-[#2e8f93] text-[#091c2b] font-heading font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(52,160,164,0.3)] hover:shadow-[0_6px_25px_rgba(52,160,164,0.45)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t('hero.viewPortfolio')}</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Social Profiles Row (Below main CTA) */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/pokecris200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#102b40] border border-[#25465b] hover:border-[#34a0a4] text-xs font-medium text-[#a2bac9] hover:text-[#edf5f5] transition-all hover:-translate-y-0.5"
              title="GitHub: pokecris200"
            >
              <Github className="w-4 h-4 text-[#edf5f5]" />
              <span>GitHub</span>
            </a>

            <a
              href="https://pokecris200.itch.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#102b40] border border-[#25465b] hover:border-[#b5e48c] text-xs font-medium text-[#a2bac9] hover:text-[#edf5f5] transition-all hover:-translate-y-0.5"
              title="itch.io: pokecris200"
            >
              <Gamepad2 className="w-4 h-4 text-[#b5e48c]" />
              <span>itch.io</span>
            </a>

            <a
              href="https://www.linkedin.com/in/cristiancforero/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#102b40] border border-[#25465b] hover:border-[#34a0a4] text-xs font-medium text-[#a2bac9] hover:text-[#edf5f5] transition-all hover:-translate-y-0.5"
              title="LinkedIn: cristiancforero"
            >
              <Linkedin className="w-4 h-4 text-[#34a0a4]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Studio of Light / Coming Soon Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center py-6"
        >
          <ComingSoonCircle />
        </motion.div>
      </div>

      {/* Bottom presentation footer banner */}
      <div className="max-w-6xl mx-auto px-6 w-full pt-12 border-t border-[#25465b]/40">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34a0a4]" />
            <span className="text-xs font-mono font-medium tracking-wider text-[#a2bac9] uppercase">
              {t('hero.banner')}
            </span>
          </div>

          <a
            href="#portafolio"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#edf5f5] hover:text-[#b5e48c] transition-colors"
          >
            <span>{t('hero.explore')}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#34a0a4] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
