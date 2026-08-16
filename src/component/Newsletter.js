import React from 'react'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img5 from './images/img5.png'
import './neweletter.css'


const Newsletter = () => {
  return (
    <>
      <h4 className='newletter'>Newsletter</h4>
      <h2 className='stories'>Stories ad interviews</h2>
      <p className='subscribe'>Subscribe to learn about new product features, the latest in technology, <br /> solutions, and updates.</p>
      <div className="enterbtndiv">
        <button className='enterwhite'>Enter your mail</button>
        <button className='enterpurple'>Subscribe</button>
      </div>
      <p className='weare'>We care about your data in our <u>  privacy policy</u></p>


     


      <h2 className='all'>All blog Posts</h2>
      <div className="thirdfirstdiv">
                {/* ist  updiv 4th section*/}
                <div className="thrdupmain">
                <div className="thrd1st">
                    <img src={img5} alt="img5" className='img5' />
                    <p className='oliv' style={{ marginLeft: "48px" }}>Alec Whitten  • 1 Jan 2023</p>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='migrliear' style={{ marginLeft: "30px", fontWeight: "bold", marginTop: "15px" }}>Bill Walsh leadership lessons <i class="fa-solid fa-square-arrow-up-right" style={{ marginLeft: "100px", fontSize: '30px' }}></i></p>
                        <p className='linearhelp' style={{ lineHeight: "1.5" }}> Like a know the secret of transforming a 2-14 <br /> team into a 3x Super bowl winning Dynasty? </p>
                        <button className='designbtns'>Leadership </button><span ><button className='researchbtns'>Management</button></span>
                    </div>
                </div>
                <div className="thrd1st">
                    <img src={img6} alt="img5" className='img5' />
                    <p className='oliv' style={{ marginLeft: "48px" }}>Demi Wikinson  • 1 Jan 2023</p>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='migrliear' style={{ marginLeft: "30px", fontWeight: "bold", marginTop: "15px" }}>PM mental models<i class="fa-solid fa-square-arrow-up-right" style={{ marginLeft: "100px", fontSize: '30px' }}></i></p>
                        <p className='linearhelp' style={{ lineHeight: "1.5" }}> Mental modes are simple expression of complex <br /> processsor or relationship </p>
                        <button className='designbtns'>Product  </button><span ><button className='researchbtns'>Research</button></span> <span ><button className='presentbtn'>Framework</button></span>
                    </div>
                </div>
                <div className="thrd1st">
                    <img src={img7} alt="img5" className='img5' />
                    <p className='oliv' style={{ marginLeft: "48px" }}>Alec Whitten  • 1 Jan 2023</p>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='migrliear' style={{ marginLeft: "30px", fontWeight: "bold", marginTop: "15px" }}>Bill Walsh leadership lessons <i class="fa-solid fa-square-arrow-up-right" style={{ marginLeft: "100px", fontSize: '30px' }}></i></p>
                        <p className='linearhelp' style={{ lineHeight: "1.5" }}> Like a know the secret of transforming a 2-14 <br /> team into a 3x Super bowl winning Dynasty? </p>
                        <button className='designbtns'>Leadership </button><span ><button className='researchbtns'>Management</button></span>
                    </div>
                </div>
                </div>
                </div>
                {/* end 4th section */}
                <br /><hr />
           
                  <br /><br />
                <p style={{marginLeft:"80px"}}><pre>© 2023    Twitter    Linkdin     Email    RSS feed    Add  to    Feedly </pre></p>
 <br /><br />

    </>
  )
}

export default Newsletter;
