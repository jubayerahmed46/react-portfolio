import Heading from "../../heading/Heading";
import projects from "../projects";
import Card from "./Card"; // Assuming Card is implemented correctly with the passed props

function Projects() {
  return (
    <div className="mt-24" id="projects">
      <div>
        <Heading>All Creative Works</Heading>
        <p className="text-lg dark-gray">
          Here's some of my projects that I have worked on.
        </p>
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
