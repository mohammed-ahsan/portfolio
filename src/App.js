import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import MyStack from "./components/MyStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import "./components/styles.scss";
import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <div className="select-none">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects />
            </>
          }
        />

        <Route path="/About" element={<About />} />
        <Route path="/MyStack" element={<MyStack />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route element={<SinglePost/>} path="/post/:slug" />
        
      </Routes>
    </div>
  );
}

export default App;
