import React from "react";
import './Services.css';
import { Container, Col, Row } from "react-bootstrap";



const Services = () => {
    return (
        <>
       
     <div className="topflex">
         <div className="topcon">
            <div className="headerservices">Services</div>
            <p className="headertext">With our services, we help brands design 
                and integrate their digital communication 
                and business platforms to reach their full potential.</p>
            </div>
        
                <div className="videocon">
                  <video loop autoPlay muted className='servicevideo'>
                            <source src={require('../../assets/marketingclip.mp4')}  alt='team' type='video/mp4'  /> 
  
                    </video>
                </div>
       
            
    </div>
            

        <div className="middleflex">
            <div className="middlecon">
            <div className="middlestrategy">Strategy</div>
            <p className="middletext">Everythings starts with a plan. What is the deal, benefit
                or goal? What should we achieve and why? Here we ask the questions and set the goals. 
                Through investigations and analyses, we find the best way to go. </p>
                <i class="bi bi-arrow-down-circle iconarrow"></i>
            
            </div>
            </div>
            



            <div className="flexstrategy">
        <div>
            <div><i class="bi bi-trophy straticons"></i></div>
            <div className="stratheader">Digital Strategy</div>
            <p>We develop digital strategies with a long-term
            perspective where all your channals connected. We shape the 
            strategy based on goals and objectives for the brand
            </p>
            </div>

        <div>
        <div><i class="bi bi-bezier2 straticons"></i></div>
        <div className="stratheader">Product and business development</div>
            <p>With product and business development,
                 we can develop new services
                 and solutions for your business.
            </p>
        </div>

        <div>
        <div><i class="bi bi-rocket-takeoff straticons"></i></div>
        <div className="stratheader">Research</div>
            <p>Sometimes a deep dive into the subject is 
                required. You already understand your 
                business - in order for us to be able to 
                help you fully, we also need to understand it.
                 In this way, we can complement 
                your strategy with our perspective.
            </p>
        </div>

        <div>
            <div><i class="bi bi-house-check-fill straticons"></i></div>
        <div className="stratheader">Digital inventory</div>
            <p>When we do a digital inventory, we review all
                 existing platforms and installations.
                  This is the basis for long-term work.
                 What works, and what could work better?
            </p>
        </div>
        <div>
        <div><i class="bi bi-search-heart straticons"></i></div>
        <div className="stratheader">SEO customization</div>
            <p>With SEO - keyword optimization - we adapt 
                websites so that they function optimally 
                from a search engine and user perspective. 
                We help your users find you.
            </p>
        </div>

        <div>
        <div><i class="bi bi-arrows-fullscreen straticons"></i></div>
        <div className="stratheader">Scalability</div>
            <p>We make sure that what we do is scalable, with 
                development opportunities within the 
                organization. Updates and new technologies
                 can be easily integrated as 
                they become necessary or available.
            </p>
        </div>
            </div>
       

            <div className="designflex">
            <div className="designcon">
            <div className="designstrategy">Design</div>
            <p className="designtext">Packaging, simplifying and communicating 
            complex services is part of our mission. Through user studies and a 
            close dialogue with you, your users and end customers, we
             shape an experience that supports the set goals. </p>
            </div>
            </div>





            <div className="flexdesign">
        <div>
            <div><i class="bi bi-laptop desicons"></i></div>
            <div className="stratheader">Web Design</div>
            <p>Web design is a broad discipline at the intersection
                 of graphic design, technology and psychology.
            </p>
            </div>

        <div>
        <div><i class="bi bi-person-fill desicons"></i></div>
        <div className="stratheader">UX (User Experience) Design</div>
            <p>UX design is about creating good user experiences. The
                 goal is to develop products and services that simplify 
                 and improve the experience for people. By starting from 
                 your users, we can 
                design solutions, flows and functions based on them.
            </p>
        </div>

        <div>
        <div><i class="bi bi-sliders2-vertical desicons"></i></div>
        <div className="stratheader">User Interface</div>
            <p>We design our design systems and visual interfaces with logic and 
                consistency as guiding principles. The 
                goal is interfaces that are simple, clear and educational.
            </p>
        </div>

        <div>
            <div><i class="bi bi-map desicons"></i></div>
        <div className="stratheader">Wireframes</div>
            <p>Before we present design proposals, we produce wireframes: drawings
                 that show the structure of the finished product.
            </p>
        </div>
        <div>
        <div><i class="bi bi-dribbble desicons"></i></div>
        <div className="stratheader">Icon Language</div>
            <p>We produce icon language and graphic
                 elements that follow your graphic profile.
            </p>
        </div>

        <div>
        <div><i class="bi bi-suit-spade desicons"></i></div>
        <div className="stratheader">Branding</div>
            <p>We make sure that your graphic profile works optimally in a digital
                 world. The profile must be experienced consistently in all channels
                 and each channel and platform must be fully utilized.
            </p>
        </div>

        <div>
        <div><i class="bi bi-clipboard2-pulse desicons"></i></div>
        <div className="stratheader">Flow Charts</div>
            <p>How do your users want to navigate? What do they expect in the 
                different stages of the experience? How can we support them and 
                make sure the right things are shown at the right time?
            </p>
        </div>

        <div>
        <div><i class="bi bi-diagram-3 desicons"></i></div>
        <div className="stratheader">Information architecture</div>
            <p>We ensure that the information is optimally structured according
            to the content and the selected SEO strategy.
            </p>
        </div>

        <div>
        <div><i class="bi bi-ladder desicons"></i></div>
        <div className="stratheader">Prototypes</div>
            <p>To be able to test ideas before we fully develop them, we use
                 prototyping tools to test flows and find bottlenecks.
            </p>
        </div>

       



            </div>



       

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

export default Services