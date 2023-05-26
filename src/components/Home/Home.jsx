import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import './Home.css'

const Home = () => {
    return (

    <>
    <div className="hometopflex1"></div>
    <div className="hometopcont"></div>
    <section className="topsection">
<img src={require('../../assets/vrhome.jpeg')} alt='vrheadset' style={{ filter: 'brightness(70%)', width: '100vw', height: '100vh', objectFit: 'cover' }}/>
        <div className='toptext'>
            <div className="bigtop">
            Welcome to Nats -digital agency
            </div>
            {'\n'} 
            <div className="smalltop">
        We will join you in reaching your full potential
        </div>
        </div>
    </section>


    
    <section className="servicehome">
        <div className="servicecon">
<div className='scontainers'>
<div className="iconhome"><i className="bi bi-person-fill"></i></div>
    <div className='scontainershead'>UX design</div>

    <div className='scontainersmain'>
UX design is about creating good user experiences. The goal is to develop products and services that simplify and improve the experience for people.
</div>

</div>
<div className='scontainers'>
    <div className="iconhome"><i className="bi bi-phone"></i></div>
    <div className='scontainershead'>App development</div>
    <div className='scontainersmain'>Modern smartphones possess enormous power. With an app, we can make full use of this.</div>

</div>
<div className='scontainers'>
    <div className="iconhome"><i className="bi bi-boxes"></i></div>
    <div className='scontainershead'> Augmented Reality</div>
    <div className='scontainersmain'>Using the latest AR application development frameworks, we can help you and your users take the 
leap into the future of computing, today.</div>
</div>
<div className='scontainers'>
    <div className="iconhome"><i className="bi bi-chat-text"></i></div>
<div className='scontainershead'>Animated movies</div>
<div className='scontainersmain'>
When you need to explain a product, service or complex flows in moving form.
</div>
</div>
        </div>

        {/* <div className="sbottom">See more of our services or contact us via email:hello@hoys.se</div> */}
    </section>
<section className="homeinfo" >
    <div className="nats">
        <div className="natsbox">
        <div className="homeheaders">THIS IS NATS</div>
        <div className="homebody">A digital agency in Sweden with talent for technology, design and film.
             We are project managers, strategists, developers, designers, creators, directors 
             and motion artists.</div>
             </div>
    </div>
</section>

<section>
    <div className="motivation">
        <div className='motivationbox'>
        <div className="homeheaders">OUR MOTIVATION</div>
        <div className="homebody">
        We are tasked with creating valueable work through our passion. 
        The goal is to simplify, improve and design. 
        We make life easier for everyone.
        </div>
        </div>
    </div>
</section>

<section>
    <div className="work">
        <div className='workbox'>
        <div className="homeheaders">HOW WE WORK</div>
        <div className="homebody">
        We work closely and in an integrated manner with our clients. Puts us into 
        the business, brainstorms 
        strong creative ideas, knocks the code and measures the effect. All under one roof.
        </div>
        </div>
    </div>
</section>
<section>
    <div className="flexhome">
        <div className="flexboxlayout1">
        <a href="/services">
       
           <div className="flexboxlayout1text">
            <div>Services</div>
            <div className="readmore">Read More</div>
            </div>
            </a>
        </div>
        <div className="flexboxlayout2">
        <a href="/about">
       <div className="flexboxlayout2text"> 
        <div>About Nats</div>
        <div className="readmore">Read More</div>
        </div>
        </a>
        </div>
    </div>
</section>

<section className="footer">
            <div>
                <div>
                <Container style={{paddingTop: '50px'}}>
      <Row>
       
        <Col><p className='bottomheaders'>CONTACT</p>
    <p><a className='bottomlinks' href='/contact'>hello@nats.se</a></p>
    <p><a className='bottomlinks' href='/contact'>+46 123 45 67 89</a></p>
    
    </Col>
        <Col >
        <p className='bottomheaders'>ADDRESS</p>
        <p>Sveagatan 28, 123 45 Vara</p>
        <p><a className='bottomlinks' href="https://www.google.com/maps/place/E-Tr%C3%A4dg%C3%A5rd/@58.2519024,13.0068573,17z/data=!3m1!4b1!4m6!3m5!1s0x465acfdbd407861f:0x5d5c1711b909038c!8m2!3d58.2519024!4d13.009046!16s%2Fg%2F1hc3_9fpl">Hitta Hit</a></p>
      
        </Col>
        <Col >
        <p className='bottomheaders'>SOCIAL</p>
        <p>
            <a style={{paddingRight: '10px'}} href="https://main.dkibz9e78ls53.amplifyapp.com/" i className="bi bi-instagram bottomlinks"> </a>
         <a style={{paddingRight: '10px'}} href="https://github.com/nataliemajadixon" i className="bi bi-facebook bottomlinks"> </a>
         <a href="https://www.linkedin.com/in/nataliedixon369/" i className="bi bi-linkedin bottomlinks"> </a>
         </p>
        
       
        </Col>
        
      </Row>
      
    </Container>

    
    
                </div>
                
                
                </div>
        </section>
   




    </>
    )
}
export default Home