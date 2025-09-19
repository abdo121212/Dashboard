import {
  ArrowLeftRight,
  Calendar,
  ChartColumnIncreasing,
  ChevronDown,
  ChevronUp,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShoppingBag,
  SquareActivity,
  UserRound,
  Zap,
} from "lucide-react";
import { useContext, useState } from "react";
import { MenuContext } from "../../Context/MenuContext";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [analytics, setAnalytics] = useState(false);
  const [user, setUser] = useState(false);
  const [ecommerce, setEcommerce] = useState(false);

  console.log("analytics", analytics);
  console.log("user", user);
  console.log("ecommerce", ecommerce);

  const { isOpen } = useContext(MenuContext);

  return (
    <aside
      className={`   ${
        isOpen ? "w-72" : "w-20"
      } duration-300   ease-in-out transition-all bg-white  dark:bg-slate-900/80 backdrop-blur-2xl border-l border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* logo  */}

      <div className=" p-[18px]  border-slate-200/50  dark:border-slate-700/50 ">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-r  from-blue-600 to-purple-600  rounded-xl flex items-center justify-center shadow-lg ">
            <Zap className="w-5 h-5  text-white" />
          </div>
          {isOpen && (
            <div>
              <h1 className="text-lg font-medium text-slate-800 dark:text-white ">
                Nexus
              </h1>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* navigation */}

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto dark:scrollbar-thin  dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
        <div className=" flex flex-col space-y-2 ">
          {/* Dashborad */}

          <NavLink to={"/"}>
            <div className="flex items-center justify-start space-x-4  dark:text-slate-200  p-3 rounded-xl cursor-pointer">
              <LayoutDashboard size={20} />

              {isOpen && (
                <div className="flex  justify-evenly items-center space-x-4">
                  <h1 className="font-medium">Dashboard</h1>

                  <p className=" bg-red-500 rounded-lg px-3 text-[12px] py-1">
                    New
                  </p>
                </div>
              )}
            </div>
          </NavLink>
          {/* analytic */}

          <NavLink
            onClick={() => {
              setAnalytics(!analytics);
            }}
            to={"/analytics"}
            className="flex il-sidebar  items-center il-sidebar cursor-pointer justify-between space-x-4 p-3 rounded-xl text-slate-500 transition-all duration-300"
          >
            <div className="flex items-center  space-x-4">
              <ChartColumnIncreasing size={20} />
              {isOpen && <h1 className="font-medium">Analytics</h1>}
            </div>

            {isOpen && (
              <div className="flex  justify-evenly items-center space-x-4 ">
                {analytics ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            )}
          </NavLink>

          {isOpen && analytics && (
            <ul className="space-y-3">
              <li className="il-analytics ">Over view </li>
              <li className="il-analytics ">Reports</li>
              <li className="il-analytics ">Inisghts</li>
            </ul>
          )}
          {/* user */}

          <NavLink
            to={"/user"}
            onClick={() => {
              setUser(!user);
            }}
            className="flex il-sidebar items-center cursor-pointer justify-between space-x-4 p-3 rounded-xl text-slate-500 transition-all duration-300"
          >
            <div className="flex items-center  space-x-4">
              <UserRound />
              {isOpen && (
                <>
                  <h1 className="font-medium">Users</h1>
                  <p className=" bg-gray-300 text-[12px] rounded-2xl w-10 flex items-center justify-center text-slate-800 ">
                    2.4K
                  </p>{" "}
                </>
              )}
            </div>

            {isOpen && (
              <div className="flex  justify-evenly items-center space-x-4 ">
                {user ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            )}
          </NavLink>

          {isOpen && user && (
            <ul className="space-y-3">
              <li className="il-analytics">All Users Roles</li>
              <li className="il-analytics">Permissions</li>
              <li className="il-analytics">User activity</li>
            </ul>
          )}

          {/* E-commerce */}

          <NavLink
            to={"/ecommerce"}
            onClick={() => {
              setEcommerce(!ecommerce);
            }}
            className="flex il-sidebar  items-center cursor-pointer justify-between space-x-4 p-3 rounded-xl text-slate-500 "
          >
            <div className="flex items-center  space-x-4">
              <ShoppingBag />
              {isOpen && <h1 className="font-medium"> E-commerce</h1>}
            </div>

            {isOpen && (
              <div className="flex  justify-evenly items-center space-x-4 ">
                {ecommerce ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            )}
          </NavLink>

          {isOpen && ecommerce && (
            <ul className="space-y-3">
              <li className="il-analytics">Products</li>
              <li className="il-analytics">Order</li>
              <li className="il-analytics">Customers</li>
            </ul>
          )}

          {/* inventory */}

          <NavLink to={"/inventory"} className="il-sidebar">
            <div className="flex items-center  space-x-4">
              <SquareActivity size={20} />
              {isOpen && (
                <>
                  <h1 className="font-medium">inventory</h1>

                  <p className="text-sm bg-gray-300  rounded-2xl w-10 flex items-center justify-center text-slate-800">
                    847
                  </p>
                </>
              )}
            </div>
          </NavLink>
          {/* transactions */}

          <NavLink to={"/transactions"} className="il-sidebar ">
            <div className="flex items-center  space-x-4">
              <ArrowLeftRight size={20} />

              {isOpen && <h1 className="font-medium">Transactions</h1>}
            </div>
          </NavLink>

          {/* message */}

          <NavLink to={"/message"} className="il-sidebar ">
            <div className="flex items-center  space-x-4">
              <MessageSquare size={20} />
              {isOpen && (
                <>
                  <h1 className="font-medium">Message</h1>
                  <p className="text-[12px] bg-red-600  rounded-full w-5 h-5 text-white flex items-center justify-center">
                    12
                  </p>{" "}
                </>
              )}
            </div>
          </NavLink>

          {/* calender */}

          <NavLink to={"/calender"} className="il-sidebar ">
            <div className="flex items-center  space-x-4">
              <Calendar size={20} />

              {isOpen && <h1 className="font-medium">Calender</h1>}
            </div>
          </NavLink>

          {/* report */}

          <NavLink to={"/report"} className="il-sidebar">
            <div className="flex items-center  space-x-4">
              <FileText size={20} />

              {isOpen && <h1 className="font-medium">Report</h1>}
            </div>
          </NavLink>

          {/* Setting*/}

          <NavLink to={"setting"} className="il-sidebar ">
            <div className="flex items-center  space-x-4">
              <Settings size={20} />

              {isOpen && <h1 className="font-medium">Setting</h1>}
            </div>
          </NavLink>
        </div>
      </nav>

      {/* user Profile */}

      <div className="flex  p-4 il-sidebar items-center justify-center space-x-3 border-t border-slate-200/50 dark:border-slate-700/50">
        <img
          src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
          alt="user"
          loading="lazy"
          className="w-10 h-10 rounded-full ring-2 ring-blue-500 object-fill"
        />

        {isOpen && (
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm font-medium text-slate-800 dark:text-white  truncate">
              Abdallah Atef
            </p>

            <p className="font-medium text-slate-500 text-sm dark:text-slate-400 truncate">
              Administrator
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
