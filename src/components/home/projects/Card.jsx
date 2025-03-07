/* eslint-disable react/prop-types */
import { Link } from "react-router";
import "./anim.css";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";

function Card({ proj, delay, scrollDirection }) {
  const clases = "w-8 h-8 rounded-full  p-1.5 border-gray-500/50 border ";
  return (
    <Link to={`/projects/${proj.route}`}>
      <motion.div
        initial={{ opacity: 0, translateY: "30px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        viewport={{ once: true }}
        transition={{ delay: delay * 0.2 }}
        className="rounded-lg hover:shadow-lg hover:shadow-[#007bff2b] border border-gray-500/40 p-4 shadow-lg shadow-base-300/10 card bg-gray-700/5 backdrop-blur-xl hover:-translate-y-3 group"
      >
        {" "}
        <div className="relative ">
          <img
            src={proj.image}
            alt={proj.name}
            className=" object-cover rounded-lg brightness-90  w-full  h-52 "
          />
        </div>
        <div>
          <h2 className="mt-7 font-bold text-3xl  pb-1 group-hover:text-[#007BFF] group-hover:ml-1">
            {proj.name}
          </h2>
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
      </motion.div>
    </Link>
  );
}

export default Card;
