import spc from "../styles/ProjectCards.module.css";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useHover } from "../hooks";
import { useInView } from "react-intersection-observer";

const makeCardComponent =
  (className) =>
    ({ cover, extraClass, link, description, projectName, title, alternate = false }) => {
      const [display, setDisplay] = useState(false);
      const [display2, setDisplay2] = useState(false);
      const handlers = useHover();
      const displayHandlers = {
        onMouseOver: () => setDisplay(true),
        onMouseOut: () => setDisplay(false),
      };
      const displayHandlers2 = {
        onMouseOver: () => setDisplay2(true),
        onMouseOut: () => setDisplay2(false),
      };

      const [ref, inView] = useInView({
        threshold: 0,
      });
      console.log({ inView });
      return (
        <div
          ref={ref}
          {...handlers}
          onClick={() => {
            window.open(link, '_blank').focus();
          }}
          className={`${className} ${spc.card} ${extraClass} ${inView ? "" : spc.cardHidden} ${alternate ? spc.alternate : ""
            }`}
        >
          <div className={spc.glass}>
            <div className={spc.block} />
            <div className={spc.block} {...displayHandlers2} />
            <div className={spc.block} {...displayHandlers} />
            <div className={spc.block} />
          </div>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href={link} target="_blank">
            <Parallax slowerScrollRate offsetYMax={100} offsetYMin={-100} className={spc.imgWrap}>
              <img src={process.env.PUBLIC_URL + `/img/${cover}.png`} alt="project cover" />
            </Parallax>
          </a>
          <div
            className={`${spc.descriptionBlock} ${display2 ? spc.hide : ""}`}
            style={{ backgroundColor: display ? "transparent" : "#000" }}
          >
            <p className={spc.description}>{description}</p>
            <h3 className={spc.description}>{title}</h3>
          </div>
        </div>
      );
    };

export const BigCard = makeCardComponent(spc.bigCard);
export const MiddleCard = makeCardComponent(spc.middleCard);
export const SmallCard = makeCardComponent(spc.smallCard);
