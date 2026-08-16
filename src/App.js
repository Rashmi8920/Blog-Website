import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './component/Blog';
import Project from './component/Project';
import About from './component/About';
import Newsletter from './component/Newsletter';
import './App.css'; 

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return (
        <Router>
{/* dark mo */}

            <div className={`app-container ${darkMode ? 'dark' : ''}`}>
                {/* Navbar */}
                <div className="navbar">
                    <h2>Your Name</h2>
                    <div className="links">
                        <Link to="blog">Blog</Link>
                        <Link to="projects">Projects</Link>
                        <Link to="about">About</Link>
                        <Link to="newsletter">Newsletter</Link>
                       <button className='btn'> <span style={{fontSize:'25px',marginLeft:"10px"}}>⚫</span><span className='moon' onClick={toggleTheme} style={{fontSize:'30px'}}>🌙</span> </button>
                    </div>
                </div> <br /><br />

                <Routes>
                    <Route path="/" element={<Blog />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/projects" element={<Project />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/newsletter" element={<Newsletter />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;