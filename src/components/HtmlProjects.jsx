import s from "../styles/ProjectsSection.module.css";
import spc from "../styles/ProjectCards.module.css";
import { ParallaxProvider } from "react-scroll-parallax";
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
          <BigCard
            cover="dynamic-time-page"
            extraClass={spc.dynamicTimePage}
            link="https://yanawhitte.github.io/dynamic-time-page/"
            description="html page"
            title="Dynamic Time Page"
            projectName={spc.dynamicTimePageText}
          />
          <MiddleCard
            alternate
            cover="designer-marketplace"
            extraClass={`${spc.DesignerMarketplace} ${s.DesignerMarketplace}`}
            link="https://yanawhitte.github.io/designer-marketplace/index.html"
            description="html page"
            title="Designer Market place"
            projectName={spc.designerMarketplaceText}
          />
        </div>
        <BigCard
          cover="freshnesecom-layout"
          extraClass={`${spc.freshnesecom} ${s.freshnesecom}`}
          link="https://yanawhitte.github.io/freshnesecom-layout/"
          description="html page"
          title="Freshnesecom"
          projectName={spc.freshnesecomText}
        />
      </div>
      <div className={s.row}>
        <BigCard
          alternate
          cover="pizza-time"
          extraClass={spc.pizzaTime}
          link="https://yanawhitte.github.io/pizza-time/"
          description="html page"
          title="Pizza Time"
          projectName={spc.pizzaTimeText}
        />
      </div>
      <div className={s.row}>
        <div className={s.columnContainer}>
          <MiddleCard
            cover="lasles-vpn"
            extraClass={spc.laslesVpn}
            link="https://yanawhitte.github.io/landingpage-lasles-vpn/"
            description="html page"
            title="Lasles VPN"
            projectName={spc.laslesVpnText}
          />
          <MiddleCard
            cover="landify"
            alternate
            extraClass={`${spc.landify} ${s.landify}`}
            link="https://yanawhitte.github.io/landify/"
            description="html page"
            title="Landify"
            projectName={spc.landifyText}
          />
        </div>
        <div className={s.columnContainer}>
          <div className={s.innerRow}>
            <BigCard
              cover="keksby"
              extraClass={spc.keksby}
              link="https://yanawhitte.github.io/keksby/"
              description="html page"
              title="Keksby"
              projectName={spc.keksbyText}
            />
          </div>
          <div className={s.innerRow}>
            <SmallCard
              alternate
              cover="dashboard"
              extraClass={`${spc.dashboard} ${s.dashboard}`}
              link="https://yanawhitte.github.io/dashboard/"
              description="html page"
              title="Dashboard"
              projectName={spc.dashboardText}
            />
          </div>
        </div>
      </div>
      <div className={s.row}>
        <BigCard
          cover="wknd"
          extraClass={spc.wknd}
          link="https://yanawhitte.github.io/WKND/"
          description="html page"
          title="WKND"
          projectName={spc.wkndText}
        />
      </div>
    </div>
  );
};

export default HtmlProjects;
