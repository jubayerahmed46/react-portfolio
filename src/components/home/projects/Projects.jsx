import Heading from "../../heading/Heading";
import projects from "../projects";
import Card from "./Card";

function Projects() {
  return (
    <div className="md:mt-28 mt-16" id="projects">
      <div>
        <Heading title={"Projects"} subTitle={"Most recent works"} />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4 mt-7 ">
        {projects.map((proj, i) => (
          <Card key={proj.id} delay={i} proj={proj} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
