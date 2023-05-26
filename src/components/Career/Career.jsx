import React from "react";
import './Career.css'


const Career = () => {
    return(
        <>
        <div className="careerflex">
        <div className="careercon">
        <img src={require('../../assets/careertop.jpg')} alt='vrheadset' style={{ filter: 'brightness(50%)', width: '100vw', height: '88vh', objectFit: 'cover' }}/>
        <div className="careerheader">Work at Nats</div>

        <div className="careertext">Do you want to be involved in building the experiences of the future on the
             internet? 
            Do you want to tell stories and evoke emotions with design, film and games? 
            Do you want to use new technology to help companies and organizations show 
            who they are and what they do? 
            Do you want to work with us?</div>
            </div>
            </div>


        {/* <h1>have a pop up alert of snackmenu that says no jobs currently need hiring</h1>
        <div>Image background with text on top, Career, PRACTICE AT NATS, more about practice</div> */}
        
   

            <div className="careerentireflex">
            <div className="careerentirecon">
            <div className="careerentireheader"> Nats in its entirety</div>
            <p className='careerentiretext'>We who work at Nats have a range of different experiences and knowledge.
                 We specialize inweb development,app development, digital marketing, 
                project management, and digital strategies.</p>
                </div>
                </div>


            <div className="careerworkflex">
            <div className="careerworkcon">
           <div className="careerworkheader">A workplace</div>
           <p className="careerworktext">Having Nats as a workplace means a workplace in constant development and 
            movement, there is always a new project underway at the same time as 
            other projects are being completed. New techniques, tools and strategies 
            are continuously
             tested in order to create the absolute best for our customers.</p>
             </div>
             </div>

<div><img src={require('../../assets/careerbubbles.jpg')} alt='vrheadset' style={{ filter: 'brightness(70%)', width: '100vw', height: '40vh', objectFit: 'cover' }}/>  
</div>


<div className="careerworkflex">
<div className="careerworkcon">

    <div className="careerworkheader"> Our approach</div>
     <p className="careerworktext">Heart, brain and edge are three watchwords we have at Nats,
                 it's something we work towards and carry with us throughout the work process.
                  When the end result is ready, we always want a project to match, 
                if not exceed, our customers' expectations.</p>
     </div>
     </div>


<div className="careerusflex">
<div className="careeruscon">
 <div className="careerusheader">BECOME ONE OF US</div>
 <div className="careerustext">Does this feel like a workplace where you would contribute something new, thrive and develop? If so, apply to one of our vacant positions!
<div className="careerapp">Send your application towork@nats.se </div>
</div>
</div>
</div>
    
       
        </>
    )
}
export default Career;