import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, FileText, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '#inicio' },
    { label: t('nav.portfolio'), href: '#portafolio' },
    { label: t('nav.about'), href: '#sobre-mi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#inicio"
          className="group flex items-center gap-2 text-xl font-heading font-black tracking-tight text-[#edf5f5] hover:text-[#b5e48c] transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-[#102b40] border border-[#25465b] flex items-center justify-center text-sm font-bold text-[#b5e48c] group-hover:border-[#34a0a4] transition-all">
            cf
          </span>
          <span>Cristian Forero<span className="text-[#34a0a4]">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-[#a2bac9]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-[#edf5f5] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#34a0a4] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-[#25465b]" />

          {/* CV & Language */}
          <div className="flex items-center gap-3">
            <a
              href="#cv"
              onClick={(e) => {
                e.preventDefault();
                alert(lang === 'es' ? 'El currículum estará disponible para descarga en breve.' : 'Resume download will be available shortly.');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#edf5f5] bg-[#102b40] border border-[#25465b] hover:border-[#34a0a4] hover:bg-[#184e77]/40 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#34a0a4]" />
              <span>{t('nav.cv')}</span>
            </a>

            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#edf5f5] bg-[#102b40] border border-[#25465b] hover:border-[#b5e48c] transition-all cursor-pointer"
              title="Cambiar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-[#b5e48c]" />
              <span className={lang === 'es' ? 'text-[#b5e48c] font-bold' : 'text-[#a2bac9]'}>ES</span>
              <span className="text-[#25465b]">/</span>
              <span className={lang === 'en' ? 'text-[#b5e48c] font-bold' : 'text-[#a2bac9]'}>EN</span>
            </button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#102b40] border border-[#25465b] text-[#b5e48c]"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#102b40] border border-[#25465b] text-[#edf5f5] hover:text-[#b5e48c]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-[#25465b] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#edf5f5] py-2 border-b border-[#25465b]/40 hover:text-[#b5e48c]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                alert(lang === 'es' ? 'El currículum estará disponible para descarga en breve.' : 'Resume download will be available shortly.');
                setMobileMenuOpen(false);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#102b40] border border-[#25465b] text-sm font-medium text-[#edf5f5]"
            >
              <FileText className="w-4 h-4 text-[#34a0a4]" />
              {t('nav.cv')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
