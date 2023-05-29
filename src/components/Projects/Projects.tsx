import { Reveal } from "../Reveal";
import Grid from "../Grid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex h-screen flex-col items-center justify-center text-white"
    >
      <Reveal>
        <h1 className="text-[64px] text-red-400">projects</h1>
      </Reveal>
      <Reveal>
        <Grid />
      </Reveal>
    </section>
  );
};

export default Projects;
