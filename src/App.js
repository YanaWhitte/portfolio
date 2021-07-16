import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ReactProjects from "./components/ReactProjects";
import HtmlProjects from "./components/HtmlProjects";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <ReactProjects />
      <HtmlProjects />
    </div>
  );
}

export default App;
