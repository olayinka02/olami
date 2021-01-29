import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import iconxx from './imagex/iconxx.svg';



class Navbarx extends Component {
  render() {
    return (
      <div>
           <Navbar fixed="top" className="navhead">
            <Navbar.Brand href="#home">
            <img
                src={iconxx}
                className="d-inline-block align-top logo"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        </Navbar>
      
      </div>
    );
  }
}


export default Navbarx;
