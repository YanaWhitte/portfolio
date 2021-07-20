import s from "../styles/Sidebar.module.css";

const Sidebar = ({ show }) => {
  return (
    <div className={`${s.sidebarContainer} ${show ? s.show : ""}`}>
      <div className={s.sidebar}>
        <div className={s.menu}>
          <div className={s.line}></div>
          <a className={s.menuItem} href="https://github.com/YanaWhitte" target="_blank">
            github
          </a>
          <a className={s.menuItem} href="https://www.linkedin.com/in/whiony" target="_blank">
            linkedin
          </a>
          <a className={s.menuItem} href="mailto:whiony@gmail.com">
            email
          </a>
          <a className={s.menuItem} href="/CV.pdf" download>
            cv
          </a>
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
