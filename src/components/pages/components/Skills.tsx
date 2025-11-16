import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
import { FaAws } from "react-icons/fa";
function Skill() {
  const languages = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-5xl md:text-6xl text-[#E34F26]" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-5xl md:text-6xl text-[#1572B6]" />,
    },
    {
      name: "JavaScript",
      icon: (
        <IoLogoJavascript className="text-5xl md:text-6xl text-[#F7DF1E]" />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <BiLogoTypescript className="text-5xl md:text-6xl text-[#3178C6]" />
      ),
    },
    {
      name: "Python",
      icon: <FaPython className="text-5xl md:text-6xl text-[#3776AB]" />,
    },
  ];
  const frameworks = [
    {
      name: "React",
      icon: <FaReact className="text-5xl md:text-6xl text-[#61DAFB]" />,
    },
    {
      name: "Next.js",
      icon: (
        <RiNextjsFill className="text-5xl md:text-6xl text-[#000000] dark:text-[#FFFFFF]" />
      ),
    },
    {
      name: "Vue.js",
      icon: <FaVuejs className="text-5xl md:text-6xl text-[#4FC08D]" />,
    },
    {
      name: "Astro.js",
      icon: <SiAstro className="text-5xl md:text-6xl text-[#FF5D01]" />,
    },
    {
      name: "Tailwind CSS",
      icon: (
        <RiTailwindCssFill className="text-5xl md:text-6xl text-[#38B2AC]" />
      ),
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl md:text-6xl text-[#339933]" />,
    },
    {
      name: "Express.js",
      icon: (
        <SiExpress className="text-5xl md:text-6xl text-[#000000] dark:text-[#FFFFFF]" />
      ),
    },
  ];
  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-5xl md:text-6xl text-[#F05032]" />,
    },
    {
      name: "GitHub",
      icon: (
        <FaGithub className="text-5xl md:text-6xl text-[#181717] dark:text-[#FFFFFF]" />
      ),
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase className="text-5xl md:text-6xl text-[#FFCA28]" />,
    },
    {
      name: "MongoDB",
      icon: <BiLogoMongodb className="text-5xl md:text-6xl text-[#47A248]" />,
    },
    {
      name: "Supabase",
      icon: <RiSupabaseFill className="text-5xl md:text-6xl text-[#3ECF8E]" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-5xl md:text-6xl text-[#FF6C37]" />,
    },
    {
      name: "Vercel",
      icon: (
        <IoLogoVercel className="text-5xl md:text-6xl text-[#000000] dark:text-[#FFFFFF]" />
      ),
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-5xl md:text-6xl text-[#00C7B7]" />,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-5xl md:text-6xl text-[#FF9900]" />,
    },
  ];
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center relative my-16 py-8"
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
          dark:text-secondary-accent-dark font-medium font-headers text-lg md:text-xl after:absolute after:bottom-[2.5px] 
          after:right-0 after:z-[-1]
          after:w-[90%] after:h-[10px] after:bg-secondary-accent/30 dark:after:bg-secondary-accent-dark/30"
          >
            My Skills
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-primary dark:text-text-primary-dark font-body text-4xl 
            md:text-5xl font-bold text-center"
          >
            My Technical ToolKit
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text-secondary dark:text-text-secondary-dark font-body 
          text-base md:text-lg max-w-[90%] md:max-w-[60%] text-center leading-relaxed"
          >
            A curated collection of the languages, frameworks, and tools I use
            to build scalable, and user-friendly web applications.
          </motion.p>
        </motion.header>
        <div className="w-full flex flex-col gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <motion.h4 className="font-headers font-bold text-2xl md:text-3xl text-secondary-accent dark:text-secondary-accent-dark">
              Languages
            </motion.h4>
            <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center justify-center gap-3 
                  bg-background/50 dark:bg-background-dark/50 backdrop-blur-sm
                  border-2 border-secondary-accent/30 hover:border-secondary-accent 
                  dark:border-secondary-accent-dark/30 dark:hover:border-secondary-accent-dark
                  rounded-xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl
                  hover:shadow-secondary-accent/20 dark:hover:shadow-secondary-accent-dark/20"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {lang.icon}
                  </motion.div>
                  <motion.p className="font-body text-sm md:text-base font-semibold text-text-primary dark:text-text-primary-dark text-center">
                    {lang.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.h4 className="font-headers font-bold text-2xl md:text-3xl text-secondary-accent dark:text-secondary-accent-dark">
              Frameworks & Libraries
            </motion.h4>
            <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center justify-center gap-3 
                  bg-background/50 dark:bg-background-dark/50 backdrop-blur-sm
                  border-2 border-secondary-accent/30 hover:border-secondary-accent 
                  dark:border-secondary-accent-dark/30 dark:hover:border-secondary-accent-dark
                  rounded-xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl
                  hover:shadow-secondary-accent/20 dark:hover:shadow-secondary-accent-dark/20"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {framework.icon}
                  </motion.div>
                  <motion.p className="font-body text-sm md:text-base font-semibold text-text-primary dark:text-text-primary-dark text-center">
                    {framework.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <motion.h4 className="font-headers font-bold text-2xl md:text-3xl text-secondary-accent dark:text-secondary-accent-dark">
              Tools & Platforms
            </motion.h4>
            <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center justify-center gap-3 
                  bg-background/50 dark:bg-background-dark/50 backdrop-blur-sm
                  border-2 border-secondary-accent/30 hover:border-secondary-accent 
                  dark:border-secondary-accent-dark/30 dark:hover:border-secondary-accent-dark
                  rounded-xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl
                  hover:shadow-secondary-accent/20 dark:hover:shadow-secondary-accent-dark/20"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tool.icon}
                  </motion.div>
                  <motion.p className="font-body text-sm md:text-base font-semibold text-text-primary dark:text-text-primary-dark text-center">
                    {tool.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
