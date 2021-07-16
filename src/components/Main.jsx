import React from 'react';
import s from "../styles/Main.module.css";
import { ArrowDown } from "./Icons";

const Main = () => {
  return <div className={s.main}>
    <div className={s.row}>
      <Description />
      <BlackSquare />
    </div>
    <ArrowDown />
  </div>
}

const Description = () => {
  return <div className={s.description}>
    <div className={s.aboutMe}>
      <p>working with top-end technologies to devlier awesome web experiences</p>
    </div>
    <div className={s.skills}>
      <p>my skills include <br /> html / css / javascript <br /> and of course <br /> react and redux for developing <br /> complex UI interfaces</p>
    </div>
  </div>
}

class BlackSquare extends React.Component {
  constructor() {
    super();
    this.state = {
      emailDisplay: "none",
      phoneDisplay: "none",
    }
  }

  render() {
    return <div className={s.square}>
      <nav>
        <ul className={s.menu}>
          <li><a className={s.menuItem} href="https://github.com/YanaWhitte" target="_blank">github</a></li>
          <li><a className={s.menuItem} href="https://www.linkedin.com/in/whiony" target="_blank">linkedin</a></li>
          <li><a className={`${s.menuItem}`} href="mailto:whiony@gmail.com">email</a></li>
          <li><a className={`${s.menuItem}`} href="tel:+380500877535">call me</a></li>
          <li><a className={`${s.menuItem} ${s.resume}`} href="/CV.pdf" download>resume</a></li>
        </ul>
      </nav>
      <div className={s.titleBlock}>
        <h1>Yana Bychilova</h1>
        <h2>frontend developer</h2>
      </div>
    </div>
  }
}

export default Main;