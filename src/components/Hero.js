import React from 'react'
import HeroImage from '../assets/images/hero.jpg';
import '../App.css';

const Hero = () => {
    return (
        <div>
            <img className='hero' src={HeroImage} alt="" />
            <div className='heading'>
                <h1>GET FIT WITH US</h1>
            </div>
        </div>
    )
}

export default Hero