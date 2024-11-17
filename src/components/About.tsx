import React from 'react';
import { Code2, Palette, Box, Layers, Globe, Database, Wrench, FileDown } from 'lucide-react';
import profileImage from '../assets/my_image.jpg';

export function About() {
  const cards = [
    {
      icon: Code2,
      title: 'Full Stack Developer',
      description: 'Proficient in JavaScript, PHP and TypeScript. Experienced with React, Node.js, and various databases including MySQL and MongoDB.',
      skills: ['JavaScript','PHP', 'React', 'Node.js', 'MySQL', 'MongoDB']
    },
    {
      icon: Palette,
      title: 'UI/UX Designer',
      description: 'Creating intuitive and visually appealing user interfaces using modern design tools and principles. Experienced with Figma and Adobe Creative Suite.',
      skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'UI Design', 'UX Research', 'Prototyping']
    },
    {
      icon: Box,
      title: '3D Designer',
      description: 'Crafting immersive 3D experiences and animations using industry-standard tools. Specialized in Blender for modeling and animation.',
      skills: ['Blender', '3D Modeling', 'Animation', 'Texturing', 'Rendering']
    }
  ];

  const technicalSkills = [
    {
      icon: Globe,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
        { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg' },
        { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      ]
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
        { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' }
      ]
    },
    {
      icon: Palette,
      title: 'Design Tools',
      skills: [
        { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
        { name: 'Adobe Illustrator', icon: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg' },
        { name: 'Adobe Photoshop', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg' },
        { name: 'Blender', icon: 'https://download.blender.org/branding/community/blender_community_badge_white.svg' }
      ]
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      skills: [
        { name: 'VS Code', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
        { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
        { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
        { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' }
      ]
    }
  ];

  const handleDownloadCV = () => {
    // CV file URL
    const cvUrl = 'https://drive.google.com/file/d/1I-rFJxP09f8j23c_6LSwz8itkha2yfEj/view?usp=drive_link';
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Profile Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#36BCF7] blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden pixel-corners">
                <img
                  src={ profileImage }
                  alt="Isiwara Kumaragama"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#121212] p-6 rounded-lg pixel-corners">
              <h3 className="text-2xl font-bold mb-4">Isiwara Kumaragama</h3>
              <p className="text-gray-400 mb-4">
                A passionate developer and designer from Sri Lanka 🇱🇰, currently studying in Information Technology at the Institute of Technology University of Moratuwa (Expected graduation: 2025).
              </p>
              <p className="text-gray-400">
                I believe every pixel matters in design! 👨‍💻 Currently focusing on  Full Stack Development, UI/UX Design & 3D Design while exploring new technologies and creative solutions.
              </p>

              {/* Download CV Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleDownloadCV}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold overflow-hidden bg-[#36BCF7] rounded-lg transition-all duration-300 ease-out hover:bg-[#36BCF7]/90 hover:scale-105 transform">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#36BCF7]/0 via-[#36BCF7]/50 to-[#36BCF7]/0 skeleton-shine"></span>
                  <FileDown className="w-5 h-5 mr-2" />
                  <span>Download CV</span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#36BCF7]/0 via-[#36BCF7]/50 to-[#36BCF7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-[#121212] p-6 rounded-lg hover:bg-[#1A1A1A] transition-all duration-300 transform hover:-translate-y-2 pixel-corners group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#36BCF7]/10 flex items-center justify-center mb-6 group-hover:bg-[#36BCF7]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#36BCF7]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-400 mb-6">{card.description}</p>
                <div className="flex flex-wrap gap-2">
                  {card.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs px-2 py-1 rounded-full bg-[#36BCF7]/10 text-[#36BCF7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Skills */}
        <div id="technical-skills">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center flex items-center justify-center gap-2">
            <Layers className="text-[#36BCF7]" />
            <span className="text-gradient">Technical Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-[#121212] p-6 rounded-lg hover:bg-[#1A1A1A] transition-all duration-300 transform hover:-translate-y-2 pixel-corners group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#36BCF7]/10 flex items-center justify-center group-hover:bg-[#36BCF7]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#36BCF7]" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill relative flex items-center justify-center"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 transition-transform duration-300 group-hover/skill:scale-110"
                        />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#36BCF7] text-white text-xs py-1 px-2 rounded opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {skill.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}