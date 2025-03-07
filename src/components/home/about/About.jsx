import Heading from "../../heading/Heading";
import about from "../../../assets/about.jpg";
import { motion } from "motion/react";

function About() {
  return (
    <div className="mt-36" id="about">
      <Heading title={"About"} subTitle={"Journey and Objective"} />
      <div className="flex flex-col md:flex-row  md:gap-5 gap-8">
        <motion.div
          initial={{ opacity: 0, translateY: "30px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          viewport={{ once: true }}
          className="flex-1 pr-4"
        >
          <p className="dark-gray ">
            Hey! I'm Jubayer Ahmed. I love building real-world solutions through
            code. Turning ideas into functional applications and solving
            real-world challenges with technology excites me the most.
          </p>
          <p className="dark-gray mt-4">
            I began my coding journey in 2024 and quickly developed a deep
            passion for it. Over time, I've built multiple{" "}
            <span className="text-[#007BFF]">web projects</span>, refining my
            skills with{" "}
            <span className="text-[#007BFF]">modern web technologies</span>. My
            focus is on developing{" "}
            <span className="text-[#007BFF]">efficient</span>,{" "}
            <span className="text-[#007BFF]">scalable</span>, and{" "}
            <span className="text-[#007BFF]">user-friendly</span> applications.
            I am particularly interested in contributing to{" "}
            <span className="text-[#007BFF]">Web Open Source projects</span> to
            enhance productivity and make technology more accessible to
            everyone.
          </p>
          <p className="dark-gray mt-4">
            Outside of coding, I enjoy strategic video games and reading books.
            I believe continuous learning fuels both personal and professional
            growth.
          </p>
        </motion.div>

        {/* Right Section */}
        <div className="flex-1 ">
          <motion.div
            initial={{ opacity: 0, translateY: "80px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            viewport={{ once: true }}
            className="relative  md:h-80 md:w-10/12 h-72 w-80  mx-auto md:mt-0 mt-10"
          >
            <img
              src={about}
              alt="Profile"
              className="rounded-lg shadow-2xl h-full mx-auto w-full object-cover   shadow-blue-700/20"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
