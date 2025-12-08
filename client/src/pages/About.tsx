import { motion } from "framer-motion";
import { GlitchText } from "@/components/ui/GlitchText";

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
  "Three.js", "WebGL", "TailwindCSS", "Node.js", 
  "PostgreSQL", "Framer Motion", "GLSL", "Blender"
];

const experience = [
  {
    role: "Senior Creative Dev",
    company: "Studio Noir",
    period: "2023 - Present",
    desc: "Leading the development of immersive web experiences for luxury fashion brands."
  },
  {
    role: "Frontend Developer",
    company: "Tech Corp",
    period: "2021 - 2023",
    desc: "Built scalable dashboard interfaces and design systems used by 50k+ users."
  },
  {
    role: "Freelance",
    company: "Self-Employed",
    period: "2019 - 2021",
    desc: "Worked with various startups to deliver high-performance landing pages."
  }
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "Digital Arts University",
    year: "2015 - 2019"
  },
  {
    degree: "Interactive Design Certification",
    school: "Creative Code Academy",
    year: "2020"
  }
];

export default function About() {
  return (
    <div className="py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GlitchText text="ABOUT_ME" size="lg" className="mb-12" />

        <div className="grid md:grid-cols-2 gap-16">
            <div>
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary block" /> 
                    WHO I AM
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-mono text-sm">
                    I am a creative technologist based in the digital void. I bridge the gap between design and engineering, focusing on performance, interaction, and visual fidelity.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 font-mono text-sm">
                    My philosophy is simple: the web should be an experience, not just a document. I push browsers to their limits using WebGL and modern CSS techniques.
                </p>

                <div className="mt-12">
                     <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary block" /> 
                        TECH STACK
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                            <span key={skill} className="px-3 py-1 border border-white/10 text-xs font-mono hover:border-primary hover:text-primary transition-colors cursor-crosshair">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                 <h3 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent block" /> 
                    EXPERIENCE
                </h3>
                
                <div className="space-y-8 border-l border-white/10 pl-8 relative mb-12">
                    {experience.map((job, i) => (
                        <div key={i} className="relative">
                            <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent" />
                            <h4 className="text-lg font-bold font-sans">{job.role}</h4>
                            <div className="text-sm font-mono text-accent mb-2">{job.company} // {job.period}</div>
                            <p className="text-sm text-muted-foreground">{job.desc}</p>
                        </div>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-white block" /> 
                    EDUCATION
                </h3>
                <div className="space-y-6">
                    {education.map((edu, i) => (
                         <div key={i} className="border border-white/10 p-4 hover:border-white transition-colors">
                            <h4 className="font-bold font-sans">{edu.degree}</h4>
                            <div className="flex justify-between text-xs font-mono text-muted-foreground mt-1">
                                <span>{edu.school}</span>
                                <span>{edu.year}</span>
                            </div>
                         </div>
                    ))}
                </div>

                <div className="mt-12 p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                    <h4 className="font-bold mb-2 text-sm">LET'S CONNECT</h4>
                    <p className="text-xs text-muted-foreground mb-4 font-mono">Open for new opportunities and collaborations.</p>
                    <a href="mailto:hello@rave.dev" className="text-primary hover:underline font-mono text-sm">
                        hello@rave.dev
                    </a>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
