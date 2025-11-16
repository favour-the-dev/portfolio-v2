import { motion, type PanInfo } from "framer-motion";
import { useState, useEffect } from "react";
function Experience() {
  const experiences = [
    {
      company: "Seedgate Technologies",
      location: "Port-Harcourt, Nigeria",
      role: "Front-End Engineer",
      duration: "Aug 2025 - Present",
      responsibilities: [
        "Developed a scalable admin dashboard for Zamiri, a digital platform connecting skilled artisans and service providers with users, enabling real-time booking management, complaint resolution, and push notifications using Next.js, TypeScript, and Firebase Cloud Messaging (FCM).",
        "Collaborated with the product and backend teams to integrate secure authentication, dynamic analytics dashboards, and automated status updates, improving operational efficiency.",
        "Contributed to the company's internal product development initiatives, ensuring reusable component architecture and improved UI consistency across multiple client-facing applications.",
        "Participated in cross-border product coordination, adapting UX flows for regional compliance and enhancing user satisfaction scores in pilot testing.",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase FCM"],
      partTime: true,
    },
    {
      company: "DYB Africa",
      location: "Lagos, Nigeria",
      role: "Front-End Engineer",
      duration: "April 2025 - Nov 2025",
      responsibilities: [
        "Developed a robust Admin Dashboard for a restaurant management software using Next.js, TypeScript, and Tailwind CSS, enabling real-time tracking of user traffic, bookings, and revenue metrics and status update actions.",
        "Engineered dynamic data visualization components with Recharts and Zustand, empowering management to make data-backed operational decisions.",
        "Collaborated closely with the product and backend teams to design and launch a responsive logistics web platform, reducing operational errors.",
        "Optimized front-end performance and UI consistency across devices, achieving 95+ Core Web Vitals Scores and ensuring a smooth user experience.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "Zustand",
      ],
      partTime: false,
    },
    {
      company: "Abamade",
      location: "Aba, Nigeria",
      role: "Front-End Developer",
      duration: "Jan 2024 - Dec 2024",
      responsibilities: [
        "Engineered pixel-perfect, responsive interfaces across the three-part (Admin, Consumer, Vendor) e-commerce ecosystem using Vue.js, JavaScript, and Tailwind CSS, ensuring design accuracy and seamless UX consistency.",
        "Led the end-to-end development and ongoing maintenance of the Admin Dashboard, integrating secure authentication flows and role-based access control in line with OWASP standards.",
        "Delivered and deployed with the use of AWS the company's primary customer-facing website, optimized for performance and SEO (Core Web Vitals score: 98), increasing organic traffic visibility across multiple search engines.",
        "Collaborated cross-functionally with backend and design teams integrating RESTful APIs across the application.",
      ],
      technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "AWS"],
      partTime: false,
    },
    {
      company: "Lifestack Technologies",
      location: "Port-Harcourt, Nigeria",
      role: "Front-End Developer",
      duration: "Oct 2023 - Present",
      responsibilities: [
        "Collaborated with experienced engineers for Saveply, a fintech solution by Lifestack providing pension-saving alternatives for informal workers, building the landing page with Astro.js and user dashboard with React, ensuring accessibility and responsive design.",
        "Contributed to Raha, an e-commerce platform for grocery ordering and delivery, by developing the Admin Dashboard using React, TypeScript, and Tailwind CSS, enabling seamless order, users and product inventory management.",
      ],
      technologies: ["React", "Astro.js", "TypeScript", "Tailwind CSS"],
      partTime: true,
    },
  ];
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperienceIndex((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [experiences.length, currentExperienceIndex]);

  const handleRoadmapClick = (index: number) => {
    setCurrentExperienceIndex(index);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      setCurrentExperienceIndex((prev) =>
        prev === 0 ? experiences.length - 1 : prev - 1
      );
    } else if (info.offset.x < -threshold) {
      setCurrentExperienceIndex((prev) => (prev + 1) % experiences.length);
    }
  };

  return (
    <section
      id="experience"
      className="w-full flex flex-col items-center justify-center my-8 py-16"
    >
      <div className="max-container flex flex-col items-start md:flex-row justify-between gap-5">
        {/* roadmap */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col gap-2"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="uppercase w-fit relative text-secondary-accent 
          dark:text-secondary-accent-dark font-medium font-headers text-lg md:text-xl after:absolute after:bottom-[2.5px] 
          after:right-0 after:z-[-1]
          after:w-[90%] after:h-[10px] after:bg-secondary-accent/30 dark:after:bg-secondary-accent-dark/30"
          >
            My Experience
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-primary dark:text-text-primary-dark font-body text-4xl md:text-5xl font-bold"
          >
            Where I've Worked
          </motion.h3>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-secondary-accent dark:text-secondary-accent-dark font-medium"
          >
            Get an Idea of My Professional Journey.
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col mt-4"
          >
            {experiences.map((exp, index) => {
              const isActive = index === currentExperienceIndex;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => handleRoadmapClick(index)}
                >
                  <motion.div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 p-1 border-4 ${
                        isActive
                          ? "border-secondary-accent dark:border-secondary-accent-dark"
                          : "border-text-secondary dark:border-text-secondary-dark"
                      }
                      rounded-full flex items-center justify-center transition-colors duration-300`}
                    >
                      <motion.div
                        className={`w-[14px] h-[14px] ${
                          isActive
                            ? "bg-secondary-accent dark:bg-secondary-accent-dark"
                            : "bg-text-secondary dark:bg-text-secondary-dark"
                        } rounded-full transition-colors duration-300`}
                      />
                    </motion.div>

                    <motion.div
                      className={`w-[2.5px] h-[100px] 
                    ${
                      isActive
                        ? "bg-secondary-accent dark:bg-secondary-accent-dark"
                        : "bg-text-secondary dark:bg-text-secondary-dark"
                    } transition-colors duration-300`}
                    />
                  </motion.div>
                  <motion.div className="flex flex-col gap-1">
                    <motion.span className="text-text-primary dark:text-text-primary-dark text-xs font-body">
                      {exp.duration} {exp.partTime ? "(Part-time)" : ""}
                    </motion.span>
                    <motion.h3 className="font-bold font-headers text-lg md:text-xl">
                      {exp.role}, {exp.company} - {exp.location}
                    </motion.h3>
                    <motion.div className="flex flex-wrap items-center gap-3">
                      {exp.technologies.map((tech, techIndex) => {
                        return (
                          <span
                            key={techIndex}
                            className="text-xs font-body bg-secondary-accent/20 
                          dark:bg-secondary-accent-dark/20 text-secondary-accent 
                          dark:text-secondary-accent-dark p-1 rounded-full"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        {/* responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col gap-4 relative min-h-[500px]"
        >
          {experiences.map((exp, index) => {
            const isActive = index === currentExperienceIndex;
            const offset = (index - currentExperienceIndex) * 8;
            const rotation = (index - currentExperienceIndex) * 3;
            const scale = isActive ? 1 : 0.95;
            const zIndex =
              experiences.length - Math.abs(index - currentExperienceIndex);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                animate={{
                  y: offset,
                  rotate: rotation,
                  scale: scale,
                  opacity: isActive ? 1 : 0.6,
                  zIndex: zIndex,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{
                  transformOrigin: "top center",
                }}
                className={`absolute top-0 left-0 right-0 rounded-xl p-6 border-2 transition-all duration-500 cursor-grab active:cursor-grabbing
                  ${
                    isActive
                      ? "bg-background/90 dark:bg-background-dark/90 border-secondary-accent dark:border-secondary-accent-dark shadow-2xl"
                      : "bg-background/70 dark:bg-background-dark/70 border-text-secondary/30 dark:border-text-secondary-dark/30 pointer-events-none"
                  }
                  backdrop-blur-sm`}
              >
                <motion.div className="mb-4">
                  <motion.h4 className="font-bold font-headers text-xl text-secondary-accent dark:text-secondary-accent-dark">
                    {exp.company}
                  </motion.h4>
                  <motion.p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    {exp.role} • {exp.duration}
                  </motion.p>
                </motion.div>
                <motion.ul className="list-disc pl-5 space-y-2 text-sm">
                  {exp.responsibilities.map((resp, respIndex) => {
                    return (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isActive
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0.5, x: -10 }
                        }
                        transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                        className="text-text-primary dark:text-text-primary-dark leading-relaxed"
                      >
                        {resp}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
