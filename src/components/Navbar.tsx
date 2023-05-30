import { Link } from "react-scroll";

const navs: string[] = ["home", "about", "projects"];

const Navbar = () => {
  return (
    <nav className="fixed right-0 justify-center z-10 flex w-screen gap-12 bg-[#121212] p-6 text-[22px] text-white sm:top-0 sm:rotate-0 xl:-right-[670px] xl:top-[150px] xl:rotate-90 xl:bg-transparent">
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
  );
};

export default Navbar;
