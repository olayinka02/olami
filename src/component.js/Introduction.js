import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import illustrationone from './imagex/illustrationone.svg';




const Introduction = () => {
  useEffect(() => {
     Aos.init({duration: 1000 });
  }, []);
    return (
      <div className="introduction">
       <Container >
           <Row>
               <Col sm={12} md={5} xs={12}>
                 <center>
                 <img src={illustrationone} alt="illustration" className="introillustration" />
                 </center>
               </Col>
               <Col sm={12} md={7} xs={12} data-aos="fade-up" className="introduction">
               <h3>Introduction.</h3>
               <p>
               Hi there 👋🏽, I am 0layinka, a web developer (Frontend Engineer). I have over two years experience 
                building pixel-perfect user interfaces &amp; awesome experiences, working with bleeding 
                edge technologies to solve problems. I speak React right now.
               </p>
               <p>
               Oluwasegun 0layinka is a highly productive frontend engineer. I am a fast and 
               flexible learner, a strong advocate for adhering to best 
               practices and result-oriented.
               </p>
               <p>0layinka is a Mathematician (Mathematics tutor) with high skills of 
                explaining and solving Mathematical problems using real life situation.</p>
               </Col>
              
           </Row>
       </Container>
      </div>
    );
  }



export default Introduction;
