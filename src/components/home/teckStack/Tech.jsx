import Heading from "../../heading/Heading";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiDatabaseFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import "./style.css";
import { motion } from "motion/react";

const Tech = () => {
  return (
    <div className="md:mt-28 mt-16" id="tech">
      <div>
        <Heading title={"Technologies"} subTitle={"Daily used tech & tools"} />
      </div>
      <div>
        <TechAndTools />
      </div>
    </div>
  );
};

export default Tech;

const techTools = [
  {
    id: "wft",
    label: "Web & Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces with a focus on state management and cross-platform compatibility.",
    tools: ["Html", "Css", "Javascript", "TailwindCss", "React"],
    icon: <MdOutlineSpaceDashboard size={26} />,
  },
  {
    id: "bd",
    label: "Backend Development",
    description:
      "Learning and exploring backend technology to grow my thought process next level and trying to build performance and efficient apis.",
    tools: ["Node.js", "Express.js", "MongoDb", "REST Api"],
    icon: <PiDatabaseFill size={26} />,
  },
  {
    id: "dt",
    label: "Development Tools",
    description:
      "Mastering core web technologies and implementing real-time features to enhance user engagement and operational efficiency.",
    tools: ["Git", "Github", "Vs Code"],
    icon: <FaCode size={26} />,
  },
];

function TechAndTools() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {techTools.map((category, i) => (
        <TechnologyCard
          delay={i}
          key={category.id}
          className="bg-white/5 rounded-full  py-1.5 dark-gray shadow-sm"
          category={category}
        />
      ))}
    </div>
  );
}

function TechnologyCard({ category, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "30px" }}
      whileInView={{ opacity: 1, translateY: "0px" }}
      transition={{ delay: delay * 0.2 }}
      viewport={{ once: true }}
      className="p-4 rounded-lg  border border-gray-500/40   shadow-lg shadow-base-300/10  bg-gray-700/5 backdrop-blur-xl cardShadow group hover:-translate-y-3 hover:shadow-lg hover:shadow-[#007bff2b]"
    >
      <div className="flex items-center gap-3 group-hover:scale-105">
        <div className="bg-[#007bff7d] flex justify-center items-center rounded-md h-10 aspect-square ">
          {category.icon}
        </div>
        <h2 className="text-lg text-white/80">{category.label} </h2>
      </div>
      <p className="dark-gray mt-3">{category.description} </p>
      <div className="flex gap-2 flex-wrap mt-5">
        {category.tools.map((t, i) => (
          <button
            key={i}
            className="text-xs px-5 py-1.5 rounded-full border-white/10 backdrop-blur-2xl border"
          >
            {" "}
            {t}{" "}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
