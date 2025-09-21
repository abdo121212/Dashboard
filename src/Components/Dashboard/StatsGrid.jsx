import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Line } from "rc-progress";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="bg-white/80 dark:bg-slate-900/80 flex-1 dark:text-slate-100 backdrop-blur-2xl rounded-2xl p-6 border space-y-5 border-slate-200/50 dark:border-slate-200/20 dark:hover:shadow-slate-900/20  transition-all duration-300  hover:shadow-[#04B05A] shadow-2xl">
        <h4 className="text-slate-600 font-medium sm:text-xl text-md dark:text-slate-100">
          Total Revenue
        </h4>

        <div className="flex items-center justify-between">
          <h2 className="sm:font-bold font-medium   sm:text-2xl text-md dark:text-slate-100 ">
            $124,563
          </h2>
          <div className="  bg-green-200  rounded-lg w-10 flex items-center justify-center h-10">
            <DollarSign className="text-green-400" />
          </div>
        </div>

        <div className="flex space-x-2 items-center justify-start ">
          <ArrowUpRight size={20} className="text-green-500 " />

          <h5 className="text-green-500 text-lg ">+12.5%</h5>
          <span className="text-slate-600 dark:text-slate-100 max-sm:text-sm ">
            Vs last month
          </span>
        </div>

        <Line percent={70} strokeWidth={3} strokeColor="#05DF72" />
      </div>

      <div className="bg-white/80  dark:text-slate-100 dark:bg-slate-900/80 flex-1 backdrop-blur-2xl rounded-2xl p-6 border space-y-5 border-slate-200/50 dark:border-slate-200/20 dark:hover:shadow-slate-900/20  transition-all duration-300  hover:shadow-[#0000FF] shadow-2xl">
        <h4 className="text-slate-600 font-medium sm:text-xl text-md dark:text-slate-100">
          Active User
        </h4>

        <div className="flex items-center justify-between">
          <h2 className="sm:font-bold font-medium   sm:text-2xl text-md dark:text-slate-100 ">
            8,549
          </h2>
          <div className="  bg-blue-200  rounded-lg w-10 flex items-center justify-center h-10">
            <Users2 className="text-blue-400 " />
          </div>
        </div>

        <div className="flex space-x-2 items-center justify-start">
          <ArrowUpRight size={20} className="text-blue-500 " />

          <h5 className="text-blue-500 text-lg">+8.2%</h5>
          <span className="text-slate-600 dark:text-slate-100 max-sm:text-sm">
            Vs last month
          </span>
        </div>

        <Line percent={90} strokeWidth={3} strokeColor="blue" />
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 flex-1 backdrop-blur-2xl rounded-2xl p-6 border space-y-5 border-slate-200/50 dark:border-slate-200/20 dark:hover:shadow-slate-900/20  transition-all duration-300  hover:shadow-[#A800B7] shadow-2xl">
        <h4 className="text-slate-600 font-medium sm:text-xl text-md dark:text-slate-100">
          Total Orders
        </h4>

        <div className="flex items-center justify-between">
          <h2 className="sm:font-bold font-medium   sm:text-2xl text-md dark:text-slate-100 ">
            $2,824
          </h2>
          <div className="  bg-fuchsia-400  rounded-lg w-10 flex items-center justify-center h-10">
            <ShoppingCart className="text-fuchsia-700 " />
          </div>
        </div>

        <div className="flex space-x-2 items-center justify-start">
          <ArrowUpRight size={20} className="text-fuchsia-400" />

          <h5 className="text-fuchsia-400 sm:text-xl text-sm">+15.9%</h5>
          <span className="text-slate-600 dark:text-slate-100 max-sm:text-sm">
            Vs last month
          </span>
        </div>

        <Line percent={75} strokeWidth={3} strokeColor="#A800B7" />
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 flex-1 backdrop-blur-2xl rounded-2xl p-6 border space-y-5 border-slate-200/50 dark:border-slate-200/20 dark:hover:shadow-slate-900/20  transition-all duration-300  hover:shadow-[#FF8904] shadow-2xl">
        <h4 className="text-slate-600 font-medium sm:text-xl text-md dark:text-slate-100">
          Page View
        </h4>

        <div className="flex items-center justify-between">
          <h2 className="sm:font-bold font-medium   sm:text-2xl  text-md dark:text-slate-100 ">
            $124,563
          </h2>
          <div className="  bg-orange-200  rounded-lg w-10 flex items-center justify-center h-10">
            <Eye className="text-orange-400" />
          </div>
        </div>

        <div className="flex space-x-2 items-center justify-start ">
          <ArrowDownRight size={20} className="text-orange-500 " />

          <h5 className="text-orange-500 sm:text-xl text-sm">-2.1%</h5>
          <span className="text-slate-600 dark:text-slate-100 max-sm:text-sm">
            Vs last month
          </span>
        </div>

        <Line percent={20} strokeWidth={3} strokeColor="#FF8904" />
      </div>
    </div>
  );
};

export default StatsGrid;
