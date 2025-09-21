import {
  Bell,
  CreditCard,
  Settings,
  ShoppingCart,
  Timer,
  User,
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "user",
    Icon: User,
    title: "New User registered",
    description: "John Smith created an account",
    time: "2 minutes ago",
    color: "text-blue-500",
    bgColor: "bg-blue-500/30 dark:bg-blue-900/30",
  },
  {
    id: 2,
    type: "order",
    Icon: ShoppingCart,
    title: "New Order received",
    description: "Order #2413 for $2,399",
    time: "5 minute ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/30 dark:bg-emerald-900/30",
  },
  {
    id: 3,
    type: "payment",
    Icon: CreditCard,
    title: "Payment Processed",
    description: "Payment of $1,199 completed",
    time: "12 minute ago",
    color: "text-purple-500",
    bgColor: "bg-purple-500/30 dark:bg-purple-900/30",
  },
  {
    id: 4,
    type: "system",
    Icon: Settings,
    title: "system Update",
    description: "database backup completed",
    time: "1 hours ago",
    color: "text-orange-500",
    bgColor: "bg-orange-500/30 dark:bg-orange-900/30",
  },
  {
    id: 5,
    type: "notification",
    Icon: Bell,
    title: "low stock alert",
    description: "iphone 15 pro stock is low",
    time: "2 hours ago",
    color: "text-red-500",
    bgColor: "bg-red-500/30 dark:bg-red-900/30",
  },
];
const ActivityFeed = () => {
  return (
    <div className="select-none">
      <div className="bg-white dark:bg-slate-900  backdrop-blur-xl rounded-2xl p-6 border  border-slate-200/50 dark:border-slate-700/50 ">
        <div className="space-y-2 border-b border-slate-200 dark:text-slate-200">
          <h4 className="sm:font-bold font-medium  sm:text-lg text-sm">
            Activity Feed
          </h4>
          <p className="text-slate-500 sm:font-medium font-sans  text-[14px] sm:text-sm  ">
            Recent System Activity
          </p>
          <h5 className="hover:text-blue-600  text-lg duration-300  sm:font-medium font-sans  text-[14px] sm:text-sm ">
            View All
          </h5>
          <br />
        </div>

        <div className="p-10">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-x-5 mt-8">
              <div
                className={`${activity.color} w-10 h-10 ${activity.bgColor} flex items-center justify-center rounded-2xl`}
              >
                <activity.Icon />
              </div>
              <div className="flex space-y-1 flex-col items-start  dark:text-slate-200 ">
                <h3 className=" font-medium sm:font-medium font-sans  text-sm sm:text-lg ">
                  {activity.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-300 sm:font-medium font-sans  text-[12px] sm:text-sm ">
                  {activity.description}
                </p>
                <div className="flex space-x-1.5 text-slate-600 dark:text-slate-400">
                  <Timer />
                  <h4 className="sm:font-medium font-sans  text-[12px] sm:text-sm ">
                    {activity.time}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
