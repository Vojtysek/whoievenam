import { useRef } from "react";
import { Reveal } from "./Reveal";
import { useScroll, useTransform, motion } from "framer-motion";

const Landing = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [
      "end end", "end start"
    ]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);


  return (
    <motion.section
      ref={targetRef}
      style={{ opacity }}
      id="home"
      className="flex h-screen flex-row items-center justify-center p-4"
    >
      <video
        className="absolute left-0 top-0 h-full w-screen object-cover opacity-50"
        autoPlay
        muted
        loop
      >
        <source src="hero.mp4" type="video/mp4" />
      </video>
      <div>
        <motion.div
        style={{ scale }}
        className="w-1/2">
          <Reveal>
            <p className="mt-2 text-2xl text-red-400">Full-Stack Student</p>
          </Reveal>
          <Reveal>
            <h1 className="text-[64px] text-white">Vojtěch Döme</h1>
          </Reveal>
          <Reveal>
            <p className="mt-2 text-2xl text-white">
              {/* custom quote */}
              &quot;once a new technology rolls over you, if you&apos;re not
              part of the steamroller, you&apos;re part of the road&quot;
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-2 text-2xl text-white">- Stewart Brand</p>
          </Reveal>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Landing;
