import React from 'react'
import { useState, useEffect } from 'react'
import "./footer.css"

import tiktok from "../../assets/tiktoklogo.png"
import twitter from "../../assets/twitterLogo1.png"
import instagram from "../../assets/instagramLogo1.png"


function footer() {

    
  return (
    <div className='footer'>
        
        <div className='textFooter'>
            <p className='textSocialMedia' >Social Media</p>
        </div>
        
        <div className='logo'>
        <img className='tiktokLogo' src= {tiktok} />
        <img className='instagramLogo' src= {instagram} />
        <img className='twitterLogo' src= {twitter} />
        </div>


    </div>
  )
}

export default footer