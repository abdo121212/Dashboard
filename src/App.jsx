import Sidebar from "./Components/Layout/Sidebar";
import Navbar from "./Components/Layout/Navbar";
import { Outlet } from "react-router-dom";
import { useTheme } from "./Context/DarkMode";

export default function App() {
  const { darkMode } = useTheme();

  return (
    <main
      className={` ${
        darkMode && "dark"
      } min-h-screen bg-gradient-to-r transition-all duration-300  from-slate-50 via-5p to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900`}
    >
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />

          <div className="overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
