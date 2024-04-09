import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandName, setBrandName] = useState("Dipayan Bhattacharjee");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "/hire-me",
  });

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        {/* Hamburger menu button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Brand name */}
        <div className="hidden lg:inline-block">
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        {/* Menu links */}
        <div className="hidden lg:flex lg:justify-center lg:flex-grow space-x-6">
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>

        {/* Download CV button */}
        <div>
          <a
            href={actionButton.link}
            className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl"
          >
            {actionButton.title}
          </a>
        </div>
      </div>

      {/* Sidebar menu */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        {/* Render menu links */}
        {menuLinks.map((link) => (
          <a key={link.id} href={link.link} className="block py-2 px-4 hover:bg-gray-200">{link.title}</a>
        ))}
      </div>
    </>
  );
};

export default Header;
