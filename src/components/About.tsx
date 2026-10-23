import React, { useState } from 'react';
import { Code2, Bug, Kanban, HeartHandshake, User, Sparkles, Mail, Copy, Check } from 'lucide-react';
import { skillGroups } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('cristian.forero.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-4 h-4 text-[#34a0a4]" />;
      case 'qa':
        return <Bug className="w-4 h-4 text-[#b5e48c]" />;
      case 'management':
        return <Kanban className="w-4 h-4 text-[#1a759f]" />;
      case 'soft-skills':
        return <HeartHandshake className="w-4 h-4 text-[#34a0a4]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#b5e48c]" />;
    }
  };

  return (
    <section id="sobre-mi" className="relative py-24 border-t border-[#25465b]/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#34a0a4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#34a0a4] uppercase">
              {t('about.index')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#edf5f5] tracking-tight">
            {t('about.title')}
          </h2>
        </div>

        {/* Bio & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Photo / Avatar Placeholder */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-64 h-80 sm:w-72 sm:h-96 rounded-2xl bg-[#102b40] border border-[#25465b] p-3 flex flex-col items-center justify-center overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              {/* Inner card */}
              <div className="w-full h-full rounded-xl border border-dashed border-[#34a0a4]/40 bg-[#091c2b]/80 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[#102b40] border border-[#25465b] flex items-center justify-center mb-4 group-hover:border-[#34a0a4] transition-colors">
                  <User className="w-10 h-10 text-[#a2bac9] group-hover:text-[#b5e48c] transition-colors" />
                </div>
                <span className="text-sm font-heading font-medium text-[#edf5f5]">
                  {t('about.photoPlaceholder')}
                </span>
                <span className="text-xs text-[#a2bac9] mt-1">
                  Cristian Forero
                </span>
              </div>

              {/* Decorative accent corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#34a0a4]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#b5e48c]" />
            </div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#edf5f5]">
              {t('about.p1')}
            </h3>

            <p className="text-base sm:text-lg text-[#a2bac9] leading-relaxed">
              {t('about.p2')}
            </p>

            <p className="text-base sm:text-lg text-[#a2bac9] leading-relaxed">
              {t('about.p3')}
            </p>

            {/* Contact Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="mailto:cristian.forero.dev@gmail.com"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#34a0a4] hover:bg-[#2e8f93] text-[#091c2b] font-heading font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(52,160,164,0.3)] hover:shadow-[0_6px_25px_rgba(52,160,164,0.45)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{t('about.contactButton')}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#102b40] border border-[#25465b] hover:border-[#34a0a4] text-xs font-mono font-medium text-[#edf5f5] transition-all hover:-translate-y-0.5 cursor-pointer"
                title={t('about.copyEmail')}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#b5e48c]" />
                    <span className="text-[#b5e48c]">{t('about.copied')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#a2bac9]" />
                    <span>cristian.forero.dev@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section Header */}
        <div className="pt-12 border-t border-[#25465b]/40 mb-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#edf5f5]">
              {t('about.skillsTitle')}
            </h3>
            <p className="text-sm text-[#a2bac9]">
              {t('about.skillsSubtitle')}
            </p>
          </div>
        </div>

        {/* Skills Matrix (4 Columns / Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl bg-[#102b40]/60 border border-[#25465b] p-6 flex flex-col gap-4 hover:border-[#34a0a4]/50 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#25465b]/50">
                <div className="p-2 rounded-lg bg-[#091c2b] border border-[#25465b]">
                  {getGroupIcon(group.id)}
                </div>
                <h4 className="text-base font-heading font-bold text-[#edf5f5]">
                  {group.title[lang]}
                </h4>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#091c2b] text-[#edf5f5] border border-[#25465b] hover:border-[#b5e48c]/50 hover:text-[#b5e48c] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
