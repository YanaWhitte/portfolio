import spc from "../styles/ProjectCards.module.css";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
export const BigCard = ({ cover, extraClass, link, description, projectName, title }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className={`${spc.bigCard} ${spc.card} ${extraClass}`}
      onMouseOver={() => setDisplay(true)}
      onMouseOut={() => setDisplay(false)}
    >
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={link} target="_blank">
        <Parallax slowerScrollRate offsetYMax={100} offsetYMin={-100} className={spc.imgWrap}>
          <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
        </Parallax>
      </a>
      <div className={`${spc.descriptionBlock} ${projectName}`} style={{ opacity: `${display ? "1" : "0"}` }}>
        <p className={spc.description}>{description}</p>
        <h1 className={spc.description}>{title}</h1>
      </div>
    </div>
  );
};

export const MiddleCard = ({ cover, extraClass, link, description, projectName, title }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className={`${spc.middleCard} ${spc.card} ${extraClass}`}
      onMouseOver={() => setDisplay(true)}
      onMouseOut={() => setDisplay(false)}
    >
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={link} target="_blank">
        <Parallax offsetYMax={100} offsetYMin={-100} className={spc.imgWrap}>
          <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
        </Parallax>
      </a>
      <div className={`${spc.descriptionBlock} ${projectName}`} style={{ opacity: `${display ? "1" : "0"}` }}>
        <p className={spc.description}>{description}</p>
        <h1 className={spc.description}>{title}</h1>
      </div>
    </div>
  );
};

export const SmallCard = ({ cover, extraClass, link, description, projectName, title }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className={`${spc.smallCard} ${spc.card} ${extraClass}`}
      onMouseOver={() => setDisplay(true)}
      onMouseOut={() => setDisplay(false)}
    >
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={link} target="_blank">
        <Parallax offsetYMax={100} offsetYMin={-100} className={spc.imgWrap}>
          <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
        </Parallax>
      </a>
      <div className={`${spc.descriptionBlock} ${projectName}`} style={{ opacity: `${display ? "1" : "0"}` }}>
        <p className={spc.description}>{description}</p>
        <h1 className={spc.description}>{title}</h1>
      </div>
    </div>
  );
};
