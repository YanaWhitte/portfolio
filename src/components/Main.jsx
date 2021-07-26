import React from "react";
import s from "../styles/Main.module.css";
import { ArrowDown } from "./Icons";
import { useHover } from "../hooks";

const Main = ({ bgwidth, bgheight }) => {
  return (
    <div className={s.main}>
      <div className={s.row}>
        <Description />
        <BlackSquare bgwidth={bgwidth} bgheight={bgheight} />
      </div>
      <ArrowDown />
    </div>
  );
};

const Description = () => {
  return (
    <div className={s.description}>
      <div className={s.aboutMe}>
        <p>
          working with top-end
          <br /> tech to deliver
          <br /> awesome web experiences
        </p>
      </div>
      <div className={s.skills}>
        <p>
          my skills include <br /> html / css / javascript <br /> and of course <br /> react and redux for developing{" "}
          <br /> cool UI interfaces
        </p>
      </div>
    </div>
  );
};

const BlackSquare = ({ bgwidth, bgheight }) => {
  const handlers = useHover();

  return (
    <div className={s.square}>
      <nav>
        <ul {...handlers} className={s.menu}>
          <li>
            <a
              className={`${s.menuItem} hue-rotation hue-rotation-brightness-filter`}
              href="https://github.com/YanaWhitte"
              target="_blank"
            >
              github
            </a>
          </li>
          <li>
            <a
              className={`${s.menuItem} hue-rotation hue-rotation-brightness-filter`}
              href="https://www.linkedin.com/in/whiony"
              target="_blank"
            >
              linkedin
            </a>
          </li>
          <li>
            <a className={`${s.menuItem} hue-rotation hue-rotation-brightness-filter`} href="mailto:whiony@gmail.com">
              email
            </a>
          </li>
          <li>
            <a className={`${s.menuItem} hue-rotation hue-rotation-brightness-filter`} href="tel:+380500877535">
              call me
            </a>
          </li>
          <li>
            <a
              className={`${s.menuItem} hue-rotation hue-rotation-brightness-filter ${s.resume}`}
              href="/Bychilova-Yana_CV.pdf"
              download
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
      <div className={s.titleBlock}>
        <h1 className="hue-rotation" style={{ backgroundSize: `${bgwidth}px ${bgheight}px` }}>
          Yana Bychilova
        </h1>
        <h2 className="hue-rotation hue-rotation-brightness-filter">frontend developer</h2>
      </div>
    </div>
  );
};

export default Main;
