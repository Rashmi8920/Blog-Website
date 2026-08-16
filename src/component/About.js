import react from 'react';
import about from './images/about.png'
import './about.css'                                                

const About=()=>{
    return(
        <>
       <br /><br />  <hr />
 <h1 className='rashmi'>VINNIET SINGH</h1>
 <hr /> <br />
 <img src={about} alt="about"  className='about' />
 <h3>About Me</h3>
 <p>As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user experiences that meet the needs of my clients and their users. I have a strong  <br />understanding of design principles and a proficiency in design tools, and I am comfortable working with cross-functional teams to bring projects to fruition. I am confident in my ability to <br /> create designs that are both visually appealing and functional, and I am always looking for new challenges and opportunities to grow as a designer.</p>
 <br />
 <h3>Skills:</h3>
<li>Extensive experience in UI design, with a strong portfolio of completed projects</li>
<li>Proficiency in design tools such as Adobe Creative Suite and Sketch</li>
<li>Excellent visual design skills, with a strong understanding of layout, color theory, and typography</li>
<li>Ability to create wireframes and prototypes to communicate design concepts</li>
<li>Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams</li>
<li>Experience conducting user research and gathering insights to inform design decisions</li>
<li>Proficiency in HTML, CSS, and JavaScript</li>
<br />

<h3>Experience:</h3>
<li>5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries</li>
<li>Led the design of a successful e-commerce website, resulting in a 25% increase in online sales</li>
<li>
Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage</li>
<li>
Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic</li>
<br />

<h3>Education:</h3>
<li>Bachelor's degree in Graphic Design</li>
<li>Certified User Experience Designer (CUED)</li>
<br /><br /><br />
<div className="p">
<p>© 2023</p>
<p>Twitter </p>
<p>Email</p>
<p>RSS feed</p>
<p>Add to Feedly</p>
</div>
        </>
    )
}
export default About;