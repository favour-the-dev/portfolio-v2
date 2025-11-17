import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
function Projects() {
  interface projectData {
    title: string;
    description: string;
    link: string;
    imageURL: string;
    githubURL?: string;
    stack: string[];
  }
  const projects: projectData[] = [
    {
      title: "DYB Logistics",
      description:
        "DYB Logistics management and delivery service platform for businesses and individuals",
      link: "https://dyblogistics.vercel.app/",
      imageURL: "/projects/dyb.png",
      githubURL: "",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Abamade",
      description:
        "Abamade company website that connects clients and businesses to bulk branding opportunites",
      link: "https://abamade.com.ng/",
      imageURL: "/projects/abamade.png",
      githubURL: "",
      stack: ["Next.js", "Tailwind CSS", "TypeScript", "Resend"],
    },
    {
      title: "CodeJayXchange",
      description:
        "Cyptocurrency and Fiat Exchange rates platform that displays real-time data",
      link: "https://codejayxchange.vercel.app/",
      imageURL: "/projects/codejay.png",
      githubURL: "",
      stack: ["Next.js", "TypeScript", "Coinranking API", "framer-motion"],
    },
    {
      title: "Hareem Istanbul Ghana",
      description:
        "E-commerce store for one of the biggest luxury perfume brands in Ghana.",
      link: "https://hareemdream-gh.vercel.app/",
      imageURL: "/projects/hareemdream.png",
      githubURL: "",
      stack: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "framer-motion",
        "zustand",
      ],
    },
  ];
  return (
    <section
      id="projects"
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
          dark:text-secondary-accent-dark font-medium font-headers text-base md:text-lg after:absolute after:bottom-[2px] 
          after:right-0 after:z-[-1]
          after:w-[90%] after:h-[8px] after:bg-secondary-accent/30 dark:after:bg-secondary-accent-dark/30"
          >
            My Projects
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-primary dark:text-text-primary-dark font-body text-4xl 
            md:text-5xl font-bold text-center"
          >
            Featured Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text-secondary dark:text-text-secondary-dark font-body 
          text-sm md:text-base max-w-[90%] md:max-w-[70%] text-center leading-normal"
          >
            A showcase of my recent work, from logistics platforms to e-commerce
            solutions, built with modern technologies.
          </motion.p>
        </motion.header>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-background/60 dark:bg-background-dark/60 backdrop-blur-md
              border border-secondary-accent/20 hover:border-secondary-accent/60
              dark:border-secondary-accent-dark/20 dark:hover:border-secondary-accent-dark/60
              rounded-2xl overflow-hidden transition-all duration-500 flex flex-col
              shadow-lg hover:shadow-2xl hover:shadow-secondary-accent/10 
              dark:hover:shadow-secondary-accent-dark/10"
            >
              {/* Project Image with Overlay */}
              <motion.div
                className="relative w-full h-[240px] md:h-[280px] overflow-hidden 
              bg-linear-to-br from-secondary-accent/10 to-primary-accent/10 
              dark:from-secondary-accent-dark/10 dark:to-primary-accent-dark/10"
              >
                <motion.img
                  src={project.imageURL}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700
                  group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-linear-to-t from-background/60 via-background/40 to-transparent
                  dark:from-background-dark/90 dark:via-background-dark/50 opacity-0 group-hover:opacity-100
                  flex items-end justify-center pb-6 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                >
                  <div
                    className="flex gap-3 translate-y-4 group-hover:translate-y-0 
                    opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-secondary-accent dark:bg-secondary-accent-dark 
                      text-white font-medium text-sm rounded-lg flex items-center gap-2
                      shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div className="p-6 flex flex-col gap-4 grow">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col gap-2"
                >
                  <motion.h4
                    className="font-headers font-bold text-xl md:text-2xl text-text-primary dark:text-text-primary-dark
                  group-hover:text-secondary-accent dark:group-hover:text-secondary-accent-dark transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h4>

                  <motion.p
                    className="text-text-secondary dark:text-text-secondary-dark 
                  text-sm md:text-base leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-secondary-accent/10 dark:border-secondary-accent-dark/10">
                  {project.stack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 text-xs font-semibold 
                      bg-secondary-accent/10 dark:bg-secondary-accent-dark/10 
                      text-secondary-accent dark:text-secondary-accent-dark 
                      rounded-full border border-secondary-accent/30 
                      dark:border-secondary-accent-dark/30
                      hover:bg-secondary-accent/20 dark:hover:bg-secondary-accent-dark/20
                      hover:border-secondary-accent/50 dark:hover:border-secondary-accent-dark/50
                      transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
