import { Link } from "react-router-dom";
import type { Project } from "../types/Project";

interface ProjectCardProps extends Project { }

const ProjectCard = ({
  slug,
  title,
  description,
  category
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="bg-gray-700 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
        <p className="text-sm text-blue-400 mb-2">{category}</p>
        <h3 className="text-2xl text-white font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 text-xs">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;