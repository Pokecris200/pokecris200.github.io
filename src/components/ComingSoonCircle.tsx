import React from 'react';
import { motion } from 'framer-motion';

export const ComingSoonCircle: React.FC = () => {
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

        {/* Inner Depth Circle displaying the Developer Avatar Illustration */}
        <div
          className="relative flex flex-col items-center justify-center w-[220px] sm:w-[260px] md:w-[290px] h-[220px] sm:h-[260px] md:h-[290px] rounded-full border border-[#a2bac9]/30 shadow-[inset_0_4px_20px_rgba(9,28,43,0.9)] overflow-hidden group"
          style={{
            background: 'linear-gradient(155deg, #091c2b 5%, #102b40 72%, #184e77 100%)'
          }}
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(52, 160, 164, 0.4) 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Central Illustration Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <img
              src="./hero-artwork.png"
              alt="Avatar de desarrollador con criatura chibi - Cristian Forero"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Subtle inner circular vignette */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(9,28,43,0.6)] pointer-events-none" />
          </motion.div>

          {/* Horizon light reflection */}
          <div className="absolute bottom-4 w-28 h-[1px] bg-gradient-to-r from-transparent via-[#34a0a4]/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
