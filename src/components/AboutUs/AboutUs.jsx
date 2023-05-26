import React from "react";
import './AboutUs.css'


const About = () => {
    return(
<>
<div className="abouttop">
<img src={require('../../assets/footballfield.jpeg')} alt='footballfield' style={{ width: "100vw", height:'100vh', filter: 'brightness(60%)'}} />
<div className="abouttext">

<div className="aboutbig">About Nats</div>
<div className="aboutsmall">The digital playing field is constantly being redrawn. 
    The old annual plans for advertising, marketing and web 
    developments are outdated. Now it is important to constantly
     test new approaches alongside your strategy and dare to rethink 
    and put resources where you get the best effect.
    </div>
  
</div>
</div>



<div className="aboutfdpflex">
  <div className="aboutfdpcon">
<div className="aboutfdptop"> Flexible digital partner</div>
<div className="aboutfdptext">With Nats, you get a present and flexible digital partner who masters design,
    development and Film. We make all disciplines work together in a strong whole.
    {'\n'} 
    To help you in the best way, we need to understand and be apart of designing the 
    digital plan together. We want to get to know your brands challenges and goals. Only then can we
    really make a difference.
</div>
</div>
</div>


<section>
<div className="flexabout">
    <div>

    <video loop autoPlay muted className='aboutvideo'>
    <source src={require('../../assets/soccerclip.mp4')}  alt='soccerplayer' type='video/mp4' style={{ objectFit: 'cover' }} />
  </video>
    
    </div>
    <div>
    <video loop autoPlay muted className='aboutvideo'>
    <source src={require('../../assets/marketingclip.mp4')}  alt='marketing team' type='video/mp4' style={{ objectFit: 'cover' }} />
  </video>
    </div>
</div>
</section>


<div className='aboutunderflex'>
<div className="aboutundercon">
<div className="aboutfdpundertext">
What we create must be stylish, user-friendly and strengthen the brand, but it must also drive the business.  That's why we always look at the big picture and question traditional business models, revenue streams, processes, organizations and ways of working. 

 <div className='aboutfdpundertextq'>The main question is always: How can we create greater benefit?</div>
     </div>
</div>
</div>

<section  >
    <div className="aboutclientsflex">
        <div className="aboutclientscon">
        <div className="aboutclients">All clients and projects are unique. When 
        approaching an 
        assignment, we follow a simple process:</div>
             </div>
    </div>
</section>


<section >
    <div className="about1flex">
        <div className="about1con">
        <div className='about0header'>01. PRELIMINARY STUDY</div>
        <div className="about0text">Here we map the prerequisites for different 
        systems, implementations and functions. Together with you, we also determine
         goals, content, target groups, channels and much more. The starting point
          is always to solve the assignment in the smartest possible way, while we 
          future-proof your digital development with long-term sustainable solutions.</div>
             </div>
    </div>
</section>


<section >
    <div className="about2flex">
        <div className="about2con">
        <div className='about0header'>02. CREATION</div>
        <div className="about0text">When we come up with breakthrough ideas, we always strive to push the boundaries 
        of how we can engage people and 
make their lives easier. Thinking without limits in terms of content, design and technical platforms is a matter of
 course for us. The result can be a web page , an app , an Augmented Reality experience or something else entirely. </div>
             </div>
    </div>
</section>

<section >
    <div className="about1flex">
        <div className="about1con">
        <div className='about0header'>03. PRODUCTION</div>
        <div className="about0text">Hoy are specialists in digital development, strategy, design, animation and film storytelling. 
        Together, we form an efficient and well-oiled digital machinery to produce outstanding digital solutions. We work agilely and
         with full transparency in every step to ensure quality, costs and schedules. We solve most
         things in-house, but sometimes take help from our network of industry-leading creators.</div>
             </div>
    </div>
</section>

<section >
    <div className="about2flex">
        <div className="about2con">
        <div className='about0header'>04. FOLLOW-UP</div>
        <div className="about0text">For us, it is important to take responsibility for a project from start to finish. Then it 
        is not enough to just create a digital solution, we also have to measure how the users behave and act to ensure that we 
        really achieve the goals we set. After that, we can support with
         operating, managing and further developing for the best possible experience and outcome. 
         </div>
             </div>
    </div>
</section>


</>
    )
    
}
export default About;