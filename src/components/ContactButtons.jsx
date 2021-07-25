import s from "../styles/ContactButtons.module.css";
import { ArrowUp } from "./Icons";
import React, { useRef } from "react";
import { useHover } from "../hooks";

const ContactButtons = React.forwardRef((_, ref) => {
  const innerRef = useRef(ref);
  const { handlers } = useHover();
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
          <button {...handlers} className={`${s.downloadBtn} hue-rotation`}>
            <a href="/CV.pdf" download>
              download cv
            </a>
          </button>
        </div>
        <div className={s.btnRow}>
          <button {...handlers} className={`${s.emailBtn} hue-rotation`}>
            <a href="mailto:whiony@gmail.com">email</a>
          </button>
          <button {...handlers} className={`${s.codeBtn} hue-rotation`} >
            <a href="https://github.com/YanaWhitte" target="_blank">
              my code
            </a>
          </button>
        </div>
        <div className={s.arrow}>
          <button {...handlers} className={s.arrowBtn} onClick={scrollToTop}>
            <ArrowUp />
            back to top
          </button>
        </div>
      </div>
    </div>
  );
});

export default ContactButtons;
