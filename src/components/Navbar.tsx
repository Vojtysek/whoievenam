import { Link } from "react-scroll";

const navs: string[] = ["home", "about", "projects"];

const Navbar = () => {
  return (
    <nav className="fixed right-0 top-0 z-20 gap-12 bg-[#121212] p-6 text-[22px] text-white flex w-screen flex-row xl:flex-col justify-center xl:w-fit xl:h-[400px] xl:bg-transparent">
      {navs.map((nav) => (
        <Link
          key={nav}
          to={nav}
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          delay={50}
          className="flex cursor-pointer transition-all duration-100 ease-in-out hover:scale-105 xl:h-[200px] items-center justify-center xl:rotate-90"
        >
          {nav}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
