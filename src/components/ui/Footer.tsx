import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      link: "https://twitter.com/yourusername",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      link: "mailto:your.email@example.com",
    },
  ];

  return (
    <footer className="w-full bg-background/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-secondary-accent/20 dark:border-secondary-accent-dark/20">
      <div className="max-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-headers font-bold text-2xl text-secondary-accent dark:text-secondary-accent-dark">
              Favour Odili
            </h3>
            <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed">
              Full-stack developer crafting exceptional digital experiences with
              modern web technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-headers font-bold text-lg text-text-primary dark:text-text-primary-dark">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="text-text-secondary dark:text-text-secondary-dark text-sm
                  hover:text-secondary-accent dark:hover:text-secondary-accent-dark
                  transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-headers font-bold text-lg text-text-primary dark:text-text-primary-dark">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-background dark:bg-background-dark 
                  border border-secondary-accent/20 hover:border-secondary-accent/60
                  dark:border-secondary-accent-dark/20 dark:hover:border-secondary-accent-dark/60
                  text-secondary-accent dark:text-secondary-accent-dark
                  rounded-lg transition-all duration-300 hover:shadow-lg
                  hover:shadow-secondary-accent/20 dark:hover:shadow-secondary-accent-dark/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-secondary-accent/10 dark:border-secondary-accent-dark/10
          flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p className="text-text-secondary dark:text-text-secondary-dark text-sm flex items-center gap-2">
            © {currentYear} Favour Odili. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            and lots of coffee ☕
          </motion.p>
          <motion.p className="text-text-secondary dark:text-text-secondary-dark text-sm">
            Built with React, TypeScript & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
