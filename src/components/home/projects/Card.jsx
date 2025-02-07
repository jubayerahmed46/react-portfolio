/* eslint-disable react/prop-types */
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

function Card({ proj }) {
  return (
    <div className="rounded-md overflow-hidden border border-gray-500/40 p-3">
      <div className="relative">
        <img
          src={proj.image}
          alt={proj.name}
          className="h-52 object-cover rounded-md brightness-90 w-full "
        />
      </div>
      <div>
        <h2 className="mt-3 text-xl border-b border-gray-400/20 pb-2">
          {proj.name}
        </h2>
        <p className="text-sm mt-2 dark-gray">{proj.description}</p>
        <Link to={`/projects/${proj.route}`}>
          <button className="flex gap-2 items-center text-[#007BFF] text-sm mt-2 cursor-pointer">
            View More <FaLongArrowAltRight />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
