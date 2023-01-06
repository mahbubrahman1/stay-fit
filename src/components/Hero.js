import React from 'react'
import HeroImage from '../assets/images/hero.jpg';
import '../App.css';

const Hero = () => {
    return (
        <div className='hero-section'>
            <img className='hero' src={HeroImage} alt="" />
            <div className='heading'>
                <h1>Get Fit With Us</h1>
                <p>Empower yourself to make the changes you need to make</p>
                <button className='btn btn-primary'>SignUp Today</button>
            </div>
        </div>
    )
}

export default Hero