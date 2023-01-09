import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Classes from "./pages/Classes";
import Home from "./pages/Home";
import PopularClasses from "./pages/Home/PopularClasses";
import Trainers from "./pages/Home/Trainers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/classes" element={<Classes />} /> */}
      </Routes>
    </div>
  );
}

export default App;