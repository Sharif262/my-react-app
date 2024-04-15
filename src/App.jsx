import "./App.css";
import About from "./components/AboutPage.jsx"
import NavBar from "./components/NavBar";
import Experience from "./components/experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import HomePage from "./components/Homepage";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HomePage />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
