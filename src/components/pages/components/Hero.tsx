import { motion } from "framer-motion";
function Hero() {
  const textContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };
  const spanVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
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
  return (
    <section
      id="hero"
      className="w-full h-full flex flex-col items-center justify-center relative my-8"
    >
      <div
        className="fixed top-20 left-10 w-[150px] h-[150px] rounded-full 
        bg-primary-accent/30 dark:bg-primary-accent-dark/30 backdrop-blur-3xl 
         -z-10 blur-3xl"
      />
      <div
        className="fixed bottom-20 right-10 w-[200px] h-[200px] rounded-full 
        bg-secondary-accent/30 dark:bg-secondary-accent-dark/30 backdrop-blur-3xl 
         -z-10 blur-3xl"
        style={{ animationDelay: "1s" }}
      />
      <div className="flex flex-col items-center gap-3">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" w-[200px] h-[200px] border-2 border-dashed p-1 rounded-full 
        border-secondary-accent dark:border-secondary-accent-dark overflow-hidden"
        >
          <motion.img
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1 }}
            alt="profile image"
            src="/images/profile-1.jpg"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center justify-center gap-2"
        >
          <h1 className="font-headers text-5xl md:text-6xl font-bold capitalize">
            {["f", "a", "v", "o", "u", "r", " ", "o", "d", "i", "l", "i"].map(
              (char, index) => {
                return (
                  <motion.span key={index} variants={spanVariants}>
                    {char}
                  </motion.span>
                );
              }
            )}
          </h1>
          <motion.h2
            variants={textVariants}
            className="font-body text-secondary-accent dark:text-secondary-accent-dark font-medium text-lg md:text-xl"
          >
            Front-End Engineer
          </motion.h2>
          <motion.h3
            variants={textVariants}
            className="font-body text-text-secondary dark:text-text-secondary-dark text-center 
            max-w-[70%] md:max-w-[65%]"
          >
            Building fast, and user centered web experiences with pixel-perfect
            accuracy
          </motion.h3>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="w-full flex items-center gap-4 mt-2 font-body"
        >
          <a
            href="#contact"
            className="w-fit border border-secondary-accent 
            dark:border-secondary-accent-dark text-secondary-accent 
            dark:text-secondary-accent-dark hover:text-background dark:hover:text-background-dark 
            tracking-widest uppercase px-4 py-2 mx-auto hover:bg-secondary-accent 
            dark:hover:bg-secondary-accent-dark transition-colors duration-300 ease-in-out font-medium"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
