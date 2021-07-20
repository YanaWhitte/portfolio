import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ReactProjects from "./components/ReactProjects";
import HtmlProjects from "./components/HtmlProjects";
import ContactButtons from "./components/ContactButtons";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {
  const [show, set] = useState(false);
  const [, update] = useState(false);
  const projectsRef = useRef(null);
  const contactButtonsRef = useRef(null);

  useEffect(() => {
    update(true);
  }, []);

  useLayoutEffect(() => {
    const handler = () => {
      if (update) {
        const bodyTop = document.body.getBoundingClientRect().top;
        const elementTop = projectsRef.current?.getBoundingClientRect().top - bodyTop;
        const element2Top = contactButtonsRef.current?.getBoundingClientRect().top - bodyTop;
        const scrollY = window.scrollY;

        if (scrollY > elementTop / 2 && !(scrollY > element2Top)) {
          set(true);
        } else {
          set(false);
        }
      }
    };
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, [update]);

  return (
    <div className="App">
      <Sidebar show={show} />
      <Main />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <div ref={contactButtonsRef}>
        <ContactButtons />
      </div>
    </div>
  );
}

const Projects = React.memo(function Projects() {
  return (
    <>
      <ReactProjects />
      <HtmlProjects />
    </>
  );
});

export default App;
