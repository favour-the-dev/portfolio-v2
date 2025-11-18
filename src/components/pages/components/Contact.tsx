import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const subject = encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:favourto91@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      setSubmitStatus({
        type: "success",
        message: "Opening your email client. Thanks for reaching out!",
      });
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus({ type: null, message: "" });
      }, 3000);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try emailing directly.",
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "favourto91@gmail.com",
      link: "mailto:favourto91@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+2347010752695",
      link: "https://wa.me/+2347010752695",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/favour-the-dev",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/favour-odili-8b5439233/",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      link: "https://x.com/Favytech10",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center relative my-10 py-6"
    >
      <div className="max-container flex flex-col gap-8">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="uppercase w-fit relative text-secondary-accent 
          dark:text-secondary-accent-dark font-medium font-headers text-base md:text-lg after:absolute after:bottom-0.5 
          after:right-0 after:z-[-1]
          after:w-[90%] after:h-2 after:bg-secondary-accent/30 dark:after:bg-secondary-accent-dark/30"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-primary dark:text-text-primary-dark font-body text-3xl md:text-4xl font-bold text-center"
          >
            Let's Work Together
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text-secondary dark:text-text-secondary-dark font-body 
          text-sm md:text-base max-w-[90%] md:max-w-[70%] text-center leading-normal"
          >
            Have a project in mind or just want to chat? Feel free to reach out
            through any of the channels below.
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h4 className="font-headers font-bold text-xl md:text-2xl text-text-primary dark:text-text-primary-dark">
                Contact Information
              </h4>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 bg-background/50 dark:bg-background-dark/50 
                  backdrop-blur-sm border border-secondary-accent/20 hover:border-secondary-accent/60
                  dark:border-secondary-accent-dark/20 dark:hover:border-secondary-accent-dark/60
                  rounded-xl transition-all duration-300 group"
                >
                  <div
                    className="p-3 bg-secondary-accent/10 dark:bg-secondary-accent-dark/10 
                    text-secondary-accent dark:text-secondary-accent-dark rounded-lg
                    group-hover:bg-secondary-accent/20 dark:group-hover:bg-secondary-accent-dark/20
                    transition-all duration-300"
                  >
                    {info.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-text-secondary dark:text-text-secondary-dark">
                      {info.label}
                    </span>
                    <span className="font-medium text-text-primary dark:text-text-primary-dark">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4 mt-4">
              <h4 className="font-headers font-bold text-xl md:text-2xl text-text-primary dark:text-text-primary-dark">
                Connect With Me
              </h4>
              <div className="flex gap-4">
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
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-background/50 dark:bg-background-dark/50 
                    backdrop-blur-sm border border-secondary-accent/20 hover:border-secondary-accent/60
                    dark:border-secondary-accent-dark/20 dark:hover:border-secondary-accent-dark/60
                    text-secondary-accent dark:text-secondary-accent-dark
                    rounded-xl transition-all duration-300 hover:shadow-lg
                    hover:shadow-secondary-accent/20 dark:hover:shadow-secondary-accent-dark/20"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 p-6 bg-background/50 dark:bg-background-dark/50 
            backdrop-blur-sm border border-secondary-accent/20
            dark:border-secondary-accent-dark/20 rounded-2xl"
          >
            <h4 className="font-headers font-bold text-xl md:text-2xl text-text-primary dark:text-text-primary-dark">
              Send a Message
            </h4>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <label
                htmlFor="name"
                className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-background dark:bg-background-dark 
                border border-secondary-accent/30 dark:border-secondary-accent-dark/30
                focus:border-secondary-accent dark:focus:border-secondary-accent-dark
                rounded-lg text-text-primary dark:text-text-primary-dark
                outline-none transition-all duration-300"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              <label
                htmlFor="email"
                className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-background dark:bg-background-dark 
                border border-secondary-accent/30 dark:border-secondary-accent-dark/30
                focus:border-secondary-accent dark:focus:border-secondary-accent-dark
                rounded-lg text-text-primary dark:text-text-primary-dark
                outline-none transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-2"
            >
              <label
                htmlFor="message"
                className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="px-4 py-3 bg-background dark:bg-background-dark 
                border border-secondary-accent/30 dark:border-secondary-accent-dark/30
                focus:border-secondary-accent dark:focus:border-secondary-accent-dark
                rounded-lg text-text-primary dark:text-text-primary-dark
                outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`p-4 rounded-lg text-sm font-medium ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30"
                    : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{
                scale: isSubmitting ? 1 : 1.02,
                y: isSubmitting ? 0 : -2,
              }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="mt-2 px-6 py-3 bg-secondary-accent dark:bg-secondary-accent-dark 
              text-white font-medium rounded-lg flex items-center justify-center gap-2
              shadow-lg hover:shadow-xl hover:shadow-secondary-accent/20 
              dark:hover:shadow-secondary-accent-dark/20 transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
