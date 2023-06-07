import React from "react";
import './Contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return(
<>
<div>

    <div className="contactheader">
        Get in touch with Nats
    </div>
</div>
<div>
    <div className="contacttop">
        <div className="contacttoptext">
    Do you want to take the next step in your digital movement?
     Do you have a specific project in mind and would like a quote? 
     Feel free to contact us and we will guide you in the right 
     direction:hello@nats.se
    |+46 (0) 123 45 67 89
    </div>
    </div>
</div>




{/* <div className="projectflex"> */}
    {/* <div className="projectcon">
        
    </div> */}
    <div className="projecttext">
    <Container>
        <Row>
            <Col>
            <div className="projectheader"> Project Manager and Administration</div>
        <p className="projectheader2">Contact us regarding questions about projects, finances or general questions.</p>
            </Col>
        </Row>
      <Row>
        <Col className="admin">
        {/* <div><img /><div> */}
        <div className="adminjob">CUSTOMER MANAGER</div>
        <div className="adminname">Peter Lundgren </div>
        <div className="adminjob">+46 (0) 784-23 33 12</div>
        <div className="adminjob">peter.lundgren@nats.se</div>
        </Col>

        <Col className="admin">
        <div className="adminjob">CFO & PROJECT MANAGER</div>
        <div className="adminname">Sarah Edling </div>
        <div className="adminjob">+46 (0) 764-23 23 14</div>
        <div className="adminjob">sarah.edling@nats.se</div>
        </Col>

        <Col className="admin">
        <div className="adminjob">PROJECT MANAGER</div>
        <div className="adminname">Mia Stads </div>
        <div className="adminjob">+46 (0) 704-22 33 11</div>
        <div className="adminjob">mia.stads@nats.se</div>
        </Col>

        <Col className="admin">
        <div className="adminjob">COO</div>
        <div className="adminname">Maja Karlsson </div>
        <div className="adminjob">+46 (0) 714-83 32 12</div>
        <div className="adminjob">maja.karlsson@nats.se</div>
        </Col>

        <Col className="admin">
        <div className="adminjob">CEO</div>
        <div className="adminname">Sophie Knaps</div>
        <div className="adminjob">+46 (0) 724-93 39 18</div>
        <div className="adminjob">sofie.knaps@nats.se</div>
        </Col>

      </Row>
      </Container>
       
    </div>

{/* </div> */}

<div>
    <div>  Work image</div>
   
</div>
<div className="car">
<div className="carflex">
    <div className="mapheader">COME HERE BY CAR</div>
    <div className="cartext">You will find a nice parking space further
     up the street. There you pay by card
    or with the app, which you can download here: App or Google Play.
    </div>
</div>
</div>


<Container>
      <Row>
        <Col className="maptext">
        <div className="mapheader">TAKE PUBLIC TRANSPORT</div>
        <div className="mappara">
        If you go by public transport, the nearest stop is Järntorget, and a large 
        number of trams and buses go there. For 
        more information about public transport: <a className="vastralink" href="https://www.vasttrafik.se/">  www.vasttrafik.se</a>
        </div>
        </Col>
        <Col xs={6}>
<div>
<iframe className="imap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9312.612641727197!2d11.989476531560967!3d57.69766831865602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff39eead6e881%3A0x18f0a3a7738a484f!2sLiseberg!5e0!3m2!1sen!2sse!4v1685445755567!5m2!1sen!2sse"  title='location' width="800" height="550" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div></Col>
      </Row>
      </Container>




</>
    )
}
export default Contact;