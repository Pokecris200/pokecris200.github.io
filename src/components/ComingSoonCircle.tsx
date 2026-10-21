import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ComingSoonCircle: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative flex items-center justify-center w-[300px] sm:w-[360px] md:w-[420px] h-[300px] sm:h-[360px] md:h-[420px]">
      {/* Outer Halo with radial gradient matching Framer */}
      <div
        className="relative flex items-center justify-center w-[280px] sm:w-[320px] md:w-[360px] h-[280px] sm:h-[320px] md:h-[360px] rounded-full border border-[#1e6091] shadow-[0_0_35px_rgba(22,138,173,0.3)] transition-all duration-700"
        style={{
          background: 'radial-gradient(50% 50% at 70% 20%, #34a0a4 0%, #1a759f 23%, #184e77 44%, #091c2b 72%)'
        }}
      >
        {/* Orbital rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-8px] rounded-full border border-dashed border-[#34a0a4]/30 pointer-events-none"
        />

        {/* Orbiting particle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-14px] pointer-events-none"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#b5e48c] shadow-[0_0_12px_#b5e48c]" />
        </motion.div>

        {/* Inner Depth Circle */}
        <div
          className="relative flex flex-col items-center justify-center w-[220px] sm:w-[260px] md:w-[290px] h-[220px] sm:h-[260px] md:h-[290px] rounded-full border border-[#a2bac9]/25 shadow-[inset_0_4px_20px_rgba(9,28,43,0.9)] overflow-hidden"
          style={{
            background: 'linear-gradient(155deg, #091c2b 5%, #102b40 72%, #184e77 100%)'
          }}
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(rgba(52, 160, 164, 0.4) 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Central radar scan line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#34a0a4]/60 to-transparent pointer-events-none"
          />

          {/* Central Icon / Artwork Placeholder Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center text-center px-4"
          >
            {/* Pulsing Gamepad / Tech Icon */}
            <div className="relative mb-3 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-12 h-12 rounded-full bg-[#34a0a4]/20 blur-sm"
              />
              <div className="w-10 h-10 rounded-full border border-[#34a0a4]/50 bg-[#102b40]/80 flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-5 h-5 text-[#b5e48c]" />
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#091c2b]/80 border border-[#25465b] mb-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b5e48c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b5e48c]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider text-[#b5e48c] font-semibold uppercase">
                {t('hero.comingSoonTitle')}
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-[11px] text-[#a2bac9] max-w-[170px] leading-snug">
              {t('hero.comingSoonSubtitle')}
            </p>
          </motion.div>

          {/* Horizon light reflection (from original Framer line) */}
          <div className="absolute bottom-6 w-28 h-[1px] bg-gradient-to-r from-transparent via-[#34a0a4]/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};
