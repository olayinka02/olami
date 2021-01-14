import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { CursorFill } from 'react-bootstrap-icons';
import use from './imagex/use.jpg';
import Title from './Title.js';



class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage">
       <Container >
         <Row className="justify-content-md-center landingpagebody" >
           <Col sm={12} md={6} >
             <img src={use} alt="altimage" className="myimage" />
           </Col>
           <Col  sm={12} md={6} >
             <div className="details">
             <h2 className="name">Oluwasegun 0layinka</h2>
             <Title />
           
             <Button className="btnx" variant="info">Let's grab a coffee. <CursorFill /></Button>
             
             </div>
           </Col>
         </Row>
       </Container>
      </div>
    );
  }
}


export default LandingPage;
