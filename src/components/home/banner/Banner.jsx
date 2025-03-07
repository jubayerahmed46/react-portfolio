import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import myPic from "../../../assets/me.jpg";
import { Link } from "react-router";
import PrimaryButton from "../../btns/PrimaryButton";
import SecondaryButton from "../../btns/SecondaryButton";
import { motion } from "motion/react";

function Banner() {
  const socialItems = [
    {
      link: "https://github.com/jubayerahmed46",
      icon: <FaGithub size={23} />,
    },
    {
      link: "/",
      icon: <FaLinkedin size={23} />,
    },
    {
      link: "/",
      icon: <FaFacebook size={23} />,
    },
  ];

  return (
    <div className=" flex flex-col items-center   text-center justify-center">
      <div className="grid  justify-center">
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            src={myPic}
            alt="my image"
            className=" md:h-52 h-44 aspect-square  rounded-full border-white border-4 object-cover"
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, translateY: "3px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="md:text-6xl text-3xl  font-extrabold z-10 relative mt-5"
        >
          Hi!, I'm Jubayer.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: "3px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="md:text-xl text-lg mx-auto mt-3 md:w-xl z-10 relative"
        >
          <span className="font-medium">A Frontend Web Developer,</span>{" "}
          <span className="dark-gray">
            focused on developing innovative web applications.
          </span>
        </motion.p>
        <div className="flex gap-4 items-center mt-4">
          {socialItems.map((item, i) => (
            <Link key={i} to={item.link}>
              <motion.span
                initial={{ opacity: 0, translateY: "3px" }}
                whileInView={{ opacity: 1, translateY: "0px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="hover:text-blue-600 duration-50"
              >
                {item.icon}{" "}
              </motion.span>{" "}
            </Link>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: "3px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-auto"
        >
          <div className="flex gap-4 ">
            <PrimaryButton>View Resume</PrimaryButton>
            <a href="#contact">
              {" "}
              <SecondaryButton>Get In touch</SecondaryButton>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;

//           <div className="flex gap-4 justify-center mt-2 z-10 relative">
// {socialItems.map((item) => (
//   <Link to={item.link} key={item.label}>
//     <button className="p-1  px-2  cursor-pointer  md:text-base text-sm  gap-2 shadow">
//       <span className="text-[#007BFF] text-xl">{item.icon}</span>
//     </button>
//   </Link>
// ))}
// </div>
