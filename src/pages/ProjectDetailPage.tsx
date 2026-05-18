import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Button from "../components/Button";

const ProjectDetailPage = () => {
    const { slug } = useParams();

    const project = projects.find(
        (project) => project.slug == slug
    )

    if (!project) {
        return (
            <div className="p-10">
                <h1 className="text-3xl font-bold">Project Not Found</h1>
            </div>
        );
    }

    return (
        <div className="px-10 py-10">
            <p className="text-red-600 mb-2 font-bold">{project.category}</p>

            <h1 className="text-5xl font-bold mb-6">
                {project.title}
            </h1>

            <p className="text-black-300 text-lg leading-8 max-w-3xl mb-4">
                {project.description}
            </p>

            {/* Tech Stack */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                    Tech Stack -
                </h2>

                <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="bg-gray-500 px-4 py-2 rounded-lg"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                    Key Features
                </h2>

                <ul className="list-disc list-inside text-gray-500 space-y-2">
                    {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </section>

            <Button href={project.githubUrl}>
                View on GitHub
            </Button>


            <Link to="/projects" className="block mt-4 text-red-600 font-bold hover:text-blue-400">
                ← Back to Projects
            </Link>
        </div>
    );
};

export default ProjectDetailPage;