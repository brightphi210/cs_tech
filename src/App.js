import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Portfolio from "./Pages/Portfolio";
function App() {
  return (
    <div className="App">
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
