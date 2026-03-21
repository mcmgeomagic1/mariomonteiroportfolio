import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import { MainLayout } from "./Layouts/mainLayout";
import NotFound from "./Pages/NotFound";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {
  console.log("rerender");
  return (
    <div className="App">
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
