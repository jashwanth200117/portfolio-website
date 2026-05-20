import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Layout from "./components/Layout";
import GitHubProfilePage from "./pages/GitHubProfilePage";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio-website"  >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="github" element={<GitHubProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;