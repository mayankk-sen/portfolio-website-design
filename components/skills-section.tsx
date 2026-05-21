"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const designSkills = [
  "UI Design", "UX Design", "Wireframing", "Prototyping", "User Flows",
  "Responsive Web Design", "Mobile App Design", "Dashboard Design",
  "Design Systems", "Component-Based Design", "Information Architecture",
  "Interaction Design", "Visual Design", "Motion Design", "UI Animation", "Micro-interactions"
]

const tools = [
  { name: "Figma", primary: true },
  { name: "FigJam", primary: false },
  { name: "Auto Layout", primary: false },
  { name: "Interactive Prototyping", primary: false },
  { name: "Smart Animate", primary: false },
  { name: "Responsive Design", primary: false },
  { name: "Framer (Basic)", primary: false },
  { name: "Lottie (Basic)", primary: false },
]

const collaborationSkills = [
  "Developer Handoff",
  "Cross-Functional Collaboration",
  "Requirement Analysis",
  "Iterative Design"
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Skills</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Tools & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Design Skills - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 glass rounded-3xl p-8"
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Design Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {designSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(110, 69, 255, 0.2)" }}
                  className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground/90 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Tools
            </h3>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-between group"
                >
                  <span className={`text-sm ${tool.primary ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    {tool.name}
                  </span>
                  {tool.primary && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      Primary
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Collaboration Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Collaboration
            </h3>
            <div className="space-y-4">
              {collaborationSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-foreground/90">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software Proficiency Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 glass rounded-3xl p-8"
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Software Proficiency
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Figma", level : 90, label:"Advanced" },
                { name: "Responsive UI", level: 88, label: "Advanced" },
                { name: "Design Systems", level : 85, label: "Advanced" },
                { name: "Motion UI", level : 70, label: "Intermediate" },
              ].map((software, index) => (
                <motion.div
                  key={software.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-secondary"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 220" }}
                        animate={isInView ? { strokeDasharray: `${software.level * 2.2} 220` } : {}}
                        transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6E45FF" />
                          <stop offset="100%" stopColor="#C89B3C" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[9px] font-semibold text-center leading-tight"> {software.label} </span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{software.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
