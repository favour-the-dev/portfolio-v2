import Marquee from "react-fast-marquee";
interface MarqueeComponentProps {
  wordsArray: string[];
}
function MarqueeComponent({ wordsArray }: MarqueeComponentProps) {
  return (
    <div className="relative overflow-hidden py-4">
      <Marquee
        className="h-[60px] md:h-[80px]"
        speed={50}
        gradient={true}
        gradientColor="transparent"
        gradientWidth={100}
      >
        {wordsArray.map((word, i) => {
          return (
            <span
              key={i}
              className="mx-8 md:mx-12 font-bungee text-4xl md:text-5xl 
              text-secondary-accent dark:text-secondary-accent-dark font-bold
              hover:scale-110 transition-transform duration-300 inline-block
              drop-shadow-lg cursor-pointer"
            >
              {word}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;
