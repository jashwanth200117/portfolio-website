import ProjectCard from "./ProjectCard";
import { useProjectFilter } from "../hooks/useProjectFilter";

const Projects = () => {

  const {
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredProjects,
} = useProjectFilter();

  return (
    <section
      id="projects"
      className="px-10 py-10 "
    >
      <h2 className="text-3xl font-bold text-white mb-10">
        Projects
      </h2>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 rounded-lg mb-6 text-white bg-gray-700 border border-gray-600 outline-none"
      />

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-lg transition ${selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            slug={project.slug}
            title={project.title}
            description={project.description}
            category={project.category}
            techStack={project.techStack}
            features={project.features}
            githubUrl={project.githubUrl}
          />
        ))}

      </div>
    </section>
  );
};

export default Projects;