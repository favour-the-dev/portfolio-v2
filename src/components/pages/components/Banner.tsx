import { motion } from "framer-motion";
import MarqueeComponent from "../../ui/Marquee";
function Banner() {
  const wordList = ["Developer.", "Designer.", "Creator.", "Innovator."];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center"
    >
      <div className="max-container">
        <MarqueeComponent wordsArray={wordList} />
      </div>
    </motion.section>
  );
}

export default Banner;
