import React, { useEffect } from 'react';
import { ExternalLink } from 'react-external-link';

import { Container, Col, Row, Carousel } from 'react-bootstrap';
import { BoxArrowUpRight,Cloud}  from 'react-bootstrap-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import brandone from './imagex/brandone.svg';
import brandtwo from './imagex/brandtwo.svg';
import brandfour from './imagex/brandfour.svg';
import brandfive from './imagex/brandfive.svg';
import brandthree from './imagex/brandthree.svg';
import brandsix from './imagex/brandsix.svg';
import brandframeone from './imagex/brandframeone.svg';
import brandframetwo from './imagex/brandframetwo.svg';
import brandframethree from './imagex/brandframethree.svg';
import brandframefour from './imagex/brandframefour.svg';
import electric from './imagex/electric.png';
import  upwork0 from './imagex/upwork0.png';
import  upwork1 from './imagex/upwork1.png';
import  upwork2 from './imagex/upwork2.png';
import  upwork3 from './imagex/upwork3.png';
import  brick1 from './imagex/brick1.png';
import  brick2 from './imagex/brick2.png';
import  brick3 from './imagex/brick3.png';
import  k1 from './imagex/k1.png';
import  k2 from './imagex/k2.png';
import  ped1 from './imagex/ped1.png';
import  ped2 from './imagex/ped2.png';
import  ped3 from './imagex/ped3.png';
import  ped4 from './imagex/ped4.png';
import  bible from './imagex/bible.png';
import  math1 from './imagex/math1.png';
import  math2 from './imagex/math2.png';
import  math3 from './imagex/math3.png';




