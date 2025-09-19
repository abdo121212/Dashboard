import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const RevenueChart = () => {
  const data = [
    { month: "Jan", revenue: 450000, expenses: 320000 },
    { month: "Feb", revenue: 520000, expenses: 380000 },
    { month: "Mar", revenue: 480000, expenses: 350000 },
    { month: "Apr", revenue: 610000, expenses: 320000 },
    { month: "May", revenue: 550000, expenses: 400000 },
    { month: "Jun", revenue: 670000, expenses: 420000 },
    { month: "Jul", revenue: 720000, expenses: 440000 },
    { month: "Aug", revenue: 690000, expenses: 520000 },
    { month: "Sep", revenue: 830000, expenses: 550000 },
    { month: "Oct", revenue: 880000, expenses: 540000 },
    { month: "Nov", revenue: 770000, expenses: 450000 },
    { month: "Dec", revenue: 790000, expenses: 770000 },
  ];

  return (
    <>
      <div className="bg-white rounded-2xl  backdrop-blur-xl dark:bg-slate-800 ">
        <div className="p-5">
          <div className="flex justify-between ">
            <div className="sm:text-sm lg:text-lg">
              <h1 className="text-lg font-medium dark:text-slate-100">
                Revenue Chart
              </h1>
              <p className="text-slate-600 dark:text-slate-100">
                Monthly revenue and expenses
              </p>
            </div>

            <div className="flex items-center space-x-2 gap-2  flex-col  lg:flex-row">
              <div className="flex items-center space-x-2 ">
                <div
                  className={`w-3 h-3
                   bg-[#7a41eb]  rounded-full`}
                ></div>
                <div className="text-lg font-[500] dark:text-slate-100">
                  Revenue
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#999] rounded-full"></div>
                <div className="text-lg font-[500] dark:text-slate-100">
                  Expenses
                </div>
              </div>
            </div>
          </div>

          <div className="h-[370px] ">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={200}
                data={data}
                margin={{
                  top: 30,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e2e8f0"
                  opacity={0.3}
                />
                <XAxis
                  dataKey="month"
                  stroke="#64748b"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  dataKey="revenue"
                  fontSize={12}
                  axisLine={false}
                  stroke="#64748b"
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,.95)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 40px  rgba(0,0,0,0.1)",
                  }}
                />
                <Bar dataKey="revenue" fill="#7a41eb" />
                <Bar dataKey="expenses" fill={`#9999`} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueChart;
