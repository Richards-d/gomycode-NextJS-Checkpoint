import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Restaurant Menu",
      image: "/images/Restaurant Menu.PNG",
    },
    {
      title: "Project 2",
      description: "Responsive Store Landing Page Design",
      image: "/images/Responsive Store Landing Page Design.PNG",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Projects</h1>
        <div style={{ display: "flex", gap: "20px", width: "600px", marginTop:"40px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
