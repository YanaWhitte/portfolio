import s from "../styles/Sidebar.module.css";
import { useHover } from "../hooks";
const Sidebar = ({ show }) => {
  const handlers = useHover();
  return (
    <div className={`${s.sidebarContainer} ${show ? s.show : ""}`}>
      <div className={s.sidebar}>
        <div {...handlers} className={s.menu}>
          <div className={s.line}></div>

          {[
            { children: "github", href: "https://github.com/whiony", target: "_blank" },
            { children: "linkedin", href: "https://www.linkedin.com/in/whiony", target: "_blank" },
            { children: "email", href: "mailto:whiony@gmail.com" },
            { children: "cv", href: "Bychilova-Yana_CV.pdf", download: true },
          ].map((props) => (
            <a className={`hue-rotation ${s.menuItem}`} {...props} key={props.href} />
          ))}

          <div className={s.line}></div>
        </div>
        <div className={s.title}>
          <span>projects</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
