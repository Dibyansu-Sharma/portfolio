import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Calendar, MapPin, Award, Book, Code } from "lucide-react";

const ResumeComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <CardTitle className="text-3xl font-bold">DIBYANSU SHARMA</CardTitle>
              <p className="text-lg text-muted-foreground mt-1">Software Development Engineer</p>
            </div>
            <div className="mt-4 md:mt-0 space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:sharmadibyansu1501@gmail.com" className="text-sm hover:underline">
                  sharmadibyansu1501@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a href="https://linkedin.com/in/dibyansu-sharma/" target="_blank" rel="noreferrer" className="text-sm hover:underline">
                  linkedin.com/in/dibyansu-sharma/
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <a href="https://leetcode.com/u/dibyansu/" target="_blank" rel="noreferrer" className="text-sm hover:underline">
                  leetcode.com/u/dibyansu/
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="mt-2">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Summary Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">SUMMARY</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Full-Stack Software Development Engineer with 1 year of experience in Web.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>MERN stack development with proven experience in building scalable applications.</li>
            <li>Specialized in API development, SDK implementation, and blockchain integration.</li>
            <li>Hands-on experience with AWS IAM, Vault and Docker</li>
            <li>Successfully delivered 10 platform releases and 8 microservices across 4 blockchain networks.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">EXPERIENCE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-lg font-medium">Software Development Engineer</h3>
              <div className="flex items-center mt-1 md:mt-0">
                <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">07/2024 - 02/2025</span>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <span className="font-medium">CyberNext</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Mohali, India</span>
            </div>
            <p className="text-sm italic mb-2">A company focused on blockchain development and integration.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Led a team of 5 developers to design an SDK for managing wallet operations and smart contract interactions, improving UI and CLI performance by 30-40%</li>
              <li>Played a key role in delivering multiple successful demos under tight deadlines, responsible for rapid development and quality assurance.</li>
              <li>Researched and implemented cross-chain communication on the Optimism network, enabling seamless interoperability across blockchain ecosystems.</li>
              <li>Developed super-class and multi-token integration for DLPC implementation, reducing duplication and enabling easy extension.</li>
              <li>Created Observable framework-based UI for direct SDK interaction, streamlining development and testing processes.</li>
              <li>Developed command-line interfaces for smart contract interactions, facilitating rapid iteration and debugging.</li>
              <li>Automated data generation workflows, resulting in a 60% reduction in development and testing time.</li>
              <li>Contributed to developer documentation, improving onboarding and reducing the learning curve.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-lg font-medium">Software Development Engineer Intern</h3>
              <div className="flex items-center mt-1 md:mt-0">
                <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">07/2023 - 06/2024</span>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <span className="font-medium">CyberNext</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Mohali, India</span>
            </div>
            <p className="text-sm italic mb-2">An internship focused on software development and blockchain technology.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Designed multi-tenant architecture with Payload CMS, enhancing data management and user hierarchies.</li>
              <li>Developed REST APIs with Express.js and built React components for enhanced blockchain transaction functionality.</li>
              <li>Improved database search performance in Payload CMS with indexing, reducing query execution time significantly.</li>
              <li>Added Swagger documentation for API endpoints, reducing testing effort by 30-40%.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">EDUCATION</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-lg font-medium">Bachelor&apos;s Degree</h3>
              <div className="flex items-center mt-1 md:mt-0">
                <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">08/2020 - 05/2024</span>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <span className="font-medium">Chandigarh University</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Mohali, India</span>
            </div>
            <div className="text-sm mb-2">GPA: 8.3/10</div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-lg font-medium">Graduation</h3>
              <div className="flex items-center mt-1 md:mt-0">
                <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">04/2019 - 05/2020</span>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <span className="font-medium">Amrita Vidyalayam</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Kolkata, India</span>
            </div>
            <div className="text-sm mb-2">GPA: 8.5/10</div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">SKILLS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>MERN</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Golang</Badge>
              <Badge>MongoDB</Badge>
              <Badge>NodeJs</Badge>
              <Badge>JavaScript</Badge>
              <Badge>Version Control</Badge>
              <Badge>DSA</Badge>
              <Badge>C</Badge>
              <Badge>OOPS</Badge>
              <Badge>Jira</Badge>
              <Badge>Bitbucket</Badge>
              <Badge>Jest</Badge>
              <Badge>Mocha</Badge>
              <Badge>API Development</Badge>
              <Badge>AWS</Badge>
              <Badge>Docker</Badge>
              <Badge>Python</Badge>
              <Badge>Shell Scripting</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">PROJECTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-lg font-medium">React Based Training</h3>
                <div className="flex items-center mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground">06/2022 - 07/2022</span>
                </div>
              </div>
              <p className="text-sm italic mb-2">A React-based training project.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Developed an interactive Tic-Tac-Toe game using React, implementing components, props, states, and lifecycle events.</li>
                <li>Built a Box Office app with API integration and dynamic pages, enhancing user experience.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-lg font-medium">Machine Learning Based (Python)</h3>
                <div className="flex items-center mt-1 md:mt-0">
                  <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground">01/2022 - 12/2022</span>
                </div>
              </div>
              <p className="text-sm italic mb-2">A project for analyzing WhatsApp chat data.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Developed a WhatsApp Chat Analyzer project in Python, utilizing Pandas for data manipulation and NLTK for text processing.</li>
                <li>Visualized data using Matplotlib and Seaborn, enhancing the presentation of insights.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Achievements Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">KEY ACHIEVEMENTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center mb-1">
                <Award className="h-4 w-4 text-muted-foreground mr-2" />
                <h3 className="text-base font-medium">TCS Codevita 2022</h3>
              </div>
              <p className="text-sm pl-6">Qualified Round 2 finishing with Global Rank of 729 College Rank 4</p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <Award className="h-4 w-4 text-muted-foreground mr-2" />
                <h3 className="text-base font-medium">Codekaze Coding Ninjas Final Round 2022</h3>
              </div>
              <p className="text-sm pl-6">Qualified In Final Round Finishing with NR - 6900 College Rank - 143</p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <Code className="h-4 w-4 text-muted-foreground mr-2" />
                <h3 className="text-base font-medium">Leetcode</h3>
              </div>
              <p className="text-sm pl-6">Solved 800 problems, 50 discussion</p>
            </div>
          </CardContent>
        </Card>

        {/* Certifications Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">CERTIFICATIONS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center mb-1">
                <Book className="h-4 w-4 text-muted-foreground mr-2" />
                <h3 className="text-base font-medium">Software Testing IIT Madras</h3>
              </div>
              <p className="text-sm pl-6">Top 2% in Software Testing 2022 from NPTEL.</p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <Book className="h-4 w-4 text-muted-foreground mr-2" />
                <h3 className="text-base font-medium">Advanced Graph Theory IIT Kanpur</h3>
              </div>
              <p className="text-sm pl-6">Topper in Advanced Graph Theory 2021 from NPTEL.</p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <Book className="h-4 w-4 text-muted-foreground mr-2" />
                <h3 className="text-base font-medium">Programming In C IIT Kharagpur</h3>
              </div>
              <p className="text-sm pl-6">Completed course in Programming In C 2021 at NPTEL.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeComponent;