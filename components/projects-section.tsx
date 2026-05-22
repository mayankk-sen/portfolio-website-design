"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Layers, Smartphone, Wallet, Building, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "LMS Platform",
    type: "Web Application",
    image: "/My projects/Hero Section.png",
    description:
      "Designed responsive learning dashboards and workflows for students, tutors, and parents including course management, academic tracking, learning paths, and multi-role user experiences.",
    highlights: [
      "Dashboard Design",
      "Learning Management",
      "Responsive UI",
      "Design Systems",

    ],
    icon: Layers,
    gradient: "from-primary/20 to-primary/5",
    accentColor: "text-primary",
  },

  {
    title: "Show Alerts",
    type: "Mobile Event Application",
    image: "/My projects/show alerts.jpg",
    description:
      "Designed a concert alert mobile app with Spotify integration, personalized artist alerts, ticket booking flows, countdown systems, and event-based group chat experiences.",
    highlights: [
      "Mobile App Design",
      "Event Discovery",
      "Ticket Flow",
      "Social Features",
      "Real-time Alerts"
    ],
    icon: Smartphone,
    gradient: "from-accent/20 to-accent/5",
    accentColor: "text-accent",

  },

  {
    title: "D'Golden Vault",
    type: "Savings Web Platform",
    image: "/My projects/golden vault.jpg",
    description:
      "Designed a savings goal tracking platform with dashboard analytics, rewards systems, Plaid-connected bank flows, subscription management, and gamified saving experiences.",
    highlights: [
      "Fintech Dashboard",
      "Goal Tracking",
      "Plaid Integration",
      "Rewards System",
      "Subscription Flow"
    ],
    icon: Wallet,
    gradient: "from-green-500/20 to-green-500/5",
    accentColor: "text-green-500",
  },

  {
    title: "Real Estate Management",
    type: "Web & Mobile Platform",
    image: "/My projects/Facility Management.png",
    description:
      "Designed dashboards and operational workflows for tenants, property owners, facility managers, and technicians including complaint systems, service tracking, and task management flows.",
    highlights: [
      "Operational Dashboard",
      "Workflow Design",
      "Technician App",
      "Task Management",
      "Multi-role UX"
    ],
    icon: Building,
    gradient: "from-blue-500/20 to-blue-500/5",
    accentColor: "text-blue-500",
  },

  {
    title: "MAK Fashion",
    type: "Fashion E-Commerce Website",
    image: "/My projects/Mak Fashion.png",
    description:
      "Designed a modern fashion ecommerce experience with responsive product browsing, premium visual hierarchy, category exploration, and conversion-focused shopping flows.",
    highlights: [
      "E-commerce UI",
      "Responsive Design",
      "Visual Hierarchy",
      "Shopping Experience"
    ],
    icon: ShoppingBag,
    gradient: "from-pink-500/20 to-pink-500/5",
    accentColor: "text-pink-500",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Portfolio</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in dashboard design, mobile applications,
            and scalable design systems.
          </p>
        </motion.div>

        {/* Project Cards - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group glass rounded-3xl overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Project Preview Area */}
              <div className={`relative h-72 md:h-96 bg-gradient-to-br ${project.gradient} overflow-hidden`}>

                {project.title === "LMS Platform" ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 p-3 rounded-xl glass ${project.accentColor}`}>
                  <project.icon size={24} />
                </div>

                
               
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-medium uppercase tracking-wider ${project.accentColor}`}>
                      {project.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-xs text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
