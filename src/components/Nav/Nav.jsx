import React from 'react'
import { useState } from 'react'
import "./Nav.css"
import user from "../../assets/userLogo.png"
import menuLogo from "../../assets/menuImage.png"

function Nav() {
    const [open, setOpen] = useState(true)

    function clickReaction () {
        const navBar = document.querySelector(".navBar")
            console.log("ass")
        if (open) {

            navBar.style.right="-300px";
            setOpen(false);
        } else {
            navBar.style.right = "0px";
            setOpen(true);
        }

    }



  return (
    <>
     <img src={menuLogo}className='ass' onClick={clickReaction} ></img>
    <div className='navBar'>

        <h1 className='pussy' onClick={clickReaction}>x</h1>

        <div className='threeButton'>
            <button className='buttonNav'>B</button>
            <button className='buttonNav'>B</button>
            <button className='buttonNav'>C</button>
        </div>
        <div className='signInDiv'>
            <img id='userLogo' src= {user}/>
            <button className='buttonNav2'>Sign in</button>
        </div>
        <div className='ninetButton'>
            <button className='buttonNav2'>News</button>
            <button className='buttonNav2'>Sport</button>
            <button className='buttonNav2'>Weather</button>
            <button className='buttonNav2'>Shop</button>
            <button className='buttonNav2'>Earth</button>
            <button className='buttonNav2'>Travel</button>
            <button className='buttonNav2'>Capital</button>
            <button className='buttonNav2'>Culture</button>
           
            <div className='moreButton'>
                <button className='buttonNav2'>More</button>
                <img src="" alt="" />
            </div>

        </div>
        <div className='lastButton'>
            <input className='input' placeholder='Search'></input>
        </div>

        


    </div>
    </>
  )
}

export default Nav