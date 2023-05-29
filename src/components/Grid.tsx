import { ProjectContent } from "./Projects/Content";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Grid = () => {
  return (
    <div className="grid w-max grid-cols-3 grid-rows-2 gap-12">
      {ProjectContent.map((project: Project) => (
        <div
          key={project.link}
          className="flex w-[400px] h-[200px] flex-col items-center justify-center"
        >
          <p className="text-red-400">{project.title}</p>
          <p className="text-white">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
