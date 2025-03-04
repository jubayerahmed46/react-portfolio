import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import myPic from "../../../assets/me.jpg";
import { Link } from "react-router";
import PrimaryButton from "../../btns/PrimaryButton";
import SecondaryButton from "../../btns/SecondaryButton";

function Banner() {
  const socialItems = [
    {
      link: "https://github.com/jubayerahmed46",
      icon: <FaGithub />,
    },
    {
      link: "/",
      icon: <FaLinkedin />,
    },
    {
      link: "/",
      icon: <FaFacebook />,
    },
  ];

  return (
    <div
      className=" flex flex-col items-center   text-center    h-[calc(100vh-250px)] justify-center"
      id="home"
    >
      <div className="grid  justify-center">
        <div>
          <img
            src={myPic}
            alt="my image"
            className=" md:h-64 h-52 aspect-square  rounded-full border-white border-4 object-cover"
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <h1 className="md:text-6xl text-3xl  font-extrabold z-10 relative mt-5">
          Hi!, I'm Jubayer Ahmed.
        </h1>
        <p className="md:text-xl text-lg mx-auto mt-3 lg:w-xl z-10 relative">
          <span className="font-medium">A Frontend Web Developer,</span>{" "}
          <span className="dark-gray">
            focused on developing innovative web applications.
          </span>
        </p>
        <div className="w-auto">
          <div className="flex gap-4 ">
            <PrimaryButton>View Resume</PrimaryButton>
            <SecondaryButton>Get In touch</SecondaryButton>
          </div>
        </div>
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
