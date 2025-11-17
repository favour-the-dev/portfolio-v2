import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { IoLibraryOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
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
import { FaNpm } from "react-icons/fa";
function Skill() {
  const languages = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-3xl md:text-4xl text-[#E34F26]" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-3xl md:text-4xl text-[#1572B6]" />,
    },
    {
      name: "JavaScript",
      icon: (
        <IoLogoJavascript className="text-3xl md:text-4xl text-[#F7DF1E]" />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <BiLogoTypescript className="text-3xl md:text-4xl text-[#3178C6]" />
      ),
    },
    {
      name: "Python",
      icon: <FaPython className="text-3xl md:text-4xl text-[#3776AB]" />,
    },
  ];
  const frameworks = [
    {
      name: "React",
      icon: <FaReact className="text-3xl md:text-4xl text-[#61DAFB]" />,
    },
    {
      name: "Next.js",
      icon: (
        <RiNextjsFill className="text-3xl md:text-4xl text-[#000000] dark:text-[#FFFFFF]" />
      ),
    },
    {
      name: "Vue.js",
      icon: <FaVuejs className="text-3xl md:text-4xl text-[#4FC08D]" />,
    },
    {
      name: "Astro.js",
      icon: <SiAstro className="text-3xl md:text-4xl text-[#FF5D01]" />,
    },
    {
      name: "Tailwind CSS",
      icon: (
        <RiTailwindCssFill className="text-3xl md:text-4xl text-[#38B2AC]" />
      ),
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-3xl md:text-4xl text-[#339933]" />,
    },
    {
      name: "Express.js",
      icon: (
        <SiExpress className="text-3xl md:text-4xl text-[#000000] dark:text-[#FFFFFF]" />
      ),
    },
  ];
  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-3xl md:text-4xl text-[#F05032]" />,
    },
    {
      name: "GitHub",
      icon: (
        <FaGithub className="text-3xl md:text-4xl text-[#181717] dark:text-[#FFFFFF]" />
      ),
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase className="text-3xl md:text-4xl text-[#FFCA28]" />,
    },
    {
      name: "MongoDB",
      icon: <BiLogoMongodb className="text-3xl md:text-4xl text-[#47A248]" />,
    },
    {
      name: "Supabase",
      icon: <RiSupabaseFill className="text-3xl md:text-4xl text-[#3ECF8E]" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-3xl md:text-4xl text-[#FF6C37]" />,
    },
    {
      name: "Vercel",
      icon: (
        <IoLogoVercel className="text-3xl md:text-4xl text-[#000000] dark:text-[#FFFFFF]" />
      ),
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-3xl md:text-4xl text-[#00C7B7]" />,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-3xl md:text-4xl text-[#FF9900]" />,
    },
    {
      name: "NPM",
      icon: <FaNpm className="text-3xl md:text-4xl text-[#CB3837]" />,
    },
  ];
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center relative my-10 py-6"
    >
      <div className="max-container flex flex-col gap-4">
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
          dark:text-secondary-accent-dark font-medium font-headers text-lg md:text-xl after:absolute 
          after:bottom-[2px] after:right-0 after:z-[-1] after:w-[90%] after:h-[8px] after:bg-secondary-accent/30 dark:after:bg-secondary-accent-dark/30"
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
          text-sm md:text-base max-w-[90%] md:max-w-[70%] text-center leading-normal"
          >
            A curated collection of the languages, frameworks, and tools I use
            to build scalable, and user-friendly web applications.
          </motion.p>
        </motion.header>
        <div className="w-full flex items-center flex-col md:flex-row justify-center gap-8 mt-4">
          {/* laguages} */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-secondary-accent/10 dark:bg-secondary-accent-dark/10 
          backdrop-blur-md border-2 border-secondary-accent/60 
          dark:border-secondary-accent-dark/60 rounded-xl p-5 w-full max-w-[300px] md:max-w-[250px] md:h-[300px] cursor-pointer"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-headers text-xl font-bold 
              mt-2 mb-4 flex flex-col items-center justify-center gap-2"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FaCode
                  className="text-3xl md:text-4xl 
              text-secondary-accent dark:text-secondary-accent-dark"
                />
              </motion.div>
              Languages
            </motion.h3>
            <motion.div className="flex flex-wrap items-center justify-center gap-2">
              {languages.map((language, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {language.icon}
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>
          {/* frameworks & libraries */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-secondary-accent/10 dark:bg-secondary-accent-dark/10 
          backdrop-blur-md border-2 border-secondary-accent/60 
          dark:border-secondary-accent-dark/60 rounded-xl p-5 w-full max-w-[300px] md:max-w-[250px] md:h-[300px] cursor-pointer"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-headers text-xl font-bold 
              mt-2 mb-4 flex flex-col items-center justify-center gap-2 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <IoLibraryOutline
                  className="text-3xl md:text-4xl 
              text-secondary-accent dark:text-secondary-accent-dark"
                />
              </motion.div>
              Frameworks & Libraries
            </motion.h3>
            <motion.div className="flex flex-wrap items-center justify-center gap-2">
              {frameworks.map((framework, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {framework.icon}
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>
          {/* tools and platforms */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-secondary-accent/10 dark:bg-secondary-accent-dark/10 
          backdrop-blur-md border-2 border-secondary-accent/60 
          dark:border-secondary-accent-dark/60 rounded-xl p-5 w-full max-w-[300px] md:max-w-[250px] md:h-[300px] cursor-pointer"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-headers text-xl font-bold 
              mt-2 mb-4 flex flex-col items-center justify-center gap-2 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <VscTools
                  className="text-3xl md:text-4xl 
              text-secondary-accent dark:text-secondary-accent-dark"
                />
              </motion.div>
              Tools & Platforms
            </motion.h3>
            <motion.div className="flex flex-wrap items-center justify-center gap-2">
              {tools.map((tool, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.08 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {tool.icon}
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
