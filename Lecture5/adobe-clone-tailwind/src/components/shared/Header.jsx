import adobeLogo from "../../assets/adobe-logo.svg";

const navItems = [
  {
    label: "Creativity & Design",
    url: "#",
  },
  {
    label: "PDF & E-signatures",
    url: "#",
  },
  {
    label: "Marketing & Commerce",
    url: "#",
  },
  {
    label: "Learn & Support",
    url: "#",
  },
];

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container flex justify-between items-center px-14">
        <div className="flex items-center gap-10">
          <a href="#">
            <img src={adobeLogo} alt="logo" width={70} />
          </a>
          <nav>
            <ul className="flex gap-10">
              {navItems.map((navItem) => (
                <li>
                  <a className="text-sm" href={navItem.url}>
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button className="border-2 border-gray-300 rounded-3xl py-1.5 px-4 font-semibold text-sm">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
