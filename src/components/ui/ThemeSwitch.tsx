import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { motion } from "framer-motion";
function ThemeSwitchBtn() {
  const { theme, setTheme } = useTheme();
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
  return (
    <>
      {theme === "light" ? (
        <motion.button
          onClick={() => setTheme("dark")}
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <MoonIcon className="w-5 h-5" />
        </motion.button>
      ) : (
        <motion.button
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          onClick={() => setTheme("light")}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <SunIcon className="w-5 h-5 text-yellow-400" />
        </motion.button>
      )}
    </>
  );
}

export default ThemeSwitchBtn;
