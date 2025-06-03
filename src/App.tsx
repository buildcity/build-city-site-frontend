import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Events = lazy(() => import('./pages/Events'));
const Partners = lazy(() => import('./pages/Partners'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const Media = lazy(() => import('./pages/Media'));
const Membership = lazy(() => import('./pages/Membership')); // 👈 added this line
const Labs = lazy(() => import('./pages/Labs'));

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/media" element={<Media />} />
            <Route path="/membership" element={<Membership />} /> {/* 👈 new route */
            <Route path="/labs" element={<Labs />} />}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
