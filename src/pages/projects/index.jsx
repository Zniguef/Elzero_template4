import React from "react";
import MainTitle from "../../components/MainTitle";
import Card from "./components/Card";

function Projects() {
  return (
    <div className="w-full">
      <MainTitle title="Projects" />
      <div className="xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid">
        <Card />
      </div>
    </div>
  );
}

export default Projects;
