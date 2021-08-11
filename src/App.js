import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ReactProjects from "./components/ReactProjects";
import HtmlProjects from "./components/HtmlProjects";
import ContactButtons from "./components/ContactButtons";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import Backdrop from "./components/Backdrop";
import { ParallaxProvider } from "react-scroll-parallax";

const USE_CUSTOM_SCROLLBAR = false;

function App() {
  const [show, set] = useState(false);
  const [, update] = useState(0);
  const projectsRef = useRef(null);
  const contactButtonsRef = useRef(null);
  const appRef = useRef(null);
  const rect = appRef.current?.getBoundingClientRect();
  const height = rect?.height;
  const width = rect?.width;

  useEffect(() => {
    update((x) => x + 1);
    if (USE_CUSTOM_SCROLLBAR) {
      Scrollbar.init(document.querySelector(".App"), {
        damping: 0.1, //	Momentum reduction damping factor, a float value between (0, 1), the lower the value is,
        // the more smooth the scrolling will be (also the more paint frames).
        thumbMinSize: 20, //	Minimal size for scrollbar thumbs.
        renderByPixels: true, // 	Render every frame in integer pixel values, set to true to improve scrolling performance.
        alwaysShowTracks: false, //	Keep scrollbar tracks always visible.
        continuousScrolling: true, // 	Set to true to allow outer scrollbars continue scrolling when current scrollbar reaches edge.
        wheelEventTarget: null, // 	Element to be used as a listener for mouse wheel scroll events. By default, the container element is used. This option will be useful for dealing with fixed elements.
        plugins: {}, //	Options for plugins, see Plugin System.
      });
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      const bodyTop = document.body.getBoundingClientRect().top;
      const elementTop = projectsRef.current?.getBoundingClientRect().top - bodyTop;
      const element2Top = contactButtonsRef.current?.getBoundingClientRect().top - bodyTop;
      const scrollY = window.scrollY;

      const showingBottomSection = scrollY > element2Top;
      const isGrayscale = scrollY > elementTop / 2;

      if (showingBottomSection) {
        document.body.style.setProperty("--show-bottom-opacity", "1");
      } else {
        document.body.style.setProperty("--show-bottom-opacity", "0");
      }

      if (isGrayscale && !showingBottomSection) {
        set(true);
      } else {
        set(false);
      }

      if (!isGrayscale) {
        document.body.style.setProperty("--bg-brightness", showingBottomSection ? "1.2" : "1");
      }
    };
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    document.body.style.setProperty("--grayscale", show ? "100%" : "0%");
    document.body.style.setProperty("--bg-brightness", show ? "1.2" : "1");
  }, [show]);

  useEffect(() => {
    const handler = () => update((x) => x + 1);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!show) {
        const deg = (e.clientX / width - 0.5) * 360;
        document.body.style.setProperty("--hue", `${deg}`);
      }

      document.body.style.setProperty("--cursor-left", `${e.clientX}px`);
      document.body.style.setProperty("--cursor-top", `${e.clientY}px`);
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [width, show]);

  return (
    <div
      className="App"
      ref={appRef}
      style={
        USE_CUSTOM_SCROLLBAR
          ? {
              width: "100%",
              height: "100vh",
              overflow: "auto",
            }
          : undefined
      }
    >
      <div className="cursor" />
      <Backdrop />
      <Sidebar show={show} />
      <Main bgheight={height} bgwidth={width} />
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
    <ParallaxProvider>
      <ReactProjects />
      <HtmlProjects />
    </ParallaxProvider>
  );
});

export default App;
