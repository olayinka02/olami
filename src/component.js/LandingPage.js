import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CursorFill } from 'react-bootstrap-icons';
import ola1 from './imagex/ola1.jpg';
import Title from './Title.js';



class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage">
       <Container >
         <Row className="justify-content-md-center landingpagebody" >
           <Col sm={12} md={4} xs={12} >
             <center>
             <img src={ola1} alt="altimage" className="myimage" />
             </center>
           </Col>
           <Col  sm={12} md={7} xs={12} >
           <center>
             <div className="details">
               <h2 className="name"> Oluwasegun 0layinka</h2>
               <Title />
               <ExternalLink href="mailto:oluwasegunyinka.samuel@gmail.com?Subject=Mail%20to%20say%20hi." >
               <Button className="btnx" variant="info">Let's grab a coffee. <CursorFill /></Button>
               </ExternalLink>
             </div>
             </center>
           </Col>
         </Row>
       </Container>
      </div>
    );
  }
}


export default LandingPage;
