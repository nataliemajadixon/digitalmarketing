import React from "react";

import './Home.css'

const Home = () => {
    return (

    <>
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
    <section>
        <div className="servicecon">
<div className='scontainers'>
    <div className='scontainershead'>UX design</div>
    <div className='scontainersmain'>
UX design is about creating good user experiences. The goal is to develop products and services that simplify and improve the experience for people.
</div>

</div>
<div className='scontainers'>
    <div className='scontainershead'>App development</div>
    <div className='scontainersmain'>Modern smartphones possess enormous power. With an app, we can make full use of this.</div>

</div>
<div className='scontainers'>
    <div className='scontainershead'> Augmented Reality</div>
    <div className='scontainersmain'>Using the latest AR application development frameworks, we can help you and your users take the 
leap into the future of computing, today.</div>
</div>
<div className='scontainers'>
<div className='scontainershead'>Animated movies</div>
<div className='scontainersmain'>
When you need to explain a product, service or complex flows in moving form.
</div>
</div>
        </div>
    </section>
    </>
    )
}
export default Home