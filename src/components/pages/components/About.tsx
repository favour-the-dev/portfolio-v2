import { motion } from "framer-motion";
import Banner from "./Banner";
function About() {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center relative my-8"
    >
      <div className="max-container flex flex-col items-center lg:flex-row justify-between gap-5">
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-[300px] lg:w-[500px] md:h-[500px] p-1 rounded-3xl order-2 lg:order-1 "
        >
          <motion.img
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            alt="profile_image2"
            src="/public/images/profile-2.png"
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>

        {/* text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textContainerVariants}
          className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col gap-3"
        >
          <motion.h2
            variants={textVariants}
            className="uppercase w-fit relative text-secondary-accent 
          dark:text-secondary-accent-dark font-medium font-headers text-lg md:text-xl after:absolute after:bottom-[2.5px] 
          after:right-0 after:z-[-1]
          after:w-[90%] after:h-[10px] after:bg-secondary-accent/30 dark:after:bg-secondary-accent-dark/30"
          >
            About me
          </motion.h2>
          <motion.h3
            variants={textVariants}
            className="text-text-primary dark:text-text-primary-dark font-body text-4xl md:text-5xl font-bold"
          >
            Crafting Digital Experiences
          </motion.h3>
          <motion.span
            variants={textVariants}
            className="text-sm text-secondary-accent dark:text-secondary-accent-dark font-medium"
          >
            Based in Port Harcout, Nigeria.
          </motion.span>
          <motion.p
            variants={textVariants}
            className="text-text-secondary dark:text-text-secondary-dark font-body 
          md:text-lg"
          >
            I'm Favour Odili, a passionate Front-End Engineer dedicated to
            crafting seamless and engaging digital experiences. With a keen eye
            for design and a commitment to developing clean, efficient user
            interfaces, I specialize in bringing creative visions to life on the
            web with "pixel-perfect" accuracy. Do you have an innovative project
            idea and need to transition it into a stunning web experience? Let's
            collaborate and make something amazing together!
          </motion.p>
          <motion.div
            variants={textVariants}
            className="w-full flex flex-col md:flex-row items-center gap-3"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="w-full flex items-center gap-4 mt-2 font-body"
            >
              <a
                href="#contact"
                className="w-full text-center border border-secondary-accent 
            dark:border-secondary-accent-dark text-secondary-accent 
            dark:text-secondary-accent-dark hover:text-background dark:hover:text-background-dark 
            tracking-widest uppercase px-4 py-2 mx-auto hover:bg-secondary-accent 
            dark:hover:bg-secondary-accent-dark transition-colors duration-300 ease-in-out font-medium"
              >
                Get In Touch
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="w-full flex items-center gap-4 mt-2 font-body"
            >
              <a
                href="#projects"
                className="w-full text-center border border-secondary-accent 
            dark:border-secondary-accent-dark text-secondary-accent 
            dark:text-secondary-accent-dark hover:text-background dark:hover:text-background-dark 
            tracking-widest uppercase px-4 py-2 mx-auto hover:bg-secondary-accent 
            dark:hover:bg-secondary-accent-dark transition-colors duration-300 ease-in-out font-medium"
              >
                View My Projects
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Banner />
    </section>
  );
}

export default About;
