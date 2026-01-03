import React from 'react';
import { Mail, Github, FileText, ExternalLink, BookOpen, Footprints, Pen, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { SectionType } from '../types';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: SectionType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: SectionType.EXPERIENCES, label: 'Experiences', icon: Footprints },
    { id: SectionType.PUBLICATIONS, label: 'Publications', icon: Pen },
    { id: SectionType.PERSONAL, label: 'Gallery', icon: Camera },
  ];

  return (
    <aside className="w-full lg:w-1/4 lg:fixed lg:h-screen p-8 lg:p-12 flex flex-col justify-between bg-slate-50 border-r border-slate-200 overflow-y-auto">
      <div>
        <div className="mb-10">
            {/* Profile Picture */}
            <div className="w-40 h-40 rounded-sm bg-slate-200 mb-6 overflow-hidden border border-slate-300 shadow-sm relative group">
                {/* 
                  NOTE: User should place their 'photo.jpg' in the public/root folder.
                  Fallback to placeholder if not found (browser handles broken image icon). 
                */}
                <img
                  src={`${import.meta.env.BASE_URL}PHOTO.png`}
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/300/300";
                  }}
                />
            </div>
            
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1 leading-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-slate-500 text-sm mb-6">{PERSONAL_INFO.university}</p>

            <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                    <Mail size={16} className="shrink-0" />
                    <div className="flex flex-col">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-slate-900 transition-colors">{PERSONAL_INFO.email}</a>
                        <a href={`mailto:${PERSONAL_INFO.email2}`} className="hover:text-slate-900 transition-colors">{PERSONAL_INFO.email2}</a>
                    </div>
                </div>
                
            </div>
        </div>

        <nav className="hidden lg:block mb-8">
            <ul className="space-y-4">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button 
                            onClick={() => onNavigate(item.id)}
                            className={`text-base transition-all duration-200 flex items-center gap-2 ${activeSection === item.id ? 'text-slate-900 font-bold translate-x-1' : 'text-slate-500 hover:text-slate-700 hover:translate-x-1'}`}
                        >
                            <item.icon size={16} className="text-black" />
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
      </div>

      <div className="mt-8 lg:mt-0 pt-6 border-t border-slate-200 lg:border-none space-y-4">
        <div className="flex gap-4">
             <a href={PERSONAL_INFO.cvLink} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors group">
                <FileText size={18} />
                <span>CV</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
             </a>
             <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-black transition-colors group">
                <Github size={18} />
                <span>Github</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
             </a>
             <a href={PERSONAL_INFO.researchGate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#00CCBB] transition-colors group">
                <BookOpen size={18} />
                <span>ResearchGate</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
             </a>
        </div>
        <p className="text-xs text-slate-400 font-light">
            &copy; {new Date().getFullYear()} Yuyan Huang.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
