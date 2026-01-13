import Image from "next/image";

import Hero  from "@/components/neural-network-hero";
    
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { ElitePlanCard } from "@/components/elite-plan-card";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <Hero 
        title="Hi, I’m Raiyan Hasan"
        titleHighlight="Raiyan Hasan"
        description="I’m a Frontend / Full‑Stack Developer who builds modern, high‑performance web applications."
        imageSrc="/me.png"
        ctaButtons={[
          { text: "View Projects", href: "#projects", primary: true },
          { text: "Contact Me", href: "#contact" }
        ]}
      />
      

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative z-10 rounded-3xl border border-white/10 bg-zinc-900/50 p-8 md:p-12 backdrop-blur-md shadow-2xl">
             <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-blue-600/20 blur-3xl"></div>
             <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-purple-600/20 blur-3xl"></div>
             
             <h2 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 text-center">About Me</h2>
             <p className="text-gray-300 leading-relaxed  text-lg md:text-xl font-light">
               I’m a full-stack developer who helps individuals, startups, and small businesses turn ideas into fully functional web applications. I build complete solutions, handling everything from frontend design to backend logic and deployment-ready systems.
                <br />
              <span>
               I create clean, responsive, and modern user interfaces using JavaScript, React, Next.js, and Tailwind CSS, ensuring fast load times and smooth user experiences. On the backend, I develop secure and scalable APIs using Node.js, Express.js, Python, and FastAPI, with MongoDB as the primary database and Firebase Authentication for user management.
              </span>
              <br />
              <span>
               I focus on writing clean, maintainable code and delivering reliable, production-ready solutions. I value clear communication, on-time delivery, and building long-term relationships with clients by creating software that solves real problems.
              </span>
             </p>
          </div>
        </div>
      </section>
      {/* SKILLS SECTION */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-white inline-block relative">
            Technical Arsenal
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent"></span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {[
              { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "hover:border-yellow-400/50 hover:shadow-yellow-400/10" },
              { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "hover:border-blue-400/50 hover:shadow-blue-400/10" },
              { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", color: "hover:border-white/30 hover:shadow-white/5" },
              { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "hover:border-cyan-400/50 hover:shadow-cyan-400/10" },
              { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "hover:border-green-500/50 hover:shadow-green-500/10" },
              { name: "Express", icon: "https://cdn.simpleicons.org/express/white", color: "hover:border-white/20 hover:shadow-white/5" },
              { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "hover:border-blue-500/50 hover:shadow-blue-500/10" },
              { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/05998B", color: "hover:border-teal-500/50 hover:shadow-teal-500/10" },
              { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "hover:border-green-600/50 hover:shadow-green-600/10" },
              { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "hover:border-orange-400/50 hover:shadow-orange-400/10" },
            ].map((skill) => (
              <div 
                key={skill.name} 
                className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-800/40 transition-all duration-500 backdrop-blur-xl ${skill.color} hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Subtle Glow Backdrop */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-14 w-14 flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <span className="relative text-gray-400 group-hover:text-white text-sm font-semibold tracking-wide transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-white bg-clip-text text-transparent mb-4">Selected Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              A collection of projects where design meets robust engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                id: 1,
                title: "E-commerce Platform",
                subtitle: "Full Stack App",
                description: "A complete online store with payment processing and order management.",
                highlights: ["Next.js", "Stripe", "Zustand"],
                image: "/project1.avif"
              },
              {
                id: 2,
                title: "AI Analytics Dashboard",
                subtitle: "Data Visualization",
                description: "Real-time analytics dashboard powered by machine learning models.",
                highlights: ["Python", "TensorFlow", "React"],
                image: "/project2.avif"
              },
              {
                id: 3,
                title: "Social Media API",
                subtitle: "Backend System",
                description: "Scalable backend infrastructure for a social network application.",
                highlights: ["GraphQL", "Prisma", "Socket.io"],
                image: "/project3.webp"
              }
            ].map((project) => (
              <ElitePlanCard
                key={project.id}
                imageUrl={project.image}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                highlights={project.highlights}
                actionLink={`#project-${project.id}`}
              />
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 rounded-3xl border border-white/5 bg-white/5 p-12 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
          <p className="text-gray-300 mb-10 text-lg font-light">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a 
               href="mailto:your@email.com" 
               className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]"
             >
               Get in Touch
             </a>
             <div className="flex items-center gap-6 text-gray-400">
               <Link href="https://www.linkedin.com/in/raiyan-hasan-2919b4290/" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
               <Link href="https://github.com/Raiyan-dev-s" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-black">
        <p>© {new Date().getFullYear()} Raiyan Hasan. Crafted with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}

 
