import { Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className=''>
      <Navigation />

      {/* main content */}
      <div className='p-5 max-w-7xl mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
