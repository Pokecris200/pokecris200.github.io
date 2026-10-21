import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#25465b] bg-[#091c2b] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Credits */}
        <p className="text-sm text-[#a2bac9]">
          {t('footer.copyright')}
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-sm text-[#a2bac9] hover:text-[#edf5f5] transition-colors cursor-pointer group"
        >
          <span>{t('footer.backToTop')}</span>
          <div className="p-1.5 rounded-full bg-[#102b40] border border-[#25465b] group-hover:border-[#34a0a4] transition-colors">
            <ArrowUp className="w-3.5 h-3.5 text-[#34a0a4] group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
};
