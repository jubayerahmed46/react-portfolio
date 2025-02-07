import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <div className="mt-16 flex flex-col justify-center items-center">
      <div className="md:w-[450px] text-center">
        <h1 className="text-4xl font-bold">Let’s Talk</h1>
        <p className="text-base dark-gray mt-6">
          I'm currently specializing in{" "}
          <span className="text-[#007BFF]">Front-end Development</span>. Feel
          free to get in touch and talk more about your projects.
        </p>
      </div>

      {/* Contact Information */}
      <div className="mt-6 text-lg border border-gray-500/40 rounded-md p-5 flex flex-col gap-3 w-[90%] md:w-[450px]">
        {/* WhatsApp */}
        <a
          href="https://wa.me/8801875329737"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 items-center text-[#0acd2e] bg-[#202020] p-1.5 rounded-xl px-4 hover:opacity-80 transition"
        >
          <FaWhatsapp className="text-3xl" />
          <p className="text-lg">+880 1875 329737</p>
        </a>

        {/* Phone */}
        <a
          href="tel:01313698464"
          className="flex gap-3 items-center text-[#0a72cd] bg-[#202020] p-1.5 rounded-xl px-4 hover:opacity-80 transition"
        >
          <FaPhoneSquareAlt className="text-3xl" />
          <p className="text-lg">+880 01313 698464</p>
        </a>

        {/* Email */}
        <a
          href="mailto:jubayerahmed.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 items-center text-[#b6cd0a] bg-[#202020] p-1.5 rounded-xl px-4 hover:opacity-80 transition"
        >
          <CgMail className="text-3xl" />
          <p className="text-lg">jubayerahmed.dev@gmail.com</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
