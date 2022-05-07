import { Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';

// Pages
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from "./pages/Login";
import Profile from "./pages/Profile";

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
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
