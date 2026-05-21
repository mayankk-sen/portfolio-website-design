"use client"

import { motion } from "framer-motion"
import { ArrowDown, ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(110,69,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(110,69,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-balance"
        >
          Designing scalable{" "}
          <span className="gradient-text">digital experiences</span>
          <br className="hidden sm:block" />
          for web and mobile products.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty"
        >
          UI/UX Designer with experience designing responsive dashboards, mobile apps, 
          SaaS products, fintech platforms, LMS systems, and operational workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:glow-purple transition-all"
          >
            View Projects
            <ExternalLink size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass text-foreground font-medium hover:border-primary/50 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Floating UI Mockups */}
        <div className="mt-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Main Dashboard Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-muted-foreground">Dashboard Preview</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-32 rounded-xl bg-secondary/50 flex items-center justify-center">
                  <div className="w-full h-full p-4">
                    <div className="h-2 w-1/3 bg-primary/30 rounded mb-2" />
                    <div className="h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded" />
                  </div>
                </div>
                <div className="h-32 rounded-xl bg-secondary/50 p-4">
                  <div className="h-2 w-2/3 bg-accent/30 rounded mb-2" />
                  <div className="h-20 bg-gradient-to-b from-accent/10 to-transparent rounded" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 rounded-lg bg-secondary/30 p-3">
                    <div className="h-2 w-1/2 bg-muted-foreground/20 rounded mb-2" />
                    <div className="h-8 w-full bg-primary/10 rounded" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Mobile Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1 },
                x: { duration: 0.8, delay: 1 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute -right-8 top-1/4 w-32 glass rounded-2xl p-3 shadow-xl hidden md:block"
            >
              <div className="h-4 w-8 bg-muted rounded-full mx-auto mb-3" />
              <div className="space-y-2">
                <div className="h-2 w-full bg-primary/20 rounded" />
                <div className="h-2 w-3/4 bg-muted-foreground/20 rounded" />
                <div className="h-8 w-full bg-accent/20 rounded mt-3" />
              </div>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.2 },
                x: { duration: 0.8, delay: 1.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
              }}
              className="absolute -left-4 bottom-1/4 w-40 glass rounded-xl p-4 shadow-xl hidden md:block"
            >
              <div className="text-xs text-muted-foreground mb-2">Analytics</div>
              <div className="text-2xl font-bold gradient-text">+127%</div>
              <div className="h-1 w-full bg-secondary rounded-full mt-2">
                <div className="h-1 w-3/4 bg-primary rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
