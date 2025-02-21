"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResumeComponent from "@/components/ui/resume";
import Footer from "@/components/ui/footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Contact from "@/components/ui/contact";
import Game from "@/components/game";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between w-full">
        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              {resolvedTheme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Navigation (Hidden on Small Screens) */}
        <nav className="hidden md:flex space-x-4">
          {["about", "resume", "projects", "contact"].map((section) => (
            <Button
              key={section}
              variant={activeSection === section ? "default" : "ghost"}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu (Visible Only on Small Screens) */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                ☰ {/* Mobile menu icon */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {["about", "resume", "projects", "contact"].map((section) => (
                <DropdownMenuItem
                  key={section}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeSection === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-12 text-center"
            >
              {/* Profile Picture */}
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="/profile.jpeg"
                  width={128}
                  height={128}
                  alt="Dibyansu"
                  unoptimized
                />
              </Avatar>

              {/* Name & Role */}
              <h2 className="text-3xl font-bold mb-2">Dibyansu Sharma</h2>
              <p className="text-xl text-muted-foreground mb-4">
                Full Stack Developer
              </p>

              {/* Professional Bio */}
              <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                A <strong>Full-Stack Software Developer</strong> with{" "}
                <strong>1.7 years of experience </strong>
                in web development, specializing in the{" "}
                <strong>
                  MERN stack, API development, SDK implementation, and
                  blockchain
                </strong>
                . I have hands-on experience with{" "}
                <strong>AWS and Docker</strong> and have successfully delivered{" "}
                <strong>10 platform releases</strong> and{" "}
                <strong>8 microservices</strong> across{" "}
                <strong>4 blockchain networks</strong>. Passionate about
                building scalable and efficient applications, I thrive on
                solving complex problems and continuously exploring new
                technologies.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mt-6 mb-6">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Solidity",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-white bg-black dark:bg-muted rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-6">
                <a
                  href="https://github.com/Dibyansu-Sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/dibyansu-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a
                  href="mailto:dibyansusharma1501@gmail.com"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Mail className="w-5 h-5" /> Email
                </a>
              </div>

              {/* CTA Button */}
              <Button onClick={() => setActiveSection("resume")}>
                View Resume
              </Button>
            </motion.section>
          )}

          {activeSection === "resume" && (
            <motion.section
              key="resume"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ResumeComponent />
            </motion.section>
          )}

          {activeSection === "projects" && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Projects</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((project) =>
                  project === 1 ? (
                    <Card
                      key={project}
                      className="flex flex-col items-center p-4"
                    >
                      <h4 className="text-lg font-semibold">Tic-Tac-Toe</h4>
                      <Game />
                    </Card>
                  ) : (
                    <Card key={project}>
                      <CardHeader>
                        <CardTitle>Project {project}</CardTitle>
                        <CardDescription>
                          A brief description of the project
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                          alt={`Project ${project}`}
                          className="w-full h-40 object-cover rounded-md"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Project
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                )}
              </div>
            </motion.section>
          )}

          {activeSection === "contact" && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-12 py-6 text-center">
        <Footer />
      </footer>
    </div>
  );
}
