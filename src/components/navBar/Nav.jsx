import darkLogo from "../../assets/dark-logo.png";
import lightLogo from "../../assets/light-logo.png";

function Nav() {
  const links = [
    { label: "Home", id: "932874987239784" },
    { label: "About", id: "934539784" },
    { label: "Tech Stack", id: "9328747239784" },
    { label: "Projects", id: "932874939784" },
    { label: "Contact", id: "93287499784" },
  ];
  return (
    <nav className="py-5 dark:border-b dark:border-b-gray-600/50 mb-8 ">
      <div className="flex justify-between items-center">
        {/* brand logos */}
        <div>
          <img
            src={true ? darkLogo : lightLogo}
            className="md:h-9 h-7"
            alt="brand logo"
          />
        </div>
        {/* nav links */}
        <div>
          <ul className="flex ">
            {links.map((link) => (
              <li
                key={link.id}
                className="py-2 px-4 hover:dark:bg-[#4141425d] active:dark:bg-[#414142ce] font-semibold cursor-pointer rounded-md   text-base"
              >
                {" "}
                {link.label}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
