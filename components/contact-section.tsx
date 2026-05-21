"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, ArrowUpRight, Sparkles } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Contact Card */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance"
              >
                {"Let's build modern"}
                <br />
                <span className="gradient-text">digital experiences.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground max-w-xl mx-auto mb-10"
              >
                {"I'm currently open to new opportunities. Whether you have a project in mind or just want to chat about design, feel free to reach out."}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="mailto:contact@mayanksen.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-3 hover:glow-purple transition-all"
                >
                  <Mail size={20} />
                  Send an Email
                  <ArrowUpRight size={16} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/mayanksen"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full glass text-foreground font-medium flex items-center justify-center gap-3 hover:border-primary/50 transition-all"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                  <ArrowUpRight size={16} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
