import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgEditUnmask } from "react-icons/cg";
import graphic from "../../../assets/graphic.svg";
import myPic from "../../../assets/me.jpg";

function Banner() {
  const socialItems = [
    {
      label: "Github",
      link: "/",
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
    <div className="flex lg:gap-36 items-center mt-20">
      <div className="relative">
        <img
          src={graphic}
          alt="Graphic"
          className="absolute z-0 -top-5 -left-10 h-32   dark:contrast-75"
        />

        <h3 className="text-3xl text-[#007BFF] font-semibold z-10 relative">
          Hey there!, I&apos;m-
        </h3>
        <h1 className="text-7xl font-extrabold z-10 relative">
          Jubayer Ahmed.
        </h1>
        <p className="text-2xl my-8 lg:w-xl z-10 relative">
          <span className="font-medium">A Frontend Web Developer,</span>{" "}
          <span className="dark-gray">
            focused on developing innovative web applications.
          </span>
        </p>
        <div className="w-auto">
          <div className="flex gap-4 z-10 relative">
            {socialItems.map((item) => (
              <button
                className="py-2 px-4 dark:bg-[#4141425d] hover:dark:bg-[#4141427d] cursor-pointer rounded-md text-base flex justify-center items-center gap-2 shadow"
                key={item.label}
              >
                <span className="text-[#007BFF] text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
          <button className=" py-2 px-7 rounded-xl my-6 text-xl flex justify-center gap-2 items-center font-medium border border-[#ffffff96] cursor-pointer z-10 relative">
            View Resume
          </button>
        </div>
      </div>
      <div className=" flex justify-center  ">
        <img
          src={myPic}
          alt="my image"
          className="h-80 rounded-full border-white border-4"
        />
      </div>
    </div>
  );
}

export default Banner;
