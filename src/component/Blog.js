import React from 'react'
import './style.css'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import img9 from './images/img9.png'
import img10 from './images/imh10.png'

const Blog = () => {
    return (
        <>
            {/*header section app m permanent lga hua  starting m h  */}


  <hr /><h2 className='blogheading'>THE BLOG</h2><hr />

            {/* 2nd section */}
            <h3 className='recent'>Recent blog posts </h3>
            <div className="second">
                <div className="migrating">
                    {/* migrating 1st div LHS */}
                    <div className="migleft">
                        <img src={img1} alt="img-1" className='img1'  />
                        <p className='oliv'>Olivia rhye  • 1 Jan 2023</p>
                        <h3 className='uxreview'>UX review presentations <span className='uparrow'><i class="fa-solid fa-square-arrow-up-right"></i></span></h3>
                        <p className='how'> How do you create presentations that wrote your colleagesos and <br /> impress your managers? </p>
                        <div className="design">
                            <button className='designbtn'>Desugn</button>
                            <button className='researchbtn'>Research</button>
                            <button className='presentbtn'>Presentation</button>
                        </div>
                    </div>
                    {/* RHS  migrartion div */}
                    <div className="migright">
                        {/* migrigh first div */}
                        <div className="migrigfirstdiv"  >
                            <img src={img2} alt="img-2" className='img-2'  />
                            <div className="linear">
                                <p className='phonenix' style={{ marginTop: "-28px" }}>Phonenix Baker <span>. 1 Jan 2023</span></p>
                                <h4 className='migrlinear'  >Migrating to Linear 101</h4>
                                <p className='linearhelp' >Linear helps streamline software <br /><br /> projects , sprints , tasks , and bug <br />  <br /> BLOG tracking.Here's hpw tp get ...</p>
                                <button className='designbtns'  style={{color:"black"}}>Designs </button><span><button className='researchbtns'  style={{color:"red"}}>Research</button></span>
                            </div>
                        </div>

                        {/* migrigh second/bottom div */}
                        <div className="migrigfirstdiv">
                            <img src={img3} alt="img-2" className='img-3' />
                            <div className="linear" style={{ textAlign: "left" }}>
                                <p className='phonenix' style={{ marginRight: "50px" }}>Lana Steiner• 1 Jan 2023</p>
                                <h4 className='migrlinear' style={{ marginLeft: "30px" }}>Building your API Stack</h4>
                                <p className='linearhelp'>
                                    The rise of RESTful APIs has <br /> <br /> been met  by a rise in  tools for <br />  <br /> creating,testing,and manag...</p>

                                <button className='designbtns'>Designs </button><span ><button className='researchbtns'>Research</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd section */}
            <div className="thirdiv">
                <img src={img4} alt="img4" className='img4' />
                <div className="gridsystem">
                    <p className='oliv'>Olivia rhye  • 1 Jan 2023</p>
                    <p className='migrlinear' style={{ marginLeft: "30px", fontWeight: "bold" ,color:"black"}}> Grid system for better Design user interface</p>
                    <p className='linearhelp' style={{ lineHeight: "1.5" }}> A  grid system is a design tool used to arrange content on a webpage . it is  <br /> series of a vertical and horizontal line that create a matrix of intersecting <br /> points, which can be used to align and organize page elements. Grod systems. <br /> are used to create a consistent look and feel across a website, and can help <br /> to make the layout more visuakky appealing and easier to navigate </p>
                    <button className='designbtns'>Designs </button><span ><button className='researchbtns'>Interface</button></span>
                </div>
            </div>

            {/* 4th section */}
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
            </div> <br /><br />

            {/* 2nt downdiv 4th section*/}
            <div className="thirdfirstdiv">
                {/* ist  updiv 4th section*/}
                <div className="thrdupmain">
                    <div className="thrd1st">
                        <img src={img8} alt="img5" className='img5' />
                        <p className='oliv' style={{ marginLeft: "48px" }}>Alec Whitten  • 1 Jan 2023</p>
                        <div style={{ marginLeft: "20px" }}>
                            <p className='migrliear' style={{ marginLeft: "30px", fontWeight: "bold", marginTop: "15px" }}>Bill Walsh leadership lessons <i class="fa-solid fa-square-arrow-up-right" style={{ marginLeft: "100px", fontSize: '30px' }}></i></p>
                            <p className='linearhelp' style={{ lineHeight: "1.5" }}> Like a know the secret of transforming a 2-14 <br /> team into a 3x Super bowl winning Dynasty? </p>
                            <button className='designbtns'>Leadership </button><span ><button className='researchbtns'>Management</button></span>
                        </div>
                    </div>
                    <div className="thrd1st">
                        <img src={img9} alt="img5" className='img5' />
                        <p className='oliv' style={{ marginLeft: "48px" }}>Demi Wikinson  • 1 Jan 2023</p>
                        <div style={{ marginLeft: "20px" }}>
                            <p className='migrliear' style={{ marginLeft: "30px", fontWeight: "bold", marginTop: "15px" }}>PM mental models<i class="fa-solid fa-square-arrow-up-right" style={{ marginLeft: "100px", fontSize: '30px' }}></i></p>
                            <p className='linearhelp' style={{ lineHeight: "1.5" }}> Mental modes are simple expression of complex <br /> processsor or relationship </p>
                            <button className='designbtns'>Product  </button><span ><button className='researchbtns'>Research</button></span> <span ><button className='presentbtn'>Framework</button></span>
                        </div>
                    </div>
                    <div className="thrd1st">
                        <img src={img10} alt="img5" className='img5' />
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
            <br /><hr /> <br /> <br />
            <div className="pre">
                <p style={{ marginLeft: '90px', color: "gray" }}> <i class="fa-solid fa-arrow-left"></i> Previous</p>
                <div className="count" style={{ color: "gray" }}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>...</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                </div>
                <p style={{ marginLeft: '450px', color: "gray" }}>Next <i class="fa-solid fa-arrow-right"></i></p>
                <br /><br /><br /><br />

            </div>
            {/* last section */}
            <p style={{ marginLeft: "80px" }}><pre>© 2023    Twitter    Linkdin     Email    RSS feed    Add  to    Feedly </pre></p>
        </>
    )
}
export default Blog;
