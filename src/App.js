import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import { MainLayout } from "./Layouts/mainLayout";
import { MouseTracker } from "./Components/MouseTracker";
import NotFound from "./Pages/NotFound";
import ProjectDetails from "./Pages/ProjectDetails";
import ScrollToTop from "./Components/ScrollTop";
import ScrollToHash from "./Components/ScrollToHash";

function App() {
  console.log("rerender");
  return (
    <div className="App">
      <MouseTracker />
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
