import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Photography from './components/Photography';
import { 
  PERSONAL_INFO, 
  EDUCATION, 
  RESEARCH_PROJECTS, 
  PUBLICATIONS, 
  AWARDS, 
  SERVICES,
  SKILLS 
} from './constants';
import { SectionType } from './types';
import { Menu, X, BookOpen, GraduationCap, Briefcase, Award, Camera } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SectionType.ABOUT);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (section: SectionType) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy effect to update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionType);
      
      // Simple scroll spy logic
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 500) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md z-50 flex items-center justify-between px-6 border-b border-slate-200">
        <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-900">{PERSONAL_INFO.name}</span>
            <span className="text-xs text-red-500 font-bold">{PERSONAL_INFO.title}</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 p-6 overflow-y-auto">
          <ul className="space-y-4 text-lg">
            {Object.values(SectionType).map((section) => (
              <li key={section}>
                <button 
                  onClick={() => handleNavigate(section)}
                  className="capitalize text-slate-700 font-medium"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar (Left Column) */}
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Main Content (Right Column) */}
        <main className="w-full lg:w-3/4 lg:ml-[25%] p-6 lg:p-20 mt-16 lg:mt-0">
          
          {/* 1. About / Bio */}
          <Section id={SectionType.ABOUT} className="pt-4 lg:pt-10">
             <h1 className="text-3xl font-bold text-slate-900 mb-6">{PERSONAL_INFO.introHeader}</h1>
             <div className="prose prose-slate max-w-none">
                {Array.isArray(PERSONAL_INFO.bio) ? (
                  PERSONAL_INFO.bio.map((paragraph, idx) => (
                    <p key={idx} className="text-lg leading-relaxed text-slate-700 mb-6 font-light">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-lg leading-relaxed text-slate-700">
                    {PERSONAL_INFO.bio}
                  </p>
                )}
             </div>
             
             {/* Research Interests / Keywords */}
             <div className="mt-8">
                 <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Research Interests</h3>
                 <div className="flex flex-wrap gap-2">
                    {["Urban Sustainability", "Carbon Mitigation", "Food Systems", "Urban Informatics", "LLM in Urban Planning"].map(interest => (
                        <span key={interest} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                            {interest}
                        </span>
                    ))}
                 </div>
             </div>
          </Section>

          <div className="w-full h-px bg-slate-200 my-16"></div>

          {/* 2. Experiences (Edu, Research, Services, Awards) */}
          <Section id={SectionType.EXPERIENCES} title="Experiences">
            
            {/* Education Subsection */}
            <div className="mb-14">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <GraduationCap size={20} className="text-slate-500" />
                    Education
                </h3>
                <div className="space-y-8 pl-4 border-l border-slate-200 ml-2.5">
                {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-white border-2 border-slate-300 rounded-full"></div>
                        <div className="flex flex-col md:flex-row md:justify-between gap-1">
                            <div>
                                <h4 className="font-bold text-slate-900">{edu.institution}</h4>
                                <div className="text-slate-700">{edu.degree}</div>
                            </div>
                            <div className="text-slate-500 text-sm whitespace-nowrap">{edu.duration}</div>
                        </div>
                        {edu.details && (
                        <p className="mt-1 text-sm text-slate-600 italic">
                            {edu.details[0]}
                        </p>
                        )}
                    </div>
                ))}
                </div>
            </div>

            {/* Research Subsection */}
            <div className="mb-14">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <BookOpen size={20} className="text-slate-500" />
                    Research & Projects
                </h3>
                <div className="space-y-12">
                {RESEARCH_PROJECTS.map((project, idx) => {
                    const isNewCategory = idx === 0 || RESEARCH_PROJECTS[idx - 1].category !== project.category;
                    return (
                    <div key={idx} className="group">
                        {isNewCategory && project.category && (
                            <div className="mb-6 pt-4 first:pt-0">
                                <h4 className="text-xl font-extrabold text-slate-800 tracking-tight border-b-2 border-slate-800 pb-2 inline-block">
                                    {project.category}
                                </h4>
                            </div>
                        )}
                        <div className="pl-4 border-l border-slate-200 ml-2.5 relative">
                            <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-slate-200 border-2 border-white rounded-full group-hover:bg-blue-500 transition-colors"></div>
                            <h5 className="font-bold text-slate-900 text-lg">{project.title}</h5>
                            <div className="text-sm text-slate-500 mb-2 italic">
                                {project.role} 
                                {project.advisor && ` | Advisor: ${project.advisor}`}
                                <span className="float-right not-italic">{project.duration}</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 text-slate-700 space-y-1 text-sm leading-relaxed">
                                {project.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>

            {/* Services Subsection */}
            <div className="mb-14">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Briefcase size={20} className="text-slate-500" />
                    Services & Work
                </h3>
                <div className="space-y-8 pl-4 border-l border-slate-200 ml-2.5">
                  {SERVICES.map((exp, idx) => (
                    <div key={idx} className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-white border-2 border-slate-300 rounded-full"></div>
                        <div className="flex flex-col md:flex-row md:justify-between mb-1">
                            <h4 className="font-bold text-slate-900">{exp.organization}</h4>
                            <span className="text-sm text-slate-500">{exp.duration}</span>
                        </div>
                        <div className="text-sm font-medium text-slate-700 mb-1">{exp.title}</div>
                        {exp.description && exp.description.map((d, i) => (
                             <p key={i} className="text-sm text-slate-600 mb-1">{d}</p>
                        ))}
                    </div>
                  ))}
                </div>
            </div>

            {/* Awards Subsection */}
             <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Award size={20} className="text-slate-500" />
                    Honors & Awards
                </h3>
                 <ul className="space-y-3 pl-4">
                    {AWARDS.map((award, idx) => (
                        <li key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-sm border-b border-slate-50 pb-2 last:border-0">
                            <span className="text-slate-800 font-medium">{award.title}</span>
                            <span className="text-slate-500 font-mono sm:ml-4 whitespace-nowrap">{award.year}</span>
                        </li>
                    ))}
                 </ul>
             </div>

          </Section>

          <div className="w-full h-px bg-slate-200 my-16"></div>

          {/* 3. Publications */}
          <Section id={SectionType.PUBLICATIONS} title="Publications">
             <div className="space-y-8">
                {['Journal Papers', 'Conference Papers', 'Presentations', 'Book Chapters', 'Reports & White Papers'].map((type) => {
                    const pubs = PUBLICATIONS.filter(p => p.type === type);
                    if (pubs.length === 0) return null;
                    return (
                        <div key={type} className="mb-8 last:mb-0">
                            <h3 className="text-md font-bold uppercase tracking-wider text-slate-500 mb-4 border-b border-slate-100 pb-1">{type}</h3>
                            <div className="space-y-5">
                                {pubs.map((pub, idx) => (
                                    <div key={idx} className="group">
                                        <p className="text-slate-800 leading-relaxed text-sm">
                                            {/* We only bold the title, everything else is normal */}
                                            <span className="font-bold text-slate-900">{pub.title}</span>
                                            <br/>
                                            <span className="text-slate-600">{pub.authors}</span> <span className="text-slate-400">({pub.year})</span>.
                                            <br/>
                                            <span className="italic text-slate-700">{pub.venue}</span>
                                            {pub.link && (
                                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-block ml-2 text-blue-600 hover:underline font-medium">
                                                    [View]
                                                </a>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
             </div>
          </Section>

          <div className="w-full h-px bg-slate-200 my-16"></div>

          {/* 4. Personal / Photography */}
          <Section id={SectionType.PERSONAL}>
             <div className="flex items-center gap-2 mb-6">
                 <Camera size={24} className="text-slate-900" />
                 <h2 className="text-2xl font-bold text-slate-900">Personal Gallery</h2>
             </div>
             <Photography />
          </Section>

        </main>
      </div>
    </div>
  );
};

export default App;