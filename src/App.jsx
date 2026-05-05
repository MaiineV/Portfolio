import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import './styles/globals.scss';

const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Skills = lazy(() => import('./pages/Skills'));
const WorkExperience = lazy(() => import('./pages/WorkExperience'));
const AboutMe = lazy(() => import('./pages/AboutMe'));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
