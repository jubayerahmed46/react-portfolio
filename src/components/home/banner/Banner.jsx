import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import graphic from "../../../assets/graphic.svg";
import myPic from "../../../assets/me.jpg";
import { Link } from "react-router";

function Banner() {
  const socialItems = [
    {
      label: "Github",
      link: "https://github.com/jubayerahmed46",
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      link: "/",
      icon: <FaLinkedin />,
    },
    {
      label: "Facebook",
      link: "/",
      icon: <FaFacebook />,
    },
  ];

  return (
    <div
      className="flex lg:flex-row flex-col gap-10  lg:gap-16 xl:gap-36  items-center mt-20"
      id="home"
    >
      <div className="relative">
        <img
          src={graphic}
          alt="Graphic"
          className="absolute z-0 -top-5 -left-10 h-32   dark:contrast-75"
        />

        <h3 className="md:text-3xl text-xl text-[#007BFF] font-semibold z-10 relative">
          Hey there!, I&apos;m-
        </h3>
        <h1 className="md:text-7xl text-4xl  font-extrabold z-10 relative">
          Jubayer Ahmed.
        </h1>
        <p className="md:text-2xl text-xl my-8 lg:w-xl z-10 relative">
          <span className="font-medium">A Frontend Web Developer,</span>{" "}
          <span className="dark-gray">
            focused on developing innovative web applications.
          </span>
        </p>
        <div className="w-auto">
          <div className="flex gap-4 z-10 relative">
            {socialItems.map((item) => (
              <Link to={item.link} key={item.label}>
                <button className="md:py-2 p-1 md:px-4 px-2 dark:bg-[#4141425d] hover:dark:bg-[#4141427d] cursor-pointer rounded-md md:text-base text-sm flex justify-center items-center gap-2 shadow">
                  <span className="text-[#007BFF] text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </Link>
            ))}
          </div>
          <div className="flex gap-4 ">
            <button className=" py-2 px-7  rounded-full bg-black shadow-sm my-6 md:text-lg t flex justify-center gap-2 items-center font-medium shadow-gray-700 cursor-pointer z-10 relative">
              View Resume{" "}
              <span>
                <FaDownload />
              </span>
            </button>
            <button className=" py-1 px-7 rounded-md bg-black  text-lg my-6 border border-gray-400/60 font-medium shadow-gray-700 cursor-pointer z-10 relative">
              About Me
            </button>
          </div>
        </div>
      </div>
      <div className="grid  justify-center">
        <div>
          <img
            src={myPic}
            alt="my image"
            className=" md:h-80 h-64 aspect-square  rounded-full border-white border-4 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
