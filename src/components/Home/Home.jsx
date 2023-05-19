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
    </>
    )
}
export default Home