import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ReactProjects from "./components/ReactProjects";
import HtmlProjects from "./components/HtmlProjects";
import ContactButtons from "./components/ContactButtons";

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Main />
      <ReactProjects />
      <HtmlProjects />
      <ContactButtons />
    </div>
  );
}

export default App;
