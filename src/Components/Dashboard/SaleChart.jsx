import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const SaleChart = () => {
  const data = [
    { id: 1, name: "Electronics", value: 45, color: "#3b82f6" },
    { id: 2, name: "Clothing", value: 30, color: "#8b5cf6" },
    { id: 3, name: "Books", value: 15, color: "#10b981" },
    { id: 4, name: "Other", value: 10, color: "#f59e0b" },
  ];
  return (
    <div className="bg-white dark:bg-slate-900  backdrop-blur-xl rounded-2xl p-6 border  border-slate-200/50 dark:border-slate-700/50  ">
      <div className="mb-6 ">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 ">
          Sales By category{" "}
        </h3>
        <p className="text-slate-600 dark:text-slate-300">Production Distrbution</p>
      </div>

      <div className="h-48">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={data}
              cy="50%"
              cx="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey={"value"}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className=" flex items-start  flex-col   gap-y-4 ">
        {data.map(({ id, color, name, value }) => (
          <div key={id} className=" flex items-center justify-between w-full">
            <div key={id} className="flex  gap-x-5 items-center justify-center">
              <div
                style={{ backgroundColor: color }}
                className={`w-5 h-5  rounded-full `}
              ></div>

              <div className="text-md font-medium dark:text-slate-100">{name}</div>
            </div>

            <div className="text-md font-medium dark:text-slate-100">{value} %</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleChart;
