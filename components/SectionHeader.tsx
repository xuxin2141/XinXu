
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="pt-20 pb-10">
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">{title}</h2>
        <div className="h-[2px] flex-grow bg-slate-200 mt-2"></div>
      </div>
      {subtitle && <p className="text-slate-500 max-w-2xl">{subtitle}</p>}
    </div>
  );
};
