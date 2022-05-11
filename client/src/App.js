import { Route, Routes, Outlet } from "react-router-dom";
import './App.css';
import Navigation from './components/common/Navigation';

// Pages
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const AppLayout = () => (
  <>
    <div className='p-5 pt-0 max-w-7xl mx-auto'>
    <Navigation />
      <Outlet /> {/* <-- nested routes rendered here */}
    </div>

  </>
);

const EmptyLayout = () => (
  <>
    <div className='p-10 mt-10 max-w-7xl mx-auto'>
      <Outlet /> {/* <-- nested routes rendered here */}
    </div>

  </>
);

function App() {
  return (
    <>
      <Routes>
        {/* Empty layout */}
        <Route element={<EmptyLayout />} >
          <Route path="login" element={<Login />} />
        </Route>

        {/* main content inside app layout*/}
        <Route element={<AppLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