const Projects = () => {
  useEffect(() => {
     Aos.init({duration: 1200 });
  }, []);
    return (
      <div className="project">
          <center><h2 className="service">Latest Projects</h2></center><hr/>
       <Container >
           <Row>
               <Col  data-aos="fade-up" sm={12} md={3}>
                   <div className="projectbg">
                   <h5>Brand Designed.</h5><hr/>
                   <Row>
                       <Col sm={5} md={12} xs={12}>
                         <img src={brandone}  alt="brand" className="brandimg" />
                       </Col>
                       <Col sm={7} md={12} xs={12}>
                        <p className="brandquote">Upwork brands,a clone app</p>
                       </Col>
                   </Row><hr/>
                   <Row>
                       <Col sm={5} md={12} xs={12}>
                         <img src={brandtwo} alt="brand" className="brandimg" />
                       </Col>
                       <Col sm={7} md={12} xs={12}>
                       <p className="brandquote">Fuelup Education brand</p>
                       </Col>
                   </Row><hr/>
                   <Row>
                       <Col sm={5} md={12} xs={12}>
                         <img src={brandfour} alt="brand" className="brandimg" />
                       </Col>
                       <Col sm={7} md={12} xs={12}>
                       <p className="brandquote">Bricksbond synergy limited(Estate Management)</p>  
                       </Col>
                   </Row><hr/>
                   <Row>
                       <Col sm={5} md={12} xs={12}>
                         <img src={brandfive} alt="brand" className="brandimg" />
                       </Col>
                       <Col sm={7} md={12} xs={12}>
                       <p className="brandquote">Kxpress Limited( Delivery App )</p>
                       </Col>
                   </Row><hr/>
                   <Row>
                       <Col sm={5} md={12} xs={12}>
                         <img src={brandthree} alt="brand" className="brandimg" />
                       </Col>
                       <Col sm={7} md={12} xs={12}>
                       <p className="brandquote">Peddles( E-commerce )</p>
                       </Col>
                   </Row><hr/>
                   <Row>
                       <Col sm={5} md={12} xs={12}>
                         <img src={brandsix} alt="brand" className="brandimg" />
                       </Col>
                       <Col sm={7} md={12} xs={12}>
                       <p className="brandquote"> Crosgrove Limited( Estate Management )</p>
                       </Col>
                   </Row>
                   </div><br/>
                   <div className="projectbg"  >
                   <h5>Product Designed.</h5><hr/>
                   <Row>
                     <Col sm={12} md={12}>
                     <ExternalLink href="//oluwasegunyinkas.myportfolio.com" style={{textDecorationLine:'none',color:'blue',}} >
                         <h6>
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
                          <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                          <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                        </svg> Behance</h6>
                       </ExternalLink>

                       <ExternalLink href="//oluwasegunyinkas.myportfolio.com" style={{textDecorationLine:'none',color:'blue',}} >
                         <h6>
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
                          <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                          <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                        </svg> Dribbles</h6>
                       </ExternalLink>
                      
                       
                     </Col>
                     
                   </Row>


                   </div>
               </Col>
               <Col sm={12} md={9}  data-aos="fade-up" >
                   <div className="projectbgx">
                   <h4>Web development</h4><hr/>
                   <Row >
                   <Col sm={6} md={6}>
                   <Carousel>
                   <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={brick1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={brick2}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={brick3}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={brandframeone}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                           <img
                            className="d-block w-100"
                            src={brandframetwo}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                   </Col>
                    <Col sm={6} md={6}>
                        <h6><Cloud /> Brickbonds Synergy Limited.</h6>
                        <ul>
                            <li>Converting all figma design to Reactjs code.</li>
                            <li>Designing giff and animation for better illustration.</li>
                            <li>Content write-up</li>
                            <li>Implimentation of <b>formspree</b> for the submition of consultant booking</li>
                            <h6 ><b style={{color:'red',}}>Technology:</b> Figma, CSS, React-Bootstrap, Reactjs, Formspree,</h6>
                            <ExternalLink href="https://brickbonds.netlify.app/" style={{textDecorationLine:'none',color:'blue',}}>
                            <h6 style={{color:'blue',}}><BoxArrowUpRight /> check out</h6>
                            </ExternalLink>
                        </ul>
                    </Col>
                   </Row><hr/>
                   <Row >
                   <Col sm={6} md={6}>
                   <Carousel>
                   <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={k1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={k2}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={brandframethree}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                           <img
                            className="d-block w-100"
                            src={brandframefour}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                   </Col>
                    <Col sm={6} md={6}>
                        <h6><Cloud /> Kxpress Limited.</h6>
                        <ul>
                            <li>Converting all figma design to HTML & CSS code.</li>
                            <li>Making cool animation with CSS keyframes.</li>
                            <li>Content write-up</li>
                            <h6 ><b style={{color:'red',}}>Technology:</b> Figma, CSS, HTML, Bootstrap, JavaScript</h6>
                            <ExternalLink href="https://kxxpress.netlify.app/index.html" style={{textDecorationLine:'none',color:'blue',}}>
                            <h6 style={{color:'blue',}}><BoxArrowUpRight /> check out</h6>
                            </ExternalLink>
                        </ul>
                    </Col>
                   </Row><hr/>
                   <Row >
                   <Col sm={6} md={6}>
                   <Carousel>
                       <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={ped2}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={ped1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={ped4}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={ped3}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                   </Col>
                    <Col sm={6} md={6}>
                        <h6><Cloud /> Peedles (e-commerce).</h6>
                        <ul>
                            <li>Converting all figma design to code.</li>
                            <li>Designing giff for better illustration.</li>
                            <li>Content write-up</li>
                            <li>Creation of a short video for advertisement</li>
                            <h6 ><b style={{color:'red',}}>Technology:</b> Figma, CSS, React-Bootsrap, Reactjs</h6>
                            <ExternalLink href="https://olayinka02.github.io/ped/" style={{textDecorationLine:'none',color:'blue',}}>
                            <h6 style={{color:'blue',}}><BoxArrowUpRight /> check out (Under-construction)</h6>
                            </ExternalLink>
                        </ul>
                    </Col>
                   </Row><hr/>
                   <Row >
                   <Col sm={6} md={6}>
                   <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={upwork0}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                           <img
                            className="d-block w-100"
                            src={upwork1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                           <img
                            className="d-block w-100"
                            src={upwork2}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                           <img
                            className="d-block w-100"
                            src={upwork3}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                   </Col>
                    <Col sm={6} md={6}>
                        <h6><Cloud /> Upwork(Clone-App).</h6>
                        <ul>
                            <li>Converting all figma design to Reactjs code.</li>
                            <li>Designing giff and animation for better illustration.</li>
                            <li>Content write-up</li>
                            <h6 ><b style={{color:'red',}}>Technology:</b> Figma, CSS, React-Bootsrap, Reactjs</h6>
                            <ExternalLink href="https://upwork-clonex.netlify.app/" style={{textDecorationLine:'none',color:'blue',}}>
                              <h6 style={{color:'blue',}}><BoxArrowUpRight /> check out</h6>
                            </ExternalLink>
                        </ul>
                    </Col>
                   </Row><hr/>
                   <Row >
                   <Col sm={6} md={6}>
                   <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={electric}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                   </Col>
                    <Col sm={6} md={6}>
                        <h6><Cloud /> FuelUp-Education.</h6>
                        <ul>
                            <li>Converting all figma design to Reactjs code.</li>
                            <li>Designing and creation of brands.</li>
                            <li>Content write-up</li>
                            <h6 ><b style={{color:'red',}}>Technology:</b> Figma, CSS-3, Reactjs, React-Bootsrap</h6>
                            <ExternalLink href="https://electrical-course.netlify.app/" style={{textDecorationLine:'none',color:'blue',}}>
                              <h6 style={{color:'blue',}}><BoxArrowUpRight /> check out</h6>
                            </ExternalLink>
                        </ul>
                    </Col>
                   </Row><hr/>
                   <Row >
                   <Col sm={6} md={6}>
                   <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={bible}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                   </Col>
                    <Col sm={6} md={6}>
                    <h6><Cloud /> Bible-quiz.</h6>
                        <ul>
                            <li>Designing with simple HTML and CSS.</li>
                            <li>Bootstrap3.0 for better responsiveness throughout different screen.</li>
                            <li>Content write-up</li>
                            <h6 ><b style={{color:'red',}}>Technology:</b> CSS, Bootstrap3, HTML5, JavaScript </h6>
                            <ExternalLink href="https://olayinka02.github.io/bible-quiz/" style={{textDecorationLine:'none',color:'blue',}}>
                              <h6 style={{color:'blue',}}><BoxArrowUpRight /> check out</h6>
                            </ExternalLink>
                        </ul>
                    </Col>
                   </Row><hr/>
                   <Row >
                   <Col sm={6} md={6}>
                   <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={math3}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                           <img
                            className="d-block w-100"
                            src={math2}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                           <img
                            className="d-block w-100"
                            src={math1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                   </Col>
                    <Col sm={6} md={6}>
                        <h6><Cloud /> Calculus Mathematics Clinic.</h6>
                        <ul>
                            <li>Designing with simple HTML and CSS.</li>
                            <li>SemanticUI for better responsiveness throughout different screen.</li>
                            <li>Content write-up</li>
                            <h6 ><b style={{color:'red',}}>Technology:</b> CSS, Semantic-UI, HTML5, JavaScript </h6>
                            <ExternalLink href="https://olayinka02.github.io/mathenter-clinic/" style={{textDecorationLine:'none',color:'blue',}}>
                              <h6 style={{color:'blue',}}><BoxArrowUpRight /> check out (need some update)</h6>
                              </ExternalLink>
                        </ul>
                    </Col>
                   </Row>
                   </div>
               </Col>
           </Row>
       </Container>
      </div>
    );
  }



export default Projects;
