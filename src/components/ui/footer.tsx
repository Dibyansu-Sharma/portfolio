import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted mt-12 py-6 text-center">
      <p>
        <Mail className="inline mr-2" />: dibyansusharma1501@gmail.com | 
        <Github className="inline mx-2" />: @Dibyansu-Sharma | 
        <Linkedin className="inline ml-2" />: /in/dibyansu-sharma
      </p>
    </footer>
  );
};

export default Footer;
