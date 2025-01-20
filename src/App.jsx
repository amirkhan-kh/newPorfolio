import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectItem } from './ui/single';
import { Header, Intro, About, Skills, Contact, Project, Footer } from './components';

const MainLayout = () => (
  <>
    <Header />
    <Intro />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/:id" element={<ProjectItem />} />
      </Routes>
    </Router>
  );
};

export default App;
