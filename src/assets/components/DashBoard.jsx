import React from "react";
import TeamEarningsCard from "./TeamEarningsCard";
import TaskListCard from "./TaskListCard";
import TeamRatingCard from "./TeamRatingCard";
// import PerformanceCard from "./PerformanceCard";
import DayActivityCard from "./DayActivityCard";

function Dashboard() {
  return (
    <div className="bg-neutral-900 min-h-screen p-6 flex flex-col gap-4 overflow-hidden">

      <div className="flex gap-4">
        <TeamEarningsCard />
        <TaskListCard />
      </div>
     
      <div className="flex gap-4">
        <TeamRatingCard />
        {/* <PerformanceCard /> */}
        {/* <DayActivityCard /> */}
      </div>
    </div>
  );
}

export default Dashboard;
