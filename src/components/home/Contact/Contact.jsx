import Heading from "../../heading/Heading";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router";
import Form from "./Form";
import { motion } from "motion/react";

function Contact() {
  const socialLinks = [
    {
      id: "e",
      label: "Email",
      to: "mailto:jubayerahmed.dev@gmail.com",
      value: "jubayerahmed.dev@gmail.com",
      icon: <MdEmail size={26} />,
    },
    {
      id: "li",
      label: "LinkedIn",
      value: "jubayer-ahmed1",
      to: "https://www.linkedin.com/in/jubayer-ahmed1/",
      icon: <FaLinkedin size={26} />,
    },
    {
      id: "wa",
      label: "What's App",
      value: "+880 1875329737",
      to: "https://wa.me/8801875329737",
      icon: <IoLogoWhatsapp size={26} />,
    },
  ];
  return (
    <section className="md:mt-28 mt-16" id="contact">
      <Heading title={"Contact"} subTitle={"Connect with Me"} />
      <motion.div
        initial={{ opacity: 0, translateY: "30px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        viewport={{ once: true }}
        className=" flex flex-col justify-center items-center bg-gradient-to-t to-black/30 p-4 rounded-md from-transparent"
      >
        <div className="grid md:grid-cols-2 ">
          <div className="md:border-r md:border-gray-500/15 md:pr-7 ">
            <p className="dark-gray mb-11">
              I'd be happy to connect! Feel free to reach out for project
              inquiries, collaboration opportunities, or any other questions you
              may have.
            </p>
            <div className="flex flex-col gap-5">
              {socialLinks.map((link) => (
                <Link key={link.id} to={link.to} target="_blank">
                  <div className="flex gap-4 items-center cursor-pointer">
                    <div className="bg-[#007bff7d] flex justify-center items-center rounded-md h-10 aspect-square">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base ">{link.label}</h3>
                      <p className="dark-gray">{link.value}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:pl-10">
            <Form />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
