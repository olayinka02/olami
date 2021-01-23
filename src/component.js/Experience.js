import React, { useEffect } from 'react';
import { ExternalLink } from 'react-external-link';
import { Container, Row,Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {  BriefcaseFill, Building, GeoAltFill, CalendarMonth, StarFill,StarHalf,GeoAlt, Envelope, Github, Linkedin, TelephoneOutbound, Award, CalendarCheck,  ChatText, Twitter} from 'react-bootstrap-icons';
//import illustration1 from './imagex/illustration1.svg';


const Experience = () => {
  useEffect(() => {
     Aos.init({duration: 1200 });
  }, []);
    return (
      <div><br/><br/>
       <Container  className="experience">
        <Row>
            <Col sm={12} md={5}>
              <div  data-aos="zoom-in-up" className="experiencebg">
              <h4>Skills</h4>
              <h6>UI/UX Design</h6>
              <ul>
                <li>Figma</li>
                <li>Invision</li>
              </ul>
              <h6>Frontend Development</h6> 
              <ul> 
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6 Hands-on)</li>
                <li>Bootstrap</li>
                <li>ReactJS/React-Native</li>
              </ul>
              <h6>Backend Development</h6>
              <ul>
                <li>Nodejs (Express)</li>
                <li>PHP</li>
                <li>Python</li>
              </ul>  
              <h6>Database</h6>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>  
                <h6>Others :</h6><span style={{paddingLeft:21,}}>MATLAB</span>
              
              </div><br/>
              
              <div  data-aos="fade-up" className="experiencebg">
              <h4>Soft Skills</h4>
              <ul>
                <li>Collaboration</li>
                <li>Enthusiasm</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Adaptability</li>
                <li>Remote work</li>
                <li>Work Ethics</li>
               
              </ul>
              </div><br/>
              <div   data-aos="zoom-in-up" className="experiencebg">
                <h4>Human Language</h4>
                <ul>
                  <li>English <StarFill  width="13" height="13"  /> <StarFill  width="13" height="13"  /> <StarFill  width="13" height="13"  /> <StarFill  width="13" height="13"  /> <StarFill  width="13" height="13"  /></li>
                  <li>Yoruba  <StarFill  width="13" height="13"  /> <StarFill  width="13" height="13"  /> <StarFill  width="13" height="13"  /> <StarFill  width="13" height="13"  /> <StarFill  width="13" height="13"  /></li>
                  <li>Hausa   <StarFill  width="13" height="13"  /> <StarHalf  width="13" height="13"  /></li>
                </ul>

              </div>
            </Col>
            <Col sm={12} md={7}>
            <div  data-aos="fade-up" className="experiencebgxx">
                <h4 className="services">Work Experience</h4>
                <h5><BriefcaseFill /> Frontend Enginner (Remote)</h5>
                <h6><Building />  Jam forte technology</h6>
                <h6><GeoAltFill /> Wuse 2,Abuja, Nigeria.</h6>
                <h6><CalendarMonth /> August(2020) - present.</h6>
                <ul>
                  <li>Structure and build independent components</li>
                  <li>Deploy all web applications to Netlify for test purposes.</li>
                  <li>Agile Development including daily stand-ups.</li>
                  <li>Converting user interfaces from Figma</li>
                  <li>Actively using GitHub for all projects.</li>
                  <li>Research software engineering choices and tools</li>
                  <li>Protyping UI/UX design and makes it function like a real App</li>
                  <li>Designing and creating of giff,animation and brands</li>
                  <li>converting static design to HTML and CSS</li>
                  <li>Responsive design that work acrosss mobile and desktop devices</li>
                  <li>interactivity with CSS effects, transitions, and animation</li>
                  <li>creating forms,data validations and lots more...</li>
                  <li>Designing and creation of flyers and brands for business growth</li>
                </ul>
                </div><br/>
                <div data-aos="fade-up" className="experiencebgx">
                  <h4>Education</h4>
                  <h6><Award /> B.Sc Mathematical Sciences</h6>

                  <p><GeoAlt /> Adekunle Ajasin University Akungba-Akoko,Ondo State</p>
                  <p><CalendarCheck /> 2015-2018</p>
                </div><br/>
                <div  data-aos="fade-up" className="experiencebgx">
                  <h6 style={{color:'darkblue',}}><GeoAlt /> Abuja, Nigeria.</h6>
                  <ExternalLink href="tel:+2348101831001" style={{textDecorationLine:'none',color:'darkblue',}} >
                  <h6><TelephoneOutbound /> 08101831001</h6>
                  </ExternalLink>

                  <ExternalLink href="mailto:oluwasegunyinka.samuel@gmail.com?Subject=Mail%20to%20say%20hi." style={{textDecorationLine:'none',color:'darkblue',}} >
                  <h6><Envelope /> Email</h6>
                  </ExternalLink>
                 
                  <ExternalLink href="https://github.com/olayinka02/" style={{textDecorationLine:'none',color:'darkblue',}} >
                  <h6><Github /> Github</h6>
                  </ExternalLink>
                 
                  <ExternalLink href='//www.linkedin.com/in/akinseye-oluwasegun-yinka-319a661a9/' style={{textDecorationLine:'none',color:'darkblue',}} >
                  <h6><Linkedin /> Linkedin</h6>
                  </ExternalLink>

                  <ExternalLink href='https://twitter.com/YinkaAkinseye' style={{textDecorationLine:'none',color:'darkblue',}} >
                  <h6><Twitter /> Twitter</h6>
                  </ExternalLink>

                  
                  <ExternalLink  href=" https://wa.me/+2348101831001?text=Hello%20Ola👋🏽%20...%20"  style={{textDecorationLine:'none',color:'darkblue',}} >
                  <h6><ChatText /> Whatsapp  </h6>
                  </ExternalLink>
                  
                 

                </div>
            </Col>
            
        </Row>
       </Container><br/>
      </div>
    );
  }



export default Experience;


