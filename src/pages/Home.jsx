import React from "react";
import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <>
    <div className="home-wrapper">
      <Hero />
      <Dashboard />
    </div>
    </>
  );
}

export default Home;
