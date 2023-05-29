import { Link } from "react-scroll";
import { Reveal } from "./Reveal";

const Landing = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex h-screen flex-row items-center justify-center p-4"
    >
      <div className="w-1/2">
        <Reveal>
          <p className="mt-2 text-2xl text-red-400">Full-Stack Student</p>
        </Reveal>
        <Reveal>
          <h1 className="text-[64px] text-white">Vojtěch Döme</h1>
        </Reveal>
        <Reveal>
          <div className="m-4 mt-12 w-max rounded-3xl bg-red-400 px-10 py-3 text-white transition-all duration-300 ease-in-out hover:scale-110">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              delay={50}
            >
              Who I Even Am?
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="w-1/3 h-1/2 grid place-items-center">
      </div>
    </section>
  );
};

export default Landing;
