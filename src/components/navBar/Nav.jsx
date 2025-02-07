import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import darkLogo from "../../assets/dark-logo.png";
import lightLogo from "../../assets/light-logo.png";
import { Link, useLocation } from "react-router";

function Nav() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const links = [
    {
      label: "Home",
      id: "932874987239784",
      path: location.pathname.includes("projects") ? "/" : "home",
    },
    { label: "About", id: "934539784", path: "about" },
    { label: "Tech Stack", id: "9328747239784", path: "tech" },
    { label: "Projects", id: "932874939784", path: "projects" },
    { label: "Contact", id: "93287499784", path: "contact" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when navigating to a new page
  useEffect(() => {
    setOpenDropDown(false);
  }, []);

  return (
    <nav className="py-5 dark:border-b dark:border-b-gray-600/50 mb-8  sticky top-0 dark:bg-[#0B0B0B] z-50 max-w-7xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14">
      <div className="flex justify-between items-center relative ">
        {/* Brand Logo */}
        <div>
          <Link to={"/"}>
            <img
              src={true ? darkLogo : lightLogo}
              className="md:h-9 h-7 cursor-pointer"
              alt="brand logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="md:block hidden">
          <ul className="flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={
                  location.pathname.includes("projects") ? "/" : `#${link.path}`
                }
              >
                <li className="py-2 px-4 hover:dark:bg-[#4141425d] active:dark:bg-[#414142ce] font-semibold cursor-pointer rounded-md text-base">
                  {link.label}
                </li>
              </a>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <label className="btn-circle swap swap-rotate md:hidden z-50">
          <input
            type="checkbox"
            checked={openDropDown}
            onChange={(e) => setOpenDropDown(e.target.checked)}
          />

          {/* Hamburger Icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* Close Icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {/* Mobile Dropdown Menu with Smooth Animation */}
        <AnimatePresence>
          {openDropDown && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full bg-black/90 backdrop-blur-md shadow-md mt-10 z-40 rounded-lg"
            >
              <ul className="flex flex-col py-4">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={
                      location.pathname.includes("projects")
                        ? "/"
                        : `#${link.path}`
                    }
                  >
                    <li
                      className="py-4 px-4 hover:dark:bg-[#4141425d] active:dark:bg-[#414142ce] font-semibold cursor-pointer rounded-md text-base"
                      onClick={() => setOpenDropDown(false)}
                    >
                      {link.label}
                    </li>
                  </a>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Nav;
