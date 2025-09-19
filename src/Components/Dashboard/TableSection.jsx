import { TrendingDown, TrendingUp } from "lucide-react";

const TableSection = () => {
  const recentOrder = [
    {
      id: "#fb00fb77",
      customer: "Abdallah",
      products: "MacBook Pro 16",
      amount: "$2,399",
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "#08068a77",
      customer: "Anis",
      products: "iphone 12 Pro",
      amount: "$1000",
      status: "cancelled",
      date: "2024-01-11",
    },
    {
      id: "#1183b8",
      customer: "Ahmed",
      products: "MacBook Pro 16",
      amount: "$2,399",
      status: "Pending",
      date: "2024-01-21",
    },
    {
      id: "#f0f000",
      customer: "Sarah",
      products: "iphone 16 Pro",
      amount: "$1,399",
      status: "Pending",
      date: "2024-01-2",
    },
    {
      id: "#7802ff",
      customer: "Aly",
      products: "iphone Pro 15 ",
      amount: "$1,199",
      status: "completed",
      date: "2024-01-5",
    },
    {
      id: "#ddf",
      customer: "Mohamed",
      products: "AirPods Pro",
      amount: "$299",
      status: "completed",
      date: "2024-01-1",
    },
    {
      id: "#f3008d",
      customer: "Mona",
      products: "ipad Air",
      amount: "$599",
      status: "cancelled",
      date: "2024-01-13",
    },
  ];

  const topProducts = [
    {
      name: "MacBook Pro 16",
      sales: 1238,
      revenue: "$2,989,590",
      trend: "up",
      change: "+12%",
    },

    {
      name: "iphone 15 Pro",
      sales: 2138,
      revenue: "$2,489,590",
      trend: "up",
      change: "+8%",
    },

    {
      name: "AirPods pro",
      sales: 9121,
      revenue: "$849,590",
      trend: "up",
      change: "+14%",
    },

    {
      name: "ipad Pro",
      sales: 3218,
      revenue: "$890,590",
      trend: "down",
      change: "-3%",
    },
    {
      name: "ipad Air",
      sales: 956,
      revenue: "$591,190",
      trend: "up",
      change: "+15%",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";

      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

      case "Pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400";
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3  gap-6 select-none ">
      <div className="bg-white dark:bg-slate-800 col-span-3  backdrop-blur-xl rounded-2xl p-6 border  border-slate-200/50 dark:border-slate-700/50  w-full">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-xl dark:text-slate-100">
              Recent Order
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-100">
              latest customer order{" "}
            </p>
          </div>

          <div className="text-lg text-blue-400 font-medium">View All</div>
        </div>
        <div className="mt-5 overflow-auto">
          <table className="w-full border-separate border-spacing-y-3 ">
            <thead className="text-slate-100">
              <tr className="bg-gray-100 dark:bg-slate-700 rounded-b-2xl ">
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Products</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody className="overflow-auto">
              {recentOrder.map(
                ({ id, customer, products, amount, status, date }) => (
                  <tr key={id} className="dark:bg-slate-800 text-slate-200">
                    <td className="border-b text-center border-gray-100 p-4">
                      {id}
                    </td>
                    <td className="border-b text-center border-gray-100 p-4">
                      {customer}
                    </td>
                    <td className="border-b text-center border-gray-100 p-4">
                      {products}
                    </td>
                    <td className="border-b text-center border-gray-100 p-4">
                      {amount}
                    </td>
                    <td
                      className={`border-b text-center border-gray-100  ${getStatusColor(
                        status
                      )} rounded-4xl `}
                    >
                      {status}
                    </td>
                    <td className="border-b text-center border-gray-100 p-4">
                      {date}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="bg-white dark:bg-slate-900 col-span-3  backdrop-blur-xl rounded-2xl p-6 border  border-slate-200/50 dark:border-slate-700/50  w-full 
      
      "
      >
        <div className="flex items-center justify-between border-b border-slate-100py-4">
          <div className="space-y-3">
            <h3 className="font-bold text-lg dark:text-slate-100">
              Top Products
            </h3>
            <p className="text-blue-400 text-lg dark:text-slate-200">
              View All{" "}
            </p>
          </div>

          <p className="text-slate-400 text-lg dark:text-slate-200">
            Best Performing Products
          </p>
        </div>

        {topProducts.map(({ name, sales, revenue, trend, change }) => (
          <div
            key={sales}
            className="flex items-center justify-between mt-5 py-4 hover:bg-amber-100 px-5 dark:hover:bg-slate-600 rounded-2xl cursor-pointer"
          >
            <div className="flex space-y-3 flex-col ">
              <h4 className="text-lg font-medium dark:text-slate-200">
                {name}{" "}
              </h4>
              <p className="text-slate-500 dark:text-slate-300">{sales}$</p>
            </div>
            <div className="flex space-y-3 flex-col items-center">
              <h4 className="dark:text-slate-200 font-medium text-lg">
                {revenue}
              </h4>
              <div className="text-sm ">
                {trend === "up" ? (
                  <div className="text-green-400 flex items-center space-x-1.5 text-lg">
                    <TrendingUp size={15} />

                    <h4>{change}</h4>
                  </div>
                ) : (
                  <div className="text-red-400 flex items-center space-x-1.5 text-lg">
                    <TrendingDown size={15} />

                    <h4>{change}</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSection;
