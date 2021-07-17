import spc from "../styles/ProjectCards.module.css";

export const BigCard = ({ cover, extraClass, link }) => {
  return <div className={`${spc.bigCard} ${spc.card} ${extraClass}`}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
  </div>
}

export const MiddleCard = ({ cover, extraClass, link }) => {
  return <div className={`${spc.middleCard} ${spc.card} ${extraClass}`}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
  </div>
}

export const SmallCard = ({ cover, extraClass, link }) => {
  return <div className={`${spc.smallCard} ${spc.card} ${extraClass}`}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
  </div>
}