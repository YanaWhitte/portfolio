import s from "../styles/ProjectsSection.module.css";
import spc from "../styles/ProjectCards.module.css";
import { SmallCard, MiddleCard, BigCard } from "./ProjectCards";

const HtmlProjects = () => {
  return (
    <div className={s.projectsSection}>
      <div className={s.technologies}>
        <p className={s.number}>02</p>
        <p className={s.technologiesItem}>HTML</p>
        <p className={s.technologiesItem}>CSS</p>
        <p className={s.technologiesItem}>JS</p>
      </div>
      <HtmlProjectsGrid />
    </div>
  );
};

const HtmlProjectsGrid = () => {
  return (
    <div className={`${s.mainGrid} ${s.htmlGrid}`}>
      <div className={s.row}>
        <div className={s.columnContainer}>
          <BigCard cover="dynamic-time-page" extraClass={spc.dynamicTimePage} link="https://yanawhitte.github.io/dynamic-time-page/" />
          <MiddleCard
            cover="designer-marketplace"
            extraClass={spc.DesignerMarketplace}
            link="https://yanawhitte.github.io/designer-marketplace/index.html"
          />
        </div>
        <BigCard cover="freshnesecom-layout" extraClass={spc.freshnesecom} link="https://yanawhitte.github.io/freshnesecom-layout/" />
      </div>
      <div className={s.row}>
        <BigCard cover="pizza-time" extraClass={spc.pizzaTime} link="https://yanawhitte.github.io/pizza-time/" />
      </div>
      <div className={s.row}>
        <div className={s.columnContainer}>
          <MiddleCard cover="lasles-vpn" extraClass={spc.laslesVpn} link="https://yanawhitte.github.io/landingpage-lasles-vpn/" />
          <MiddleCard cover="landify" extraClass={spc.landify} link="https://yanawhitte.github.io/landify/" />
        </div>
        <div className={s.columnContainer}>
          <div className={s.innerRow}>
            <BigCard cover="keksby" extraClass={spc.keksby} link="https://yanawhitte.github.io/keksby/" />
          </div>
          <div className={s.innerRow}>
            <SmallCard cover="dashboard" extraClass={spc.dashboard} link="https://yanawhitte.github.io/dashboard/" />
          </div>
        </div>
      </div>
      <div className={s.row}>
        <BigCard cover="wknd" extraClass={spc.wknd} link="https://yanawhitte.github.io/WKND/" />
      </div>
    </div>
  );
};

export default HtmlProjects;
