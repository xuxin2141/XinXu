
import React, { useState, useEffect } from 'react';
import { PROFESSOR_INFO, PUBLICATIONS, TEAM_MEMBERS, NEWS, PROJECTS } from './constants';
import { SectionHeader } from './components/SectionHeader';
import { PublicationCard } from './components/PublicationCard';
import { MemberCard } from './components/MemberCard';
import { ChatBot } from './components/ChatBot';

const App: React.FC = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'news', 'research', 'team', 'publications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveNav(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'news', label: 'News' },
    { id: 'research', label: 'Research' },
    { id: 'team', label: 'Team' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-bold rounded">X</div>
            <span className="font-serif font-bold text-xl tracking-tight text-slate-900 hidden sm:block">Xiao Lab</span>
          </div>
          <div className="flex gap-1 md:gap-8">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors ${
                  activeNav === link.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3 group-hover:rotate-1 transition-transform"></div>
                <img 
                  src={PROFESSOR_INFO.imageUrl} 
                  alt={PROFESSOR_INFO.name} 
                  className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-2">{PROFESSOR_INFO.name}</h1>
                <p className="text-xl text-blue-600 font-medium">{PROFESSOR_INFO.title}</p>
                <p className="text-slate-500">{PROFESSOR_INFO.department}</p>
                <p className="text-slate-500">{PROFESSOR_INFO.university}</p>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {PROFESSOR_INFO.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">Get in Touch</a>
                <a href="#publications" className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition-colors">Recent Papers</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader id="news" title="Latest News" subtitle="Keep up with our recent achievements, defenses, and event invitations." />
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{item.date}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader id="research" title="Research Areas" subtitle="Developing cutting-edge AI technologies for societal benefit." />
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Current Focus</h3>
            <p className="text-lg text-slate-600 max-w-4xl leading-relaxed italic border-l-4 border-blue-500 pl-6 py-2">
              "{PROFESSOR_INFO.researchSummary}"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map(project => (
              <div key={project.id} className="relative p-8 rounded-2xl bg-slate-50 overflow-hidden group">
                <div className={`absolute top-0 right-0 px-4 py-1 text-[10px] uppercase font-bold tracking-widest ${
                  project.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'
                }`}>
                  {project.status}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h4>
                <p className="text-slate-600 mb-6">{project.description}</p>
                {project.fundingBody && (
                  <div className="text-xs text-slate-400">
                    <span className="font-semibold text-slate-500">Funded by:</span> {project.fundingBody}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader id="team" title="Group Members" subtitle="Our group brings together diverse talents from around the world." />
          
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Faculty & Students</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {TEAM_MEMBERS.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Join Us</h3>
            <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                <h4 className="text-2xl font-bold mb-2">Looking for highly motivated students</h4>
                <p className="text-blue-100">We always welcome creative individuals to join our group as PhD/Master students or Research Assistants.</p>
              </div>
              <a href="mailto:jie.xiao@suda.edu.cn" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shrink-0">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader id="publications" title="Selected Publications" subtitle="For a full list of publications, please visit Google Scholar." />
          
          <div className="flex flex-col gap-6">
            {PUBLICATIONS.map(pub => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
              Visit Google Scholar Profile
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-slate-400">{PROFESSOR_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Office</h4>
                    <p className="text-slate-400">{PROFESSOR_INFO.office}</p>
                    <p className="text-slate-400">{PROFESSOR_INFO.department}, {PROFESSOR_INFO.university}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                    <a key={social} href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <span className="sr-only">{social}</span>
                      <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Message</label>
                  <textarea className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" placeholder="Tell us about your research interests..."></textarea>
                </div>
                <button className="w-full bg-blue-600 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-900 border-t border-slate-800 text-slate-500 text-sm text-center">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} {PROFESSOR_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS. Powered by Gemini AI.</p>
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatBot />
    </div>
  );
};

export default App;
