import { Link, useLocation } from "react-router";

function Nav() {
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

  return (
    <nav className="py-3 dark:border-b dark:border-b-gray-600/50   sticky top-0 dark:bg-[#0B0B0B] z-50 max-w-7xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14  mb-10">
      <div className="flex justify-between items-center relative ">
        {/* Brand Logo */}
        <div>
          <Link to={"/"}>
            <h2 className="font-bold text-2xl">J / A</h2>
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
                <li className="py-2 px-4 hover:opacity-70 cursor-pointer  text-base">
                  {link.label}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
