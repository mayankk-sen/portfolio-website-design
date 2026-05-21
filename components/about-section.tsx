"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Sparkles } from "lucide-react"

const highlights = [
"UI/UX Design",
"Mobile App Design",
"Dashboard Design",
"Wireframing",
"Design Systems",
"Responsive Design",
"Figma",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-1 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">About Me</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[64px] font-bold leading-[1.05] tracking-tight max-w-full">
              Designing scalable and user-focused{" "}
              <span className="gradient-text">digital experiences</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              UI/UX Designer with experience designing responsive web and mobile applications across EdTech, Finance, Real Estate, and Event Management domains. Skilled in creating user flows, dashboard systems, mobile-first interfaces, design systems, and developer-friendly UI using Figma.
            </p>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">UI/UX Designer</h3>
                  <p className="text-sm text-accent">HackerKernel</p>
                  <p className="text-sm text-muted-foreground mt-1">Apr 2025 – May 2026</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Core Expertise
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {highlights.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "1+", label: "Years Exp" },
                { value: "6+", label: "Projects" },
                { value: "4+", label: "Domains" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
