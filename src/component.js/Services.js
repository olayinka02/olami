import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ExternalLink } from 'react-external-link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import illustration1 from './imagex/illustration1.svg';
import illustration2 from './imagex/illustration2.svg';
import illustration3 from './imagex/illustration3.svg';
import illustration4 from './imagex/illustration4.svg';


const Services = () => {
  useEffect(() => {
     Aos.init({duration: 2000 });
  }, []);
    return (
      <div>
       <Container fluid   className="servicebg">
         <center>
           <center  data-aos="fade-up">
           <h2 className="service">Services</h2>
           <h6  className="service" >C0ntact 0la for any of the following.</h6>
           </center>
          
           <Row>
             
               <Col md={4} sm={12}>
                 <div data-aos="fade-up" className="servicebodyx">
                    <center>
                    <img src={illustration1} alt="illustrationimg" className="illustrationimg" />
                    <h6>web development</h6>
                   <p>
                   I am responsible for a responsive web pages 
                    and app scalling through different web screen, with some nice and cool animation
                    </p>
                    </center>
                 </div>
               </Col>
               <Col  md={4} sm={12} >
                   <Row sm={12} md={12}>
                    <div data-aos="fade-up" className="servicebody">
                    <center>
                    <img src={illustration2} alt="illustrationimg" className="illustrationimg" />
                    <center> <h6>mobile development</h6></center>
                    <p>I am a junior mobile Developer,equiped 
                    with a skillfull knowledge of ReactJS (Native), 
                    converting Figma design to mobile App using <ExternalLink href="https://www.bravostudio.app/" style={{textDecorationLine:'none',color:'darkblue',}} > 
                      Bravo
                     </ExternalLink> technology.
                   
                    </p>
                    </center>
                    </div>
                   </Row>
                   <Row sm={12} md={12}>
                   <div data-aos="fade-up" className="servicebody">
                    <center>
                    <img src={illustration3} alt="illustrationimg" className="illustrationimg" />
                    <center><h6>UI/UX development</h6></center>
                    <p>I am UI/UX Developer,Product designer 
                      with high skills in <ExternalLink href="https://www.figma.com/about/" style={{textDecorationLine:'none',color:'darkblue',}} > Figma</ExternalLink> and <ExternalLink href="https://www.invisionapp.com/company" style={{textDecorationLine:'none',color:'darkblue',}} > invision</ExternalLink> as the technology tool,Implementing and making use of some plugin for animation
                    </p>
                    </center>
                 </div>
                   </Row>
               </Col>
               <Col  md={4} sm={12} >
               <div data-aos="fade-up" className="servicebodyx">
                 <center>
                   <img src={illustration4} alt="illustrationimg" className="illustrationimg" />
                   <h6>mathematics tutor</h6>
                   <p>
                     I am a Mathematician, with high skills of 
                     explaining and solving Mathematical problems 
                     using real life situation. 
                    </p>
                 </center>
                 </div>
               </Col>
           </Row>
           </center><br/><br/>
       </Container>
      </div>
    );
  }



export default Services;



