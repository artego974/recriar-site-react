import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Dashboard from "../components/DashBoard";

function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-neutral-900">
      
      <Nav />

      
      <div className="ml-64 flex flex-col flex-1 overflow-y-auto">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
