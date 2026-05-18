import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    slug: "construction-price-tracker",
    title: "Construction Price Tracker",
    description:
      "Tracks real-time construction material prices using Spring Boot and MySQL. So the difference is not about the function itself, but about whether you want to extract properties from an object or store the entire returned value.",
    category: "Full Stack",
    techStack: ["React", "TypeScript", "Spring Boot", "MySQL"],
    features: [
      "Real-time material price tracking",
      "REST API integration",
      "Search and filtering",
      "Responsive UI",
    ],
    githubUrl: "https://github.com/yourusername/construction-price-tracker",
  },

  {
    slug: "employee-management-system",
    title: "Employee Management System",
    description:
      "Full-stack CRUD application using React and Spring Boot.",
    category: "Full Stack",
    techStack: ["React", "Spring Boot", "MySQL"],
    features: [
      "Create, update, and delete employees",
      "REST API integration",
      "Responsive interface",
    ],
    githubUrl: "https://github.com/yourusername/employee-management-system",
  },

  {
    slug: "url-shortener",
    title: "URL Shortener",
    description:
      "Shortens long URLs and tracks analytics using Spring Boot.",
    category: "Backend",
    techStack: ["Spring Boot", "Redis", "MySQL"],
    features: [
      "Short URL generation",
      "Click analytics",
      "Pagination support",
    ],
    githubUrl: "https://github.com/yourusername/url-shortener",
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built using React and Tailwind CSS.",
    category: "Frontend",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Project filtering",
      "Dynamic routes",
      "Responsive design",
    ],
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];