"use client"
import { useState } from "react";
import Image from 'next/image'
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ResumeComponent from "@/components/ui/resume";
import Footer from "@/components/ui/footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dibyansu Sharma</h1>
        <nav>
          <Button 
            variant={activeSection === "about" ? "default" : "ghost"} 
            className="mr-2"
            onClick={() => setActiveSection("about")}
          >
            About
          </Button>
          <Button 
            variant={activeSection === "resume" ? "default" : "ghost"} 
            className="mr-2"
            onClick={() => setActiveSection("resume")}
          >
            Resume
          </Button>
          <Button 
            variant={activeSection === "projects" ? "default" : "ghost"} 
            className="mr-2"
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </Button>
          <Button 
            variant={activeSection === "contact" ? "default" : "ghost"}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </Button>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {activeSection === "about" && (
          <section className="mb-12 text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <Image src="/profile.jpeg" width={128} height={128} alt="Dibyansu"/>
            </Avatar>
            <h2 className="text-3xl font-bold mb-2">Dibyansu Sharma</h2>
            <p className="text-xl text-muted-foreground mb-4">Full Stack Developer</p>
            <Button onClick={() => setActiveSection("resume")}>View Resume</Button>
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
                    <CardDescription>A brief description of the project</CardDescription>
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

        {activeSection === "contact" && (
          <section className="max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      className="w-full p-2 border rounded-md"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border rounded-md"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        )}
      </main>

      <footer className="bg-muted mt-12 py-6 text-center">
        <Footer />
      </footer>
    </div>
  );
}