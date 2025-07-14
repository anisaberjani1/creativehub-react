import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Theme App</h1>
      <ThemeButton />
    </div>
  );
};

export default Header;
