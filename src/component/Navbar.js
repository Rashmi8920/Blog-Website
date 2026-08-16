import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
   const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
   }
   useEffect(()=>{
    document.body.classList.toggle('dark-mode',darkMode);
   },[darkMode])

   return (
      <div className={`main ${darkMode ? 'dark' : ''}`}>
         <div className="you">
            <h2>Your Name</h2>
            <div className="blog">
               <Link to="blog"><p>Blog</p></Link>
               <Link to="projects"><p>Projects</p></Link>
               <Link to="about"><p>About</p></Link>
               <Link to="newsletter"><p>NewsLetter</p></Link>
               <div className="mode">
                  <span className='moon' onClick={toggleDarkMode}>🌙</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar;




