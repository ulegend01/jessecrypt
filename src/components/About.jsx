import React, { useEffect, useRef } from 'react';

export function About() {
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

  const skills = [
    "COMMUNITY BUILDING",
    "CONTENT WRITING", 
    "AMBASSADOR",
    "ECOSYSTEM GROWTH",
    "PROTOCOL ADVOCACY"
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 md:py-32 px-4 md:px-[5%] border-t border-white/5 opacity-0 translate-y-[50px] transition-all duration-1000 ease-out"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div 
            className="text-[#1DA1F2] text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            IDENTITY
          </div>
          <h2 
            className="text-3xl md:text-[3.5rem] font-black tracking-[-1px]"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            BEYOND THE BONES
          </h2>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Bio Text */}
          <div>
            <div className="text-base md:text-lg text-[#B0B0B0] leading-relaxed mb-8">
              <p className="mb-6">
                Since 2020, I have been deeply embedded in the Web3 space, contributing to projects that define the future of finance and social interaction.
              </p>
              <p>
                I specialize in scaling communities, crafting technical content, and representing protocols as an ambassador.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 border border-white/10 text-xs font-bold tracking-[0.15em] text-white/60 hover:border-[#1DA1F2]/50 hover:text-[#1DA1F2] transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right: Stats Boxes */}
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-white/10 p-8 md:p-10 hover:border-[#1DA1F2]/30 transition-all duration-300">
              <span 
                className="block text-4xl md:text-5xl font-black text-[#1DA1F2] mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                14+
              </span>
              <span className="text-xs font-bold tracking-[0.3em] text-white/40">PARTNERS</span>
            </div>
            <div className="border border-white/10 p-8 md:p-10 hover:border-[#1DA1F2]/30 transition-all duration-300">
              <span 
                className="block text-4xl md:text-5xl font-black text-[#1DA1F2] mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                5k+
              </span>
              <span className="text-xs font-bold tracking-[0.3em] text-white/40">REACH</span>
            </div>
            <div className="border border-white/10 p-8 md:p-10 hover:border-[#1DA1F2]/30 transition-all duration-300">
              <span 
                className="block text-4xl md:text-5xl font-black text-[#1DA1F2] mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                4+
              </span>
              <span className="text-xs font-bold tracking-[0.3em] text-white/40">YEARS</span>
            </div>
            <div className="border border-white/10 p-8 md:p-10 hover:border-[#1DA1F2]/30 transition-all duration-300">
              <span 
                className="block text-4xl md:text-5xl font-black text-[#1DA1F2] mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                6+
              </span>
              <span className="text-xs font-bold tracking-[0.3em] text-white/40">PROJECTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
