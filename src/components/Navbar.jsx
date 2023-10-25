import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const Navbar = () => {
  
  const {systemTheme, setTheme, theme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun />;
    } else {
      return <FaMoon />;
    }
  };



  return (
    <div className="flex p-3 flex-row justify-between align-middle">
      <div>
        <h3>Where in the world?</h3>
      </div>
      <div>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {themeBox()}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
