import { motion } from "framer-motion";
import ThemeSwitchBtn from "./ThemeSwitch";
import { DownloadIcon, MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";
function Navbar() {
  const Links = [
    {
      name: "Home",
      path: "/#hero",
    },
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Experience",
      path: "/#experience",
    },
    {
      name: "Skills",
      path: "/#skills",
    },
    {
      name: "Projects",
      path: "/#projects",
    },
    {
      name: "Contact",
      path: "/#contact",
    },
  ];
  const desktopNavContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  const desktopLinkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
      },
    },
  };

  const mobileMenuContainerVariants = {
    hidden: {
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [navOpen, setNavOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }

      const sections = Links.map((link) => link.path.replace("/#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navOpen]);
  return (
    <nav
      className={`${
        isNavScrolled
          ? "bg-background/70 dark:bg-background-dark/90 shadow-sm"
          : "bg-transparent"
      } w-full sticky top-0 left-0 p-1 z-50 flex items-center transition-all duration-500`}
    >
      <div className={`max-container flex items-center p-3 justify-between`}>
        {/* logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-headers"
        >
          <h1 className="text-2xl md:text-3xl font-bold">&lt;FvO/&gt;</h1>
        </motion.div>

        {/* desktop links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={desktopNavContainerVariants}
          className="hidden lg:flex items-center gap-8 font-body"
        >
          {Links.map((link, i) => {
            const sectionId = link.path.replace("/#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={i}
                href={link.path}
                variants={desktopLinkVariants}
                className={`text-sm font-medium transition-colors duration-300 tracking-wider uppercase relative
                  ${
                    isActive
                      ? "text-secondary-accent dark:text-secondary-accent-dark"
                      : "text-text-secondary dark:text-text-secondary-dark hover:text-secondary-accent dark:hover:text-secondary-accent-dark"
                  }
                  ${
                    isActive
                      ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary-accent dark:after:bg-secondary-accent-dark"
                      : ""
                  }
                `}
              >
                {link.name}
              </motion.a>
            );
          })}
          <ThemeSwitchBtn />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            className="w-full flex items-center gap-4 mt-2 font-body"
          >
            <a
              href="/public/assets/Favour-Odili-Cv.pdf"
              download
              className="w-fit flex items-center gap-1 text-xs border border-secondary-accent 
            dark:border-secondary-accent-dark text-secondary-accent 
            dark:text-secondary-accent-dark hover:text-background dark:hover:text-background-dark 
            tracking-widest uppercase px-2 py-2 mx-auto hover:bg-secondary-accent 
            dark:hover:bg-secondary-accent-dark transition-colors duration-300 ease-in-out font-medium"
            >
              <DownloadIcon className="w-4 h-4 inline-block mr-1" />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* mobile-links */}
        <div className="flex items-center gap-3 lg:hidden font-body relative z-[60]">
          <ThemeSwitchBtn />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            className="w-full flex items-center gap-4 mt-2"
          >
            <a
              href="/public/assets/Favour-Odili-Cv.pdf"
              download
              className="w-fit flex items-center gap-1 text-xs border border-secondary-accent 
            dark:border-secondary-accent-dark text-secondary-accent 
            dark:text-secondary-accent-dark hover:text-background dark:hover:text-background-dark 
            tracking-widest uppercase px-2 py-2 mx-auto hover:bg-secondary-accent 
            dark:hover:bg-secondary-accent-dark transition-colors duration-300 ease-in-out font-medium"
            >
              <DownloadIcon className="w-4 h-4 inline-block mr-1" />
              Resume
            </a>
          </motion.div>
          {/* mobile menu */}
          <motion.div
            animate={{ rotate: navOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {!navOpen ? (
              <MenuIcon
                className="w-7 h-7 text-text-primary dark:text-text-primary-dark cursor-pointer"
                onClick={() => {
                  setNavOpen(true);
                }}
              />
            ) : (
              <XIcon
                className="w-7 h-7 text-secondary-accent 
              dark:text-secondary-accent-dark cursor-pointer"
                onClick={() => {
                  setNavOpen(false);
                }}
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* mobile menu overlay and links - outside blurred container */}
      {navOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setNavOpen(false)}
        />
      )}
      <motion.div
        initial="hidden"
        animate={navOpen ? "visible" : "hidden"}
        variants={mobileMenuContainerVariants}
        className="fixed top-0 right-0 h-screen w-[70%] bg-background dark:bg-background-dark 
        shadow-2xl z-50 flex flex-col items-start justify-start p-8 pt-20 gap-6"
      >
        {Links.map((link, i) => {
          const sectionId = link.path.replace("/#", "");
          const isActive = activeSection === sectionId;
          return (
            <motion.a
              key={i}
              href={link.path}
              variants={mobileLinkVariants}
              onClick={() => setNavOpen(false)}
              className={`text-lg font-medium transition-colors duration-300 tracking-wider uppercase w-full
                ${
                  isActive
                    ? "text-secondary-accent dark:text-secondary-accent-dark font-bold"
                    : "text-text-secondary dark:text-text-secondary-dark hover:text-secondary-accent dark:hover:text-secondary-accent-dark"
                }
              `}
            >
              {link.name}
            </motion.a>
          );
        })}
      </motion.div>
    </nav>
  );
}

export default Navbar;
