import React from "react";

const members = [
  { name: "Emily Rodriguez", value: "$22k", color: "bg-pink-300" },
  { name: "Ethan Mitchell", value: "$21.5k", color: "bg-amber-300" },
  { name: "Benjamin Peterson", value: "$18k", color: "bg-blue-300" },
  { name: "Sophia Carter", value: "$16k", color: "bg-purple-300" },
];

function TeamRatingCard() {
  return (
    <div className="bg-lime-400 rounded-2xl p-5 w-48 ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-neutral-900 font-bold text-sm">Team Rating</h2>
        <button className="w-7 h-7 rounded-full bg-white/40 flex items-center justify-center">
          <span className="text-neutral-800 text-xs">→</span>
        </button>
      </div>
      <div className="flex gap-1 mb-4">
        {members.map((m) => (
          <div
            key={m.name}
            className={`w-10 h-10 rounded-full ${m.color} border-2 border-lime-400 flex items-center justify-center text-xs font-bold text-white`}
          >
            {m.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
        {members.map((m) => (
          <div key={m.name}>
            <p className="text-neutral-800 text-xs truncate">
              {m.name.split(" ")[0]}
            </p>
            <p className="text-neutral-900 text-xs font-bold">{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamRatingCard;
