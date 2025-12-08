import { motion } from "framer-motion";
import { GlitchText } from "@/components/ui/GlitchText";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NEON_DREAMS",
    category: "WEBGL / THREE.JS",
    description: "An interactive music visualizer built with React Three Fiber.",
    tech: ["React", "R3F", "GLSL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "CYBER_COMMERCE",
    category: "ECOMMERCE",
    description: "Headless Shopify storefront with brutalist aesthetic.",
    tech: ["Next.js", "Shopify", "Tailwind"],
    image: "https://images.unsplash.com/photo-1558470598-a5dda9640f6b?q=80&w=2671&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "DATA_NEXUS",
    category: "DASHBOARD",
    description: "Real-time crypto analytics platform with dark mode.",
    tech: ["D3.js", "WebSockets", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "VOID_GALLERY",
    category: "IMMERSIVE",
    description: "Virtual art gallery experience.",
    tech: ["Unity", "WebGL", "C#"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  }
];

export default function Work() {
  return (
    <div className="py-12">
      <div className="mb-16">
        <GlitchText text="SELECTED_WORK" size="lg" />
        <p className="mt-4 font-mono text-muted-foreground text-sm max-w-md">
            // A curation of digital experiments and commercial projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative"
          >
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 gap-4">
                    <button className="bg-black text-white p-3 rounded-full hover:bg-primary hover:text-black transition-colors">
                        <Github className="w-5 h-5" />
                    </button>
                    <button className="bg-black text-white p-3 rounded-full hover:bg-primary hover:text-black transition-colors">
                        <ExternalLink className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="mt-4 flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold font-sans tracking-tight group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-xs font-mono text-primary mb-2 mt-1">{project.category}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2 max-w-xs">{project.description}</p>
                </div>
                <div className="hidden md:flex flex-col items-end gap-1">
                    {project.tech.map(t => (
                        <span key={t} className="text-[10px] uppercase font-mono border border-white/20 px-1 py-0.5 text-muted-foreground">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
