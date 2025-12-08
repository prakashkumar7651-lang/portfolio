import { motion } from "framer-motion";
import { GlitchText } from "@/components/ui/GlitchText";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="font-mono text-primary mb-4 tracking-widest text-sm md:text-base">
          // PORTFOLIO_V.2.0.25
        </div>
        
        <div className="mb-6">
            <GlitchText text="DIGITAL" size="xl" className="block leading-[0.85]" />
            <div className="pl-4 md:pl-24">
                <GlitchText text="REALITY" size="xl" className="block leading-[0.85] text-stroke text-transparent" />
            </div>
            <GlitchText text="ARCHITECT" size="xl" className="block leading-[0.85]" />
        </div>

        <p className="max-w-xl text-muted-foreground font-mono text-sm md:text-lg mb-10 leading-relaxed">
          Creating immersive web experiences at the intersection of design and technology. 
          Specializing in 3D interactions, motion graphics, and brutalist interfaces.
        </p>

        <div className="flex flex-wrap gap-6">
            <Link href="/work">
                <a className="group relative px-8 py-4 bg-primary text-black font-bold tracking-wider overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                        VIEW PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>
            </Link>
            
            <Link href="/about">
                <a className="px-8 py-4 border border-white/20 hover:border-primary hover:text-primary transition-colors font-mono uppercase tracking-widest text-sm flex items-center">
                    Bio_Data
                </a>
            </Link>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-20 hidden md:block opacity-20 font-mono text-xs w-64 text-right">
        <div className="border-t border-white mb-2" />
        <p>COORDS: 34.0522° N, 118.2437° W</p>
        <p>STATUS: ONLINE</p>
        <p>SYSTEM: OPTIMAL</p>
      </div>
    </div>
  );
}
