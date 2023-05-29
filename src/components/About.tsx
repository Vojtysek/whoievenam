import { Reveal } from "./Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="flex h-screen flex-row items-center justify-center p-4 text-white"
    >
      <div className="flex w-2/3 flex-col items-center justify-center text-justify">
        <Reveal>
          <h1 className="text-[64px] text-red-400">about Me</h1>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-xl text-white">
            I am a student of the 3rd year of the Secondary Technical School of
            Electrical Engineering in Prague. I am interested in programming and
            I am trying to learn as much as possible.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-xl text-white">
            I am currently learning React, TypeScript, Next.js, and Tailwind
            CSS.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
