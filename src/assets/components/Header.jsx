import React, { useState } from "react";

const tabs = [
  "Analytics Team",
  "Crypto Team",
  "Dev Team",
  "Marketing Team",
  "Red",
];

function Header() {
  const [activeTab, setActiveTab] = useState("Analytics Team");

  return (
    <header className="bg-neutral-900 px-10 pt-6 pb-2">
      
      <div className="flex items-start justify-between mb-2">
        
        <div>
          <h1 className="text-white text-3xl font-black leading-tight tracking-tight">
            Manage your projects
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            Here you can track projects, task progress and team activity.
          </p>
        </div>

        
        <div className="flex items-start gap-3 mt-1">
          
          <button className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-neutral-700 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </button>

          
          <button className="flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-neutral-900 font-semibold text-sm px-4 py-2 rounded-full transition-colors cursor-pointer">
            Create
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          
          <button className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-neutral-700 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>

          
          <div className="w-9 h-9 rounded-full bg-lime-400 overflow-hidden ring-2 ring-lime-400 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
          </div>
        </div>
      </div>

      
      <nav className="flex items-center gap-6 mt-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap
              ${
                activeTab === tab
                  ? "text-lime-400 border-lime-400"
                  : "text-neutral-400 border-transparent hover:text-neutral-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
