import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import { MainLayout } from "./Layouts/mainLayout";
import { MouseTracker } from "./Components/MouseTracker";

function App() {
  return (
    <div className="App">
      <MouseTracker />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
