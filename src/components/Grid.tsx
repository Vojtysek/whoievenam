import { ProjectContent } from "./Projects/Content";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Grid = () => {
  return (
    <div className="grid w-max grid-rows-2 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {ProjectContent.map((project: Project) => (
        <motion.div
          key={project.link}
          className="flex flex-col items-center justify-center rounded-xl border-2 border-red-400 sm:w-[100px] md:w-[200px] xl:w-[350px] xl:h-[300px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            className="rounded-xl"
            width={400}
            height={300}
          />
          <p className="py-1 text-red-400">{project.title}</p>
          <p className="text-white">{project.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Grid;
