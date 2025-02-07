import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import projects from "../projects";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

function Details() {
  const { name } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const proj = projects.find((p) => {
      return p.route === name;
    });
    setProject(proj);
  }, [name]);

  if (!project?.image) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="border-b border-gray-500/40 pb-2 mb-5">
        <div className="">
          <img
            src={project.image}
            alt={project.name}
            className="rounded-md lg:h-[500px]  mx-auto"
          />
        </div>
        <h2 className="text-4xl font-bold  mt-5 ">{project.name} </h2>
        <div className="mt-3 flex gap-5">
          <Link to={project.github}>
            {" "}
            <button className="flex justify-center gap-2 items-center  cursor-pointer">
              <FaGithub /> <span className="text-[#007BFF]">Github Repo</span>
            </button>
          </Link>
          <Link to={project.liveLink}>
            <button className="flex justify-center gap-2 items-center  cursor-pointer">
              <LuExternalLink />{" "}
              <span className="text-[#007BFF]">Live Site</span>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p> {project.description} </p>
        </div>
        <div className="mt-8">
          <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
            Tech Stack
          </h2>
          <p> {project.description} </p>
        </div>
        <div className="mt-8">
          <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
            Features ✨
          </h2>
          <p> {project.description} </p>
        </div>
        <div className="mt-8">
          <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
            Challenges
          </h2>
          <p> {project.description} </p>
        </div>
        <div className="mt-8">
          <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
            Goals
          </h2>
          <p> {project.description} </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
