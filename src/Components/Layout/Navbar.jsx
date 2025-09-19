import {
  Bell,
  Filter,
  Menu,
  Moon,
  Plus,
  Search,
  Settings,
  Sun,
} from "lucide-react";
import { MenuContext } from "../../Context/MenuContext";
import { useContext } from "react";
import { useTheme } from "../../Context/DarkMode";

export default function Navbar() {
  const { toggleMenu } = useContext(MenuContext);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-white/80 p-6 dark:bg-slate-900/80 backdrop-blur-2xl  border-b   border-slate-200/50 dark:border-slate-700/50 py-4 px-6">
      <div className="flex items-center justify-between ">
        {/* left side  */}
        <div className="flex items-center space-x-4 ">
          <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 ">
            <Menu
              className="w-5 h-5 duration-300 transition-all"
              onClick={() => {
                toggleMenu();
              }}
            />
          </button>

          <div className="hidden lg:block">
            <h1 className="text-xl font-medium text-slate-700 dark:text-white">
              Dashboard
            </h1>
            <p className=" text-slate-600 dark:text-slate-400 font-serif text-[12px]">
              Welcome back , Alex ! here's what's happening today .
            </p>
          </div>
        </div>
        {/* center  */}
        <div className=" flex-1 max-w-md mx-8 space-x-2  ">
          <div className="relative">
            <Search className="w-5 h-5 absolute text-slate-600 dark:text-slate-200 top-1/2  left-3 transform -translate-y-1/2  " />

            <input
              type="search"
              className="w-full px-5 py-2 focus:outline-none no-search-cancel bg-slate-100 pl-10 dark:bg-slate-800 border-slate-200 dark:border-slate-800  rounded-lg text-slate-800 dark:text-white placeholder-slate-600  focus:ring-2 focus:ring-blue-400  transition-all"
            />

            <Filter className="w-5 h-5 absolute text-slate-600 dark:text-slate-200 top-1/2  right-2 transform -translate-y-1/2 hover:text-slate-300 dark:hover:bg-slate-600 duration-300 " />
          </div>
        </div>

        {/* right */}

        <div className="  items-center justify-center space-x-3  lg:flex hidden">
          <button className=" flex items-center justify-center bg-gradient-to-r cursor-pointer from-blue-500  to-purple-600 space-x-2 py-2 px-4 text-white rounded-xl hover:shadow-2xl transition-all">
            <Plus className="w-4 h-4  " />
            <span className=" text-sm font-medium">New</span>
          </button>

          <button
            onClick={() => {
              toggleTheme();
            }}
            className=" flex items-center justify-center   dark:stroke-slate-200  cursor-pointer text-slate-600 rounded-xl hover:shadow-2xl transition-all"
          >
            {darkMode ? (
              <Sun className="w-5 h-5  dark:text-slate-200" />
            ) : (
              <Moon className="w-5 h-5  dark:text-slate-200" />
            )}
          </button>

          <button className=" relative  flex items-center justify-center  dark:stroke-slate-200  cursor-pointer text-slate-600 rounded-xl hover:shadow-2xl transition-all">
            <Bell className="w-5 h-5  dark:text-slate-200" />
            <span className="absolute -top-2 text-sm w-5 h-5 bg-red-500 text-white rounded-full">
              3
            </span>
          </button>

          <button className="flex items-center justify-center dark:stroke-slate-200 cursor-pointer text-slate-600 rounded-xl hover:shadow-2xl transition-all">
            <Settings className="w-5 h-5  dark:text-slate-200" />
          </button>

          <div className="flex border-l  items-center justify-center space-x-3  border-slate-200/50 dark:border-slate-700/50">
            <img
              src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
              alt="user"
              loading="lazy"
              className="w-7 h-7 rounded-full ring-2 ring-blue-500 object-fill"
            />

            <div className="flex items-center justify-center flex-col">
              <p className="text-sm  text-slate-800 dark:text-white  ">
                Abdallah Atef
              </p>

              <p className="font-medium text-slate-500 text-sm dark:text-slate-400 truncate">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
