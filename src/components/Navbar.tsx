import { Link } from "react-scroll";

const LineDot = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="mr-2 h-2 w-2 rounded-full bg-purple-400"></div>
      <div className="mr-4 h-1 w-4 bg-purple-300"></div>
    </div>
  );
};

const navs: Array<string> = ["home", "about", "projects"];

const Navbar = () => {
  return (
    <nav className="fixed right-24 top-2/3 flex flex-col p-6 text-[32px] text-white">
      {navs.map((nav) => (
        <Link
          key={nav}
          to={nav}
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          delay={50}
          className={`} relative flex cursor-pointer transition-all duration-100 ease-in-out hover:scale-105 `}
          /* ${
            router.asPath.slice(2) === nav ? "text-purple-400" : "text-white"
          } */
        >
          <LineDot />
          {nav}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
