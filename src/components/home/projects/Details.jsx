import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import projects from "../projects";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

function Details() {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const proj = projects.find((p) => p.route === name);
    setProject(proj || null); // Handle undefined cases safely
  }, [name]);

  if (!project) {
    return <h2 className="text-center text-xl mt-10">Project not found.</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      {/* Project Header */}
      <div className="border-b border-gray-500/40 pb-5 mb-5">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-md lg:h-[500px] w-full object-cover mx-auto shadow-lg"
        />
        <h2 className="text-4xl font-bold mt-5">{project.name}</h2>

        {/* Links */}
        <div className="mt-3 flex gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-2 items-center text-[#007BFF] hover:text-[#0056b3] transition duration-300"
          >
            <FaGithub /> GitHub Repo
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-2 items-center text-[#007BFF] hover:text-[#0056b3] transition duration-300"
          >
            <LuExternalLink /> Live Site
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div>
        {/* Overview */}
        <Section title="Overview" content={project.description} />

        {/* Tech Stack */}
        <div className="mt-8">
          <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-semibold rounded-md shadow-md"
                style={{ backgroundColor: tech.color, color: "#fff" }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <Section title="Features ✨" list={project.features} />

        {/* Challenges */}
        <Section title="Challenges" list={project.challenges} />

        {/* Goals */}
        <Section title="Future Goals" list={project.goals} />
      </div>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, content, list }) {
  return (
    <div className="mt-8">
      <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
        {title}
      </h2>
      {content && <p className="text-gray-300">{content}</p>}
      {list && (
        <ul className="list-disc list-inside text-gray-300">
          {list.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Details;
