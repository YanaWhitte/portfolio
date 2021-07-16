import s from "../styles/ReactProjects.module.css";

export const BigCard = ({ cover, extraClass, link }) => {
  return <div className={`${s.bigCard} ${s.card} ${extraClass}`}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
  </div>
}

export const MiddleCard = ({ cover, extraClass, link }) => {
  return <div className={`${s.middleCard} ${s.card} ${extraClass}`}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
  </div>
}

export const SmallCard = ({ cover, extraClass, link }) => {
  return <div className={`${s.smallCard} ${s.card} ${extraClass}`}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
  </div>
}