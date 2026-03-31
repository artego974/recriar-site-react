import React from "react";

const tasks = [
  { icon: "📊", label: "Statistical analysis", date: "Updated: Mar 21, 2022" },
  {
    icon: "🔍",
    label: "Data mining",
    date: "Updated: Mar 4, 2022",
    active: true,
  },
  {
    icon: "✅",
    label: "Data quality assessment",
    date: "Updated: Feb 15, 2022",
  },
  {
    icon: "📏",
    label: "Performance measurement",
    date: "Updated: Feb 7, 2022",
  },
  { icon: "📋", label: "Market research", date: "Updated: Jan 5, 2022" },
  { icon: "🧪", label: "Hypothesis testing", date: "Updated: Jan 28, 2022" },
];

function TaskListCard() {
  return (
    <div className="bg-white rounded-2xl p-5 w-72 ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-neutral-900 font-bold text-base">Task List</h2>
        <button className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-500 text-xs">≡</span>
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {tasks.map((t) => (
          <div
            key={t.label}
            className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors
              ${t.active ? "bg-lime-400" : "hover:bg-neutral-50"}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-base">{t.icon}</span>
              <div>
                <p
                  className={`text-xs font-semibold ${t.active ? "text-neutral-900" : "text-neutral-800"}`}
                >
                  {t.label}
                </p>
                <p
                  className={`text-xs ${t.active ? "text-neutral-700" : "text-neutral-400"}`}
                >
                  {t.date}
                </p>
              </div>
            </div>
            <span
              className={`text-sm ${t.active ? "text-neutral-900" : "text-neutral-300"}`}
            >
              ›
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskListCard;
