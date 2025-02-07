import Heading from "../../heading/Heading";
import about from "../../../assets/about.jpg";
import "./about.css";

function About() {
  return (
    <div className="mt-20">
      <Heading>⚡ About Me</Heading>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Section */}
        <div className="flex-1 pr-4">
          <p className="dark-gray mt-4">
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
        </div>

        {/* Right Section */}
        <div className="flex-1 pl-4 ">
          <div className="aboutImg relative  md:h-80 h-64  w-80 mx-auto md:mt-0 mt-10">
            <img
              src={about}
              alt="Profile"
              className="rounded-lg shadow-lg h-full mx-auto rotate-3 z-40 relative w-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
