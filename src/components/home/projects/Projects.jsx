import Heading from "../../heading/Heading";
import projects from "../projects";
import Card from "./Card"; // Assuming Card is implemented correctly with the passed props

function Projects() {
  return (
    <div className="mt-24" id="projects">
      <div>
        <Heading>
          A small selection of{" "}
          <span className="text-[#007BFF]">recent projects</span>
        </Heading>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4 mt-7">
        {projects.map((proj) => (
          <Card key={proj.id} proj={proj} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
