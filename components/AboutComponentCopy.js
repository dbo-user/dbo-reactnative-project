import React, { Component }  from 'react';
import { Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import '../resume.css';

class About extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (
            

            <div className="container">
                <div className="row">

                    
                    <div className="col-2 d-none d-sm-block">

                        <Nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                                <span className="d-block d-lg-none">David Oakley</span>
                                <span className="d-none d-lg-block">
                                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile-lg-image.jpg"
                                    alt="david oakley" title="top of page"/>
                                </span>
                            </a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#education">Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#interests">Interests</a>
                                </li>
                                
                                </ul>
                            </div>
                        </Nav>

                    </div>
                    

                    
                    <div className="col">

                        {/*-- about -*/}                       
                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                            <div className="w-100" style={{marginLeft: "-5px", marginTop:"20px"}}>
                                <h1 className="mb-0">David
                                <span className="text-primary">Oakley</span>
                                </h1>
                                <div className="subheading mb-5">207 Gulf Stream Drive · Emerald Isle, NC
                                28594 · (252) 240-9101 ·

                                    <a id="emailId" href="mailto:01dboakley@gmail.com"> 01dboakley@gmail.com</a>
                                </div>
                                <p className="lead">I'm an inspired Full-Stack Web Designer & Developer with hands on
                                experience of designing, developing, and maintaining web and mobile applications. I quietly design
                                and code high quality, responsive websites while meeting deadline requirements. I listen. I'm a
                                problem solver and I have a strong work ethic. Looking forward to applying my skills in a
                                challenging role.</p>
                            </div>
                        </section>
                        
                        


                        {/*-- experience -*/}
                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience">
                            <div className="w-100" style={{marginLeft: "-5px", marginTop: "110px"}}>
                                <h2 className="mb-5">Experience</h2>

                                <div className="resume-item d-flex flex-column flex-md-row align-items-center mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Computer Programming Instructor</h3>
                                        <div className="subheading mb-3">Coastal Carolina Community College</div>
                                        <p>I have a successful track record at Coastal of over 30 years. I taught and developed
                                        technical, college level computer programming courses. This was all about teaching, developing, and
                                        implementing traditional and online software courses to motivate and enhance student learning.</p>
                                    </div>
                                    <div className="resume-date text-md-right" style={{marginRight: "-40px"}}>
                                        <span className="text-primary">August 1983 - Present</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Freelance Web Developer</h3>
                                        <div className="subheading mb-3">Web Development</div>
                                        <p>Mobile, tablet, and traditional sites.</p>
                                    </div>
                                    <div className="resume-date text-md-right" style={{marginRight: "-40px"}}>
                                        <span className="text-primary">December 2011 - June 2013</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
                                    <div className="resume-content">
                                        <h3 className="mb-0">References</h3>
                                        <div className="subheading mb-1">Yvonne Leonard</div>
                                        <p>(910) 638-6365 | leonardy@coastalcarolina.edu</p>
                                        <p>Mrs. Leonard was my Computer Department Head and Division Chair for about 30 years at
                                        Coastal Carolina Community College.</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span></span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
                                    <div className="resume-content">
                                        <div className="subheading mb-1">Michael Decoursey</div>
                                        <p>(910) 938-6367 | decourseym@coastalcarolina.edu</p>
                                        <p>Mr. Decoursey was a colleague at Coastal. We worked in the same computer department
                                        for 10 years.</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span></span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
                                    <div className="resume-content">
                                        <div className="subheading mb-1">Brett Cabradilla</div>
                                        <p>(910) 938-6366 | cabradilliab@coastalcarolina.edu</p>
                                        <p>Mr. Cabradilla is the current Computer Department Head at Coastal. We worked together
                                        for about 10 years.</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span></span>
                                    </div>
                                </div>

                            </div>
                        </section>
                        
                        {/*-- end experience -*/}


                        {/*-- education -*/}
                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                            <div className="w-100" style={{marginLeft: "-5px", marginTop: "110px"}}>
                                <h2 className="mb-5">Education</h2>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Nucamp</h3>
                                        <div className="subheading mb-3">Full-Stack</div>
                                        <p>Web Fundamentals and Full-Stack Web and Mobile App Development</p> 
                                    </div>
                                    <div className="resume-date text-md-right" style={{marginRight: "-40px"}}>
                                        <span className="text-primary">September 2019 - February 2020</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">East Carolina University</h3>
                                        <div className="subheading mb-3">East Carolina School of Industry and Technology</div>
                                        <p>Graduate Website Developer Certificate</p>
                                        <p>GPA: 4.0</p>
                                    </div>
                                    <div className="resume-date text-md-right" style={{marginRight: "-40px"}}>
                                        <span className="text-primary">August 2003 - Dec 2004</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Campbell University</h3>
                                        <div className="subheading mb-3">Business Admin</div>
                                        <p>MBA</p>
                                        <p>GPA: 3.40</p>
                                    </div>
                                    <div className="resume-date text-md-right" style={{marginRight: "-40px"}}>
                                        <span className="text-primary">August 1981 - May 1983</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Campbell University</h3>
                                        <div className="subheading mb-3">Data Processing</div>
                                        <p>BBA</p>
                                        <p>GPA: 3.449</p>
                                    </div>
                                    <div className="resume-date text-md-right" style={{marginRight: "-40px"}}>
                                        <span className="text-primary">August 1975 - May 1981</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Durham Technical Community College</h3>
                                        <div className="subheading mb-3"> Business Data Processing</div>
                                        <p>AAS</p>
                                        <p>GPA: 3.75</p>
                                    </div>
                                    <div className="resume-date text-md-right" style={{marginRight: "-40px"}}>
                                        <span className="text-primary">August 1976S - June 1978</span>
                                    </div>
                                </div>
                            </div>

                        </section>
                        
                        {/*-- end education -*/}


                        {/*-- skills -*/}
                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                            <div className="w-100" style={{marginLeft: "-5px", marginTop: "-80px"}}>
                                <h2 className="mb-5">Skills</h2>
                                <div className="subheading mb-3">Web Devlopment &amp; Tools</div>
                                <ul className="list-inline" id="skillsIcons">
                                <li className="list-inline-item">
                                    <i className="fab fa-html5" title="HTML5"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-css3-alt" title="CSS"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-js" title="JavaScript"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-java" title="Java"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-react" title="react"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-node-js" title="node.js"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-sass"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-bootstrap" title="Bootstrap 4"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fas fa-database" title="mongo database"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-npm" title="NPM"></i>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fas fa-smile" title="Problem Solver"></i>
                                </li>
                                
                                </ul> 
                            </div>
                        </section>
                        
                       

                        {/*-- interests -*/}
                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                            <div className="w-100" style={{marginLeft: "-5px", marginTop: "22px"}}>
                                <h2 className="mb-5">Interests</h2>
                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <p id="pmargin">Apart from being a web developer, I enjoy my time being on the beach. During the
                                        warmer months, I enjoy surfing, swimming, and walking on the beach.</p>
                                        <p id="pmargin" className="mb-0">I also enjoy my work-out in the gym, spending time with my wife,
                                        studying, and watching Netflix. I'm always learning and exploring the latest technology advancements
                                        in web development.</p>
                                    </div>
                                    <div className="resume-date text-md-right"  style={{marginBottom: "50px"}}>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </div>
          </div>   
                 
           
        );
    } 
    
} 

export default About;
