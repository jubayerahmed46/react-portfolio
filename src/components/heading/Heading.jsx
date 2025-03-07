import { motion } from "motion/react";

function Heading({ title, subTitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-50px" }}
      whileInView={{ opacity: 1, translateX: "0px" }}
      viewport={{ once: true }}
      className="   md:mb-12 mb-7 items-center"
    >
      <h2 className=" md:text-4xl  text-2xl font-bold ">
        {title}
        <span className="text-5xl ml-0.5  text-[#007BFF]">.</span>
      </h2>
      <p className="dark-gray  mt-2 text-sm">{subTitle} </p>
    </motion.div>
  );
}

export default Heading;
