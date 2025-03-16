const ProjectCard = ({ project }) => {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;