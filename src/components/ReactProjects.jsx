import s from "../styles/ReactProjects.module.css";
import { MiddleCard, BigCard } from "./ProjectCards";

const ReactProjects = () => {
  return <div className={s.reactProjects}>
    <div className={s.technologies}>
      <p className={s.number}>01</p>
      <p className={s.technologiesItem}>React</p>
      <p className={s.technologiesItem}>Redux</p>
      <p className={s.technologiesItem}>Router</p>
    </div>
    <ReactProjectsGrid />
  </div>
}

const ReactProjectsGrid = () => {
  return <div className={s.reactProjectsGrid}>
    <div className={s.row}>
      <MiddleCard cover="vk-statistics" extraClass={s.vkStatistics} link="https://vk-statistics.vercel.app/" />
      <BigCard cover="food-service" extraClass={s.foodService} link="https://food-service.vercel.app/home" />
    </div>
    <div className={s.row}>
      <BigCard cover="caped" extraClass={s.caped} link="https://caped.vercel.app/" />
      <BigCard cover="cat-name-generator" extraClass={s.generator} link="https://cat-name-generator.vercel.app/" />
    </div>
    <div className={s.row}>
      <MiddleCard cover="little-challenges" extraClass={s.challenges} link="https://little-challenges.vercel.app/mouse-drawing" />
    </div>
  </div>
}

export default ReactProjects;