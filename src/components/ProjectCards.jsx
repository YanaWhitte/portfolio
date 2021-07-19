import spc from "../styles/ProjectCards.module.css";
import { useState } from "react";

export const BigCard = ({ cover, extraClass, link, description, projectName, title }) => {
  const [display, setDisplay] = useState(false)

  return <div className={`${spc.bigCard} ${spc.card} ${extraClass}`}
    onMouseOver={() => setDisplay(true)} onMouseOut={() => setDisplay(false)}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
    <div className={`${spc.descriptionBlock} ${projectName}`} style={{ opacity: `${display ? "1" : "0"}` }}>
      <p className={spc.description}>{description}</p>
      <h1 className={spc.description}>{title}</h1>
    </div>
  </div>
}

export const MiddleCard = ({ cover, extraClass, link, description, projectName, title }) => {
  const [display, setDisplay] = useState(false)

  return <div className={`${spc.middleCard} ${spc.card} ${extraClass}`}
    onMouseOver={() => setDisplay(true)} onMouseOut={() => setDisplay(false)}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
    <div className={`${spc.descriptionBlock} ${projectName}`} style={{ opacity: `${display ? "1" : "0"}` }}>
      <p className={spc.description}>{description}</p>
      <h1 className={spc.description}>{title}</h1>
    </div>
  </div>
}

export const SmallCard = ({ cover, extraClass, link, description, projectName, title }) => {
  const [display, setDisplay] = useState(false)

  return <div className={`${spc.smallCard} ${spc.card} ${extraClass}`}
    onMouseOver={() => setDisplay(true)} onMouseOut={() => setDisplay(false)}>
    <a href={link} target="_blank">
      <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
    </a>
    <div className={`${spc.descriptionBlock} ${projectName}`} style={{ opacity: `${display ? "1" : "0"}` }}>
      <p className={spc.description}>{description}</p>
      <h1 className={spc.description}>{title}</h1>
    </div>
  </div>
}