import { motion } from "framer-motion";
function Skill() {
  return (
    <section
      id="skill"
      className="w-full flex flex-col items-center justify-center relative my-8"
    >
      <div className="max-container flex flex-col items-center justify-center">
        <motion.header className="flex flex-col items-center justify-center gap-2">
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
            className="text-text-primary dark:text-text-primary-dark font-body text-4xl md:text-5xl font-bold"
          >
            My Technical ToolKit
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text-secondary dark:text-text-secondary-dark font-body 
          text-sm max-w-[80%] md:max-w-2/3 text-center"
          >
            A curated collectoion of the laguages, frameworks, and tools I use
            to build scalable, and user-friendly web applications.
          </motion.p>
        </motion.header>
      </div>
    </section>
  );
}

export default Skill;
