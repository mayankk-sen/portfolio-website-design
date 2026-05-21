"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, PenTool, Palette, Play, TestTube, Send } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Research",
    description: "User interviews, competitive analysis, and requirement gathering",
    color: "from-primary to-primary/50",
  },
  {
    icon: PenTool,
    title: "Wireframe",
    description: "Low-fidelity sketches and information architecture planning",
    color: "from-blue-500 to-blue-500/50",
  },
  {
    icon: Palette,
    title: "Design",
    description: "High-fidelity UI design with attention to detail and consistency",
    color: "from-accent to-accent/50",
  },
  {
    icon: Play,
    title: "Prototype",
    description: "Interactive prototypes with micro-interactions and animations",
    color: "from-green-500 to-green-500/50",
  },
  {
    icon: TestTube,
    title: "Test",
    description: "Usability testing and iterative improvements based on feedback",
    color: "from-pink-500 to-pink-500/50",
  },
  {
    icon: Send,
    title: "Handoff",
    description: "Developer-ready specs, assets, and documentation delivery",
    color: "from-purple-500 to-purple-500/50",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Process</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            My Design <span className="gradient-text">Workflow</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A structured approach to creating user-centered designs that balance aesthetics with functionality.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-6 h-full flex flex-col items-center text-center group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mt-2`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-10 blur-xl`} />
                  </div>
                </motion.div>

                {/* Arrow (only on large screens, not on last item) */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-10"
                  >
                    <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-primary/50" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
