import s from "../styles/ContactButtons.module.css";
import { ArrowUp } from "./Icons";
import React, { useRef } from "react";

const ContactButtons = React.forwardRef((_, ref) => {
  const innerRef = useRef(ref);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={innerRef} className={s.contactsHolder}>
      <div className={s.contacts}>
        <div className={s.btnRow}>
          <button className={s.downloadBtn}>
            <a href="/CV.pdf" download>
              download cv
            </a>
          </button>
        </div>
        <div className={s.btnRow}>
          <button className={s.emailBtn}>
            <a href="mailto:whiony@gmail.com">email</a>
          </button>
          <button className={s.codeBtn}>
            <a href="https://github.com/YanaWhitte" target="_blank">
              my code
            </a>
          </button>
        </div>
        <div className={s.arrow}>
          <button className={s.arrowBtn} onClick={scrollToTop}>
            <ArrowUp />
            back to top
          </button>
        </div>
      </div>
    </div>
  );
});

export default ContactButtons;
