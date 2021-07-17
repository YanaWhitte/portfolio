import s from "../styles/HtmlProjects.module.css";
import { SmallCard, MiddleCard, BigCard } from "./ProjectCards";

const HtmlProjects = () => {
  return <div className={s.htmlProjects}>
    <div className={s.technologies}>
      <p className={s.number}>02</p>
      <p className={s.technologiesItem}>HTML</p>
      <p className={s.technologiesItem}>CSS</p>
      <p className={s.technologiesItem}>JS</p>
    </div>
    <HtmlProjectsGrid />
  </div>
}

const HtmlProjectsGrid = () => {
  return <div className={s.htmlProjectsGrid}>
    <div className={s.row}>
      <BigCard cover="dynamic-time-page" extraClass={s.dynamicTimePage} link="https://yanawhitte.github.io/dynamic-time-page/" />
    </div>
    <div className={s.row}>
      <MiddleCard cover="designer-marketplace" extraClass={s.DesignerMarketplace} link="https://yanawhitte.github.io/designer-marketplace/index.html" />
      <BigCard cover="freshnesecom-layout" extraClass={s.freshnesecom} link="https://yanawhitte.github.io/freshnesecom-layout/" />
    </div>
    <div className={s.row}>
      <BigCard cover="pizza-time" extraClass={s.pizzaTime} link="https://yanawhitte.github.io/pizza-time/" />
    </div>
    <div className={s.row}>
      <MiddleCard cover="lasles-vpn" extraClass={s.laslesVpn} link="https://yanawhitte.github.io/landingpage-lasles-vpn/" />
      <BigCard cover="keksby" extraClass={s.keksby} link="https://yanawhitte.github.io/keksby/" />
    </div>
    <div className={s.row}>
      <MiddleCard cover="landify" extraClass={s.landify} link="https://yanawhitte.github.io/landify/" />
      <SmallCard cover="dashboard" extraClass={s.dashboard} link="https://yanawhitte.github.io/dashboard/" />
    </div>
    <div className={s.row}>
      <BigCard cover="wknd" extraClass={s.wknd} link="https://yanawhitte.github.io/WKND/" />
    </div>
  </div>
}

export default HtmlProjects;