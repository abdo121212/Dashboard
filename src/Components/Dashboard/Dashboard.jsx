import  ActivityFeed  from "./ActivityFeed";
import ChartSection from "./ChartSection";
import StatsGrid from "./StatsGrid";
import TableSection from "./TableSection";

export const Dashboard = () => {
  return (
    <section className="p-4 space-y-5  ">
      {/* Status grid */}
      <StatsGrid />

      {/* chart section */}

      <ChartSection />

      {/* Table Section */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 ">
          <TableSection />
        </div>

         <ActivityFeed/>
      </div>
    </section>
  );
};
