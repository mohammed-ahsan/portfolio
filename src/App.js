import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home"
import About from "./components/About";
import MyStack from "./components/MyStack";
import Projects from "./components/Projects";
import "./components/styles.scss";


function App() {
  return (
    <div className="select-none">
<Navbar/>
<Home/>
<About/>
<MyStack/>
<Projects/>

    </div>
  );
}

export default App;
