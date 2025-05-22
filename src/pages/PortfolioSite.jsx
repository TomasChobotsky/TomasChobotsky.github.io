import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Abstract animated background shapes
 * ---------------------------------------------------------------------------
 */
function AbstractBackground() {
  const shapes = [
    { size: "h-72 w-72", gradient: "from-cyan-500/30 to-emerald-500/30", x: "-left-20", y: "top-10", delay: 0 },
    { size: "h-96 w-96", gradient: "from-fuchsia-500/20 to-indigo-500/20", x: "right-0", y: "top-60", delay: 1 },
    { size: "h-56 w-56", gradient: "from-yellow-400/20 to-rose-500/20", x: "left-1/2 -translate-x-1/2", y: "bottom-10", delay: 2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: s.delay, duration: 1.6, type: "spring" }}
          className={`absolute ${s.x} ${s.y} ${s.size} rounded-full bg-gradient-to-br ${s.gradient} blur-3xl`}
        />
      ))}
    </div>
  );
}

/**
 * Hero section: name, headline and call‑to‑action
 * ---------------------------------------------------------------------------
 */
function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-6 text-center">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
        Tomáš Chobotský
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="max-w-xl text-lg md:text-xl text-slate-200">
        Cybersecurity student · Full‑stack web designer & developer · Freelancer
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button asChild variant="secondary" size="lg" className="backdrop-blur">
          <a href="#contact">Let’s build something</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-slate-500/60 backdrop-blur">
          <a href="https://github.com/TomasChobotsky" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" /> GitHub
          </a>
        </Button>
      </motion.div>
    </section>
  );
}

/**
 * About section
 */
function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl text-center space-y-4">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-slate-300">
        I’m currently pursuing a degree in <strong>Cybersecurity</strong> at the
        <em> University of Hradec Králové, Faculty of Informatics & Management</em>.
        Designing bold, performant, and accessible web experiences is my passion—and
        I love turning complex ideas into elegant code.
      </p>
    </motion.section>
  );
}

/**
 * Experience timeline
 */
function Experience() {
  const jobs = [
    {
      role: "Freelance Web Designer & Full‑stack Developer",
      time: "2025 — Present",
      desc: "Designing and building performant web apps & sites for clients across Europe with a focus on security and UX.",
    },
    {
      role: "Customer Support · XFuture",
      time: "July 2024 - Present",
      desc: "As a Customer Support Specialist at XFuture, I handle a range of technical responsibilities, including computer servicing, IT support, " +
            "and managing MicroTik switches and routers. I also oversee network monitoring systems with Zabbix, ensuring smooth and secure network operations. "+
            "This role has allowed me to strengthen my skills in network management and problem-solving in a dynamic IT environment.",
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-4xl">
      <h2 className="mb-10 text-center text-3xl font-bold">Experience</h2>
      <ul className="space-y-6 border-l border-slate-700/60 pl-8">
        {jobs.map((job, i) => (
          <motion.li
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative">
            <span className="absolute -left-4 top-1.5 h-3 w-3 rounded-full bg-emerald-500" />
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <time className="text-sm text-slate-400">{job.time}</time>
            <p className="mt-2 text-slate-300">{job.desc}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Projects showcase (pulls directly from GitHub profile via API if desired)
 * For demo purposes, static items are used. Replace or extend as needed.
 */
function Projects() {
  const projects = [
    {
      title: "XFuture Company Site",
      link: "http://dpt.cz/XF/index.html", // placeholder
      desc: "Informational company website for XFuture, built from scratch with a lightweight tech stack and optimised for fast load-times.",
      stars: 0,
    },
    {
      title: "Personal Portfolio (this site)",
      link: "#", // self‑reference
      desc: "Built with React, TailwindCSS, shadcn/ui & Framer Motion.",
      stars: 0,
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-5xl">
      <h2 className="mb-10 text-center text-3xl font-bold">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group">
            <Card className="h-full cursor-pointer bg-slate-800/60 backdrop-blur transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:underline">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed min-h-[5rem]">{p.desc}</p>
                {p.stars > 0 && (
                  <div className="flex items-center gap-1 text-amber-400">
                    ★ {p.stars}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/**
 * Contact section with social links
 */
function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-xl text-center space-y-6">
      <h2 className="text-3xl font-bold">Let’s connect</h2>
      <p className="text-slate-300">
        Need an accessible, high‑performance website or an extra pair of security‑minded engineering hands? Drop me a line!
      </p>
      <div className="flex flex-col justify-center sm:flex-row gap-4 w-full sm:w-auto">
        <Button asChild variant="secondary" size="lg">
          <a href="mailto:tomas.chobotsky1@gmail.com">
            <Mail className="mr-2 h-5 w-5" /> Email
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-slate-500/60">
          <a href="https://linkedin.com/in/tomas-chobotsky/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </a>
        </Button>
      </div>
    </motion.section>
  );
}

/**
 * Main export
 */
export default function PortfolioSite() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-950 via-black to-slate-900 text-white selection:bg-emerald-700/80 selection:text-white">
      <AbstractBackground />
      <main className="relative z-10 flex flex-col items-center px-4 py-20 gap-32 sm:gap-40">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}