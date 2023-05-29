import { Link } from "react-scroll";
import { Reveal } from "./Reveal";

const navs: string[] = ["home", "about", "projects"];

const Navbar = () => {
  return (
    <Reveal>
      <nav className="fixed right-0 md:top-[150px] flex sm:rotate-0 bg-[#121212] z-10 md:bg-transparent sm:top-0 md:rotate-90 md:-right-[150px] gap-12 p-6 text-[22px] text-white">
        {navs.map((nav) => (
          <Link
            key={nav}
            to={nav}
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={50}
            className="relative flex cursor-pointer transition-all duration-100 ease-in-out hover:scale-105"
          >
            {nav}
          </Link>
        ))}
      </nav>
    </Reveal>
  );
};

export default Navbar;
