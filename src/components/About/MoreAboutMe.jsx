import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// AboutPage.jsx
// Single-file React component using Tailwind CSS for a responsive, animated
// "About Me" portfolio section with an effective animated background.
// Drop this component into a project that already has Tailwind configured.

export default function MoreAboutMe({
  name = "Akash",
  title = "Fullstack Developer",
  bio = `Hi — I'm  Fullstack developer who builds beautiful, performant
user interfaces. I love clean design, subtle animations, and producing
experiences that make people's lives easier. I work with React, Tailwind,
and modern web tools to ship polished, responsive apps.handling api and making api in backends JWT auth`,
  skills = ["React","MERN","PYTHON","DJANGO", "Tailwind CSS","AJAX","JQUERY","BOOTSTRAP","HTML","CSS", "JavaScript","AXIOS","REDUX TOOLKITS","API INTEGRATION", "Vite"],
  imageAlt = "Profile picture",
  socials = [
    { label: "GitHub", href: "https://www.linkedin.com/in/akash-kumar-maurya-21b68a378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akash-kumar-maurya-21b68a378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { label: "YuTube", href: "https://youtube.com/@codeifyme?si=qSws0Mp2YckSvp9-" },
  ],
}) {
  return (
    <section id="more-about-me" className="relative min-h-screen flex items-center justify-center bg-neutral-900 text-slate-50 overflow-hidden">
      {/* ---- Animated background shapes (decorative) ---- */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* large soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-fuchsia-700 to-rose-600 opacity-30 mix-blend-screen" />

        {/* animated orbs */}
        <div className="pointer-events-none">
          <div className="absolute -left-40 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-500 via-violet-400 to-transparent opacity-40 blur-3xl animate-slow-blob" />
          <div className="absolute right-10 -top-16 w-72 h-72 rounded-full bg-gradient-to-br from-rose-400 via-orange-300 to-transparent opacity-30 blur-2xl animate-slower-blob" />
          <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 w-[36rem] h-72 rounded-full bg-gradient-to-r from-cyan-300/30 to-blue-400/20 opacity-20 blur-2xl animate-translate-x" />
        </div>

        {/* subtle grid lines for texture */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0L0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ---- Content card ---- */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative max-w-5xl mx-auto backdrop-blur-md bg-white/5 rounded-2xl shadow-2xl ring-1 ring-white/6 overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left: Profile and intro */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {/* Profile image placeholder */}
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden ring-1 ring-white/10 shadow-lg transform transition-transform duration-700 hover:scale-105">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block bg-gradient-to-br from-slate-700 to-slate-800">
                      <defs>
                        <linearGradient id="g" x1="0" x2="1">
                          <stop offset="0%" stopColor="#a78bfa" />
                          <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#g)" />
                      <g transform="translate(30,30)" fill="#fff" opacity="0.9">
                        <circle cx="50" cy="40" r="28" />
                        <rect x="16" y="92" width="68" height="46" rx="10" />
                      </g>
                    </svg>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{name}</h1>
                  <p className="text-indigo-200/80 mt-1">{title}</p>
                </div>
              </div>

              <p className="text-slate-200/90 leading-relaxed max-w-3xl">{bio}</p>

              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span key={s} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/6 text-sm ring-1 ring-white/6 backdrop-blur">
                    <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-4">
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600/95 hover:bg-indigo-500 transition">Contact Me</a>
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/8 hover:bg-white/3 transition">See Projects</a>
              </div>

              {/* social links */}
              <div className="flex items-center gap-3 mt-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="text-sm inline-flex items-center gap-2 opacity-90 hover:opacity-100 transition">
                    <span className="w-8 h-8 rounded-full bg-white/4 flex items-center justify-center ring-1 ring-white/6">{s.label.slice(0,1)}</span>
                    <span className="hidden sm:inline">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Feature / quote card */}
            <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-white/3 to-transparent border border-white/6">
              <blockquote className="text-slate-100/95 text-lg md:text-xl leading-snug">
                "Design is not just how it looks — it's how it works. I focus on crafting interfaces that are accessible,
                fast, and delightful to use."
              </blockquote>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-white/3 ring-1 ring-white/6">
                  <div className="text-xs uppercase text-slate-200/70">Years</div>
                  <div className="text-2xl font-medium">3+</div>
                </div>
                <div className="p-4 rounded-lg bg-white/3 ring-1 ring-white/6">
                  <div className="text-xs uppercase text-slate-200/70">Projects</div>
                  <div className="text-2xl font-medium">25+</div>
                </div>
              </div>

              <div className="mt-6">
                <a href="akash_resume.pdf" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-500 transition">Download Resume</a>
              </div>

              {/* small floating card for decorative micro-interaction */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-xl bg-gradient-to-tr from-rose-400 to-yellow-300 opacity-90 shadow-xl transform rotate-12 animate-float-slow hidden md:block" />
            </div>
          </div>

        </div>
      </div>

      {/* ---- Inline CSS for custom animations (safe for single-file component) ---- */}
      <style>
        {`
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        @keyframes blob {
          0% { transform: translate3d(0,0,0) scale(1); }
          33% { transform: translate3d(40px,-20px,0) scale(1.05); }
          66% { transform: translate3d(-20px,20px,0) scale(0.95); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }

        @keyframes slideX {
          0% { transform: translateX(-20%); }
          50% { transform: translateX(20%); }
          100% { transform: translateX(-20%); }
        }

        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-slow-blob { animation: blob 14s ease-in-out infinite; }
        .animate-slower-blob { animation: blob 22s ease-in-out infinite; }
        .animate-translate-x { animation: slideX 18s linear infinite; }
        `}
      </style>
    </section>
  );
}
