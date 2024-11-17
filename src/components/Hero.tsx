import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Gamepad2, Palette, Box } from 'lucide-react';

const BinaryRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary rain configuration
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    
    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#36BCF7';
      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return;
      
      const { left, top, width, height } = titleRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      titleRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
        translateZ(20px)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = [
    { icon: Gamepad2, title: 'Full Stack Developer' },
    { icon: Palette, title: 'UI/UX Designer' },
    { icon: Box, title: '3D Animation Designer' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BinaryRain />
      <div className="scan-line" />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(54,188,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(54,188,247,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative container mx-auto px-6 py-32 text-center z-10">
        <div ref={titleRef} className="transition-transform duration-300 ease-out">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight glitch" data-text="Isiwara Kumaragama">
            <span className="block text-[#36BCF7] mb-8">Isiwara Kumaragama</span>
            <div className="flex flex-col items-center space-y-4 mt-6">
              {roles.map(({ icon: Icon, title }, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center text-2xl md:text-4xl transition-all duration-300 hover:text-[#36BCF7]"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  <Icon className="inline-block mr-3 mb-1" />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </h1>
        </div>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12">
          Crafting immersive digital experiences through code and design.
          Level up your web presence with cutting-edge technologies.
        </p>

        <div className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: "https://github.com/isiwarakumaragama", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/isiwara-k", label: "LinkedIn" },
            { icon: Mail, href: "mailto:manujaisiwarakumaragama@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger p-3 bg-[#121212] rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-[#1A1A1A] hover:shadow-[0_0_20px_rgba(54,188,247,0.3)]"
              aria-label={label}
            >
              <Icon size={24} className="hover-target transition-all duration-300" />
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="inline-block animate-bounce hover:text-[#36BCF7] transition-colors"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}