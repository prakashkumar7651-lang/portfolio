import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Canvas } from "@react-three/fiber";
import { StarField } from "../3d/StarField";
import noiseTexture from "@assets/generated_images/dark_abstract_rave_texture_with_noise_and_neon_glitches.png";

interface RaveLayoutProps {
  children: React.ReactNode;
}

export function RaveLayout({ children }: RaveLayoutProps) {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/work", label: "WORK" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
      {/* Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
        style={{ backgroundImage: `url(${noiseTexture})`, backgroundSize: 'cover' }}
      />
      
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <StarField />
        </Canvas>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 p-6 md:p-12 flex justify-between items-center mix-blend-difference">
        <Link href="/">
          <a className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors font-sans">
            RAVE<span className="text-primary">.DEV</span>
          </a>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={`text-sm tracking-[0.2em] hover:text-primary transition-colors relative group ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle (Simplified) */}
        <div className="md:hidden text-primary">
            MENU
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10 pt-24 px-6 md:px-12 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 md:p-12 flex justify-between items-end border-t border-border/30 mt-auto backdrop-blur-sm">
        <div className="text-xs text-muted-foreground font-mono">
          © 2025 PORTFOLIO
        </div>
        <div className="flex space-x-4">
           {/* Socials placeholder */}
           <div className="w-8 h-8 border border-border flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">GH</div>
           <div className="w-8 h-8 border border-border flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">LI</div>
           <div className="w-8 h-8 border border-border flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">TW</div>
        </div>
      </footer>
    </div>
  );
}
