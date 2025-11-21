import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/east_FILL0_wght400_GRAD0_opsz24.png'
import hero_image from '../Assets/img-WF4KSSGBSvSN6F6rW773m.png'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>FRESH ARRIVALS!</h2>
            <div>
                <p>unlock</p>
                <p>higher yields </p>
                <p>this season!</p>               
            </div>
            <div className="hero-latest-btn">
                <div>new seed varieties</div>
                <img src={arrow_icon} alt="" />
            </div>

        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
            
        </div>
        
    </div>
  )
}
