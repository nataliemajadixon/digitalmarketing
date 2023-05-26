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


<div className>
<div>
<div className="aboutfdpundertext">What we create must be stylish, user-friendly and strengthen the brand, but it must also drive the business. 
    That's why we always look at the big picture and question traditional business models,
     revenue streams, processes, organizations and ways of working. 
     {'\n'} 
The main question is always: How can we create greater benefit? </div>
</div>
</div>






</>
    )
    
}
export default About;