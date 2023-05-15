import Lottie from "lottie-react";
import animationData from "../../public/ai.json";
import { Link } from "react-scroll";

const Landing = () => {
    return(
        <section
        id="home"
        className="container mx-auto flex h-screen flex-row items-center justify-center p-4"
      >
        <div className="w-1/2">
          <h1 className="text-[64px] text-purple-400">Vojtěch Döme</h1>
          <p className="mt-2 text-3xl text-white">Full-Stack Student</p>
          <div className="mt-12 w-max rounded-3xl bg-purple-400 px-10 py-3 text-white transition-all duration-300 ease-in-out hover:scale-110">
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
        </div>
        <Lottie className="w-1/3" animationData={animationData} loop={true} />
      </section>
    )
}

export default Landing;