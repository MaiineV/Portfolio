import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience';
import AboutMe from './pages/AboutMe';

import './styles/globals.scss';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
