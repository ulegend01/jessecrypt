import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-6 md:p-10 border relative overflow-hidden transition-all duration-400"
      style={{
        background: isHovered ? 'rgba(29, 161, 242, 0.05)' : 'rgba(255,255,255,0.02)',
        borderColor: isHovered ? 'rgba(29, 161, 242, 0.3)' : 'rgba(255,255,255,0.05)',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
      }}
    >
      <span className="text-[#1DA1F2] text-[0.65rem] md:text-[0.7rem] font-extrabold tracking-[0.2em] md:tracking-[0.25em]">
        [ {project.role.toUpperCase()} ]
      </span>
      <h3 
        className="my-4 md:my-6 text-xl md:text-3xl text-white"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        {project.name}
      </h3>
      <p className="text-[#B0B0B0] text-sm md:text-base mb-6 md:mb-8">
        {project.desc}
      </p>
      <a 
        href="#" 
        className="text-white no-underline font-bold text-xs tracking-widest border-b border-[#1DA1F2]"
      >
        DECRYPT CASE
      </a>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-16 md:py-40 px-4 md:px-[5%] border-t border-white/5 opacity-0 translate-y-[50px] transition-all duration-1000 ease-out"
    >
      <div className="max-w-[1200px] mx-auto">
        <div 
          className="text-[#1DA1F2] text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          PORTFOLIO
        </div>
        <h2 
          className="text-2xl md:text-[3.5rem] font-black mb-8 md:mb-12 tracking-[-1px]"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          PROOF OF WORK
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
