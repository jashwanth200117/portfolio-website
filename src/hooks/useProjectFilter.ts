import { useMemo, useState } from "react";
import { projects } from "../data/projects";

export const useProjectFilter = () => {

    const [searchTerm , setSearchTerm] = useState("");
    const [selectedCategory , setSelectedCategory] = useState("All");

    const categories = ["All", "Full Stack", "Backend", "Frontend"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

    return {
        searchTerm,
        setSearchTerm,
        categories,
        selectedCategory,
        setSelectedCategory,
        filteredProjects
    }

};