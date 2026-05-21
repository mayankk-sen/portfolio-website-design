"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, ArrowUp } from "lucide-react"

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">MAYANK</span>
              <span className="text-foreground"> SEN</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mayank Sen. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:contact@mayanksen.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="text-muted-foreground hover:text-foreground" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mayanksen"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-muted-foreground hover:text-foreground" />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:glow-purple transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs text-muted-foreground">Designed with passion</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
        </div>
      </div>
    </footer>
  )
}
