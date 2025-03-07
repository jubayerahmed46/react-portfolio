import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";

const techTools = [
  "Html",
  "Css",
  "Javascript",
  "TailwindCss",
  "React",
  "Express",
  "MongoDB",
  "Git",
  "Github",
  "Vs Code",
];

const certificates = ["Pending..."];

function TechAndTools() {
  return (
    <div>
      <div>
        <h3 className="flex items-center gap-2  text-xl font-semibold">
          <FaCode className="text-[#007BFF]" size={25} /> Technology & Tools
        </h3>
        <div className="grid grid-cols-3 mt-3 gap-3">
          {techTools.map((t, i) => (
            <button
              key={i}
              className="bg-white/5 rounded-full  py-1.5 dark-gray shadow-sm"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="flex items-center gap-2  text-xl font-semibold">
          <LiaCertificateSolid className="text-[#007BFF]" size={25} />
          Certificates
        </h3>
        <div className="grid grid-cols-3 mt-3 gap-3">
          {certificates.map((t, i) => (
            <button
              key={i}
              className="bg-white/5 rounded-full  py-1.5 dark-gray shadow-sm"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechAndTools;
