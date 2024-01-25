import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const Navbar = () => {
  
  const {systemTheme, setTheme, theme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="flex flex-row items-center gap-1">
          <FaSun />
          <p className="font-[600]">Dark Mode</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-row items-center gap-1">
          <FaMoon />
          <p className="font-[600]">Light Mode</p>
        </div>
        
      )
      
      ;
    }
  };



  return (
    <div className="flex px-8 bg-[#f1f1f1] dark:bg-[#1f2937]  flex shadow-xl py-4 flex-row justify-between align-middle z-20 fixed w-full">
      <div>
        <h3 className="font-[600] text-xl">Where in the world?</h3>
      </div>
      <div className="">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className=""
        >
          {themeBox()}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
