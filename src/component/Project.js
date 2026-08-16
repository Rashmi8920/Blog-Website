import React from 'react'
import img11 from './images/img11.png'
import img12 from './images/img12.png'
import img13 from './images/img13.png'
import img14 from './images/img14.png'
import img15 from './images/img15.png'
import './project.css'

const Project = () => {
  return (
    <>
   <hr />  <h1 className="project">PROJECTS</h1> <hr />
   <br /><br />
   <p className='list'>List Project</p> <br />
   <div className="mainprodiv">

   <div className="userdiv">
    <img src={img11} alt="img11" className='img11' />
    <h3 className="user">User Experience Design Dashboard Hotel <br /> Management</h3> <br />
    <p className="inthe">n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.</p> <br /><br />
    <div className="listbtn">
        <button className='desbtn'>Design</button>
        <button className='rebtn'>Research</button>
        <button className='prbtn'>Presentation</button>
    </div>
   </div>

   <div className="userdiv" style={{marginLeft:"10px"}}>
    <img src={img12} alt="img12" className='img12' />
    <h3 className="user">Bring of User Experience Design to Policy Making, How to Impact Society</h3><br />
    <p className="inthe">User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy <br /> making, UX design can be used to create policies that are effec.</p><br /><br />
    <div className="listbtn">
        <button className='rebtn'>Research</button>
        <button  className='prbtn'>Presentation</button>
    </div>
   </div>

   </div>

   <br /><br />
   <img src={img13} alt=""  className='img13'/><br /><br />
   <p className="user" style={{marginLeft:"150px"}}>UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data &  <br />Inclusive Collaboration Designons</p>
   <p className="there">There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process <br /> to teams and using data and inclusive collaboration to solve user problems</p>

   <div className="listbtn la">
        <button className='desbtn' >Design</button>
        <button className='rebtn'>Research</button>
        <button className='prbtn'>Presentation</button>
        <button className='rebtn'>Collaboration</button>
    </div>
{/* 3rd/last part */}

<div className="mainprodiv">

<div className="userdiv">
 <img src={img14} alt="img11" className='img11' style={{width:"620px"}} />
 <h3 className="user">User Experience Design Dashboard Hotel <br /> Management</h3> <br />
 <p className="inthe">n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.</p> <br /><br />
 <div className="listbtn">
     <button className='desbtn'>Design</button>
     <button className='rebtn'>Branding</button>
     <button className='prbtn'>identity</button>
 </div>
</div>

<div className="userdiv" style={{marginLeft:"10px"}}>
 <img src={img15} alt="img12" className='img12 ' style={{height:"328px",width:"592px"}} />
 <h3 className="user">Bring of User Experience Design to Policy Making, How to Impact Society</h3><br />
 <p className="inthe">User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy <br /> making, UX design can be used to create policies that are effec.</p><br /><br />
 <div className="listbtn">
 <button className='desbtn'>Design</button>
     <button className='rebtn'>Research</button>
     <button  className='prbtn'>Presentation</button>
 </div>
</div>

</div>

   {/* fotterlast part */}
   <div className="proje">
    <p>© 2023</p>
    <p>Twitter</p>
    <p>Linkdin</p>
    <p>Email</p>
    <p>RSS Feed</p>
    <p>Add to Feedly</p>
   </div>

    </>
  )
}

export default Project
