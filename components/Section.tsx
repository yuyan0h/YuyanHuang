import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`mb-16 scroll-mt-16 ${className}`}>
      {title && (
        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-6 pb-2 border-b border-slate-200">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;