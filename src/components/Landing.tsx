import { useRef } from "react";
import { Reveal } from "./Reveal";
import { useScroll, useTransform, motion } from "framer-motion";

const Landing = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity }}
      id="home"
      className="flex h-screen justify-center p-4"
    >
      <video
        className="absolute left-0 top-0 h-full w-screen object-cover opacity-50"
        autoPlay
        muted
        loop
      >
        <source src="hero.mp4" type="video/mp4" />
      </video>
      <motion.div
        style={{ scale }}
        className="flex w-full flex-col justify-center"
      >
        <Reveal>
          <p className="mt-2 text-2xl text-red-400">Full-Stack Student</p>
        </Reveal>
        <Reveal>
          <h1 className="text-[64px] text-white">Vojtěch Döme</h1>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-2xl">
            &quot;čas běží rychle když se človek dobře baví&quot;
          </p>
        </Reveal>
      </motion.div>
    </motion.section>
  );
};

export default Landing;
