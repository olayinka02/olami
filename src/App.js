import React, { Component } from 'react';
import LandingPage from './component.js/LandingPage';
import Navbarx from './component.js/Navbarx';
import Introduction from './component.js/Introduction';
import Services from './component.js/Services';
import Experience from './component.js/Experience';
import Projects from './component.js/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Navbarx />
       <LandingPage/><br/>
       <Introduction /><br/><br/>
       <Services />
       <Experience /><br/><br/><br/><br/>
       <Projects /><br/><br/>
      </div>
    );
  }
}

export default App;


