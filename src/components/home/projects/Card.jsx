/* eslint-disable react/prop-types */
import { Link } from "react-router";
import "./anim.css";
import { Icon } from "@iconify/react";

function Card({ proj }) {
  const clases = "w-8 h-8 rounded-full  p-1.5 border-gray-500/50 border";
  return (
    <Link to={`/projects/${proj.route}`}>
      <div className="parent">
        <div className="rounded-lg  border border-gray-500/40 p-4  shadow-lg shadow-base-300/20 card">
          <div className="relative ">
            <img
              src={proj.image}
              alt={proj.name}
              className=" object-cover rounded-lg brightness-90  w-full  h-52 "
            />
          </div>
          <div>
            <h2 className="mt-7 font-bold text-3xl  pb-1">{proj.name}</h2>
            <p className="text-xl mt-2 dark-gray">
              {proj.description.split(" ").slice(0, 10).join(" ")}..
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Icon icon="logos:react" className={clases} />
            <Icon icon="logos:tailwindcss-icon" className={clases} />
            <Icon icon="logos:nodejs-icon" className={clases} />
            <Icon icon="logos:mongodb-icon" className={clases} />
            <Icon icon="logos:javascript" className={clases} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
