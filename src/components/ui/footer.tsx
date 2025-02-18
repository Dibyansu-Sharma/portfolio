import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-muted py-6 text-center">
      <div className="container mx-auto flex flex-col items-center gap-3 text-sm md:flex-row md:justify-center">
        <a
          href="mailto:dibyansusharma1501@gmail.com"
          className="flex items-center gap-2 hover:underline"
          aria-label="Email Dibyansu Sharma"
        >
          <Mail className="w-5 h-5" />
          dibyansusharma1501@gmail.com
        </a>

        <span className="hidden md:inline">|</span>

        <a
          href="https://github.com/Dibyansu-Sharma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
          @Dibyansu-Sharma
        </a>

        <span className="hidden md:inline">|</span>

        <a
          href="https://www.linkedin.com/in/dibyansu-sharma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
          /in/dibyansu-sharma
        </a>
      </div>
    </footer>
  );
};

export default Footer;
