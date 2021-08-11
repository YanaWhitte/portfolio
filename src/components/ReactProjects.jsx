import React from "react";
import s from "../styles/ProjectsSection.module.css";
import spc from "../styles/ProjectCards.module.css";
import { MiddleCard, BigCard } from "./ProjectCards";
import { ParallaxProvider } from "react-scroll-parallax";

const ReactProjects = () => {
  return (
    <div className={s.projectsSection}>
      <div className={s.technologies}>
        <p className={s.number}>01</p>
        <p className={s.technologiesItem}>React</p>
        <p className={s.technologiesItem}>Redux</p>
        <p className={s.technologiesItem}>Router</p>
      </div>
      <ReactProjectsGrid />
    </div>
  );
};

const ReactProjectsGrid = () => {
  return (
    <div className={`${s.mainGrid} ${s.reactGrid}`}>
      <div className={s.row}>
        <MiddleCard
          cover="vk-statistics"
          extraClass={spc.vkStatistics}
          link="https://vk-statistics.vercel.app/"
          description="react app"
          title="VK Statistics"
          projectName={spc.vkStatisticsText}
        />
        <BigCard
          cover="food-service"
          extraClass={spc.foodService}
          link="https://food-service.vercel.app/home"
          description="react app"
          title="Food Service"
          projectName={spc.foodServiceText}
        />
      </div>
      <div className={s.row}>
        <BigCard
          alternate
          cover="caped"
          extraClass={spc.caped}
          link="https://caped.vercel.app/"
          description="react app"
          title="Caped"
          projectName={spc.capedText}
        />
        <BigCard
          cover="cat-name-generator"
          extraClass={spc.generator}
          link="https://yanawhitte.github.io/cat-name-generator/"
          description="react app"
          title="Cat Name Generator"
          projectName={spc.generatorText}
        />
      </div>
      <div className={s.row}>
        <MiddleCard
          alternate
          cover="little-challenges"
          extraClass={spc.challenges}
          link="https://little-challenges.vercel.app/mouse-drawing"
          description="react app"
          title="React Challenges"
          projectName={spc.challengesText}
        />
      </div>
    </div>
  );
};

export default ReactProjects;
