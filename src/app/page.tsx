"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Contact from "@/components/ui/contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show a loading state until hydration completes
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              {resolvedTheme === "dark" ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
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
        <nav>
          {["about", "resume", "projects", "contact"].map((section) => (
            <Button
              key={section}
              variant={activeSection === section ? "default" : "ghost"}
              className="mr-2"
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {activeSection === "about" && (
          <section className="mb-12 text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <Image
                src="/profile.jpeg"
                width={128}
                height={128}
                alt="Dibyansu"
                unoptimized
              />
            </Avatar>
            <h2 className="text-3xl font-bold mb-2">Dibyansu Sharma</h2>
            <p className="text-xl text-muted-foreground mb-4">
              Full Stack Developer
            </p>
            <Button onClick={() => setActiveSection("resume")}>
              View Resume
            </Button>
          </section>
        )}

        {activeSection === "resume" && <ResumeComponent />}

        {activeSection === "projects" && (
          <>
            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
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
              ))}
            </div>
          </>
        )}

        {activeSection === "contact" && (<Contact/>)}
      </main>

      <footer className="bg-muted mt-12 py-6 text-center">
        <Footer />
      </footer>
    </div>
  );
}
