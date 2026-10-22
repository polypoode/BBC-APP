import React from 'react'
import { useState, useEffect } from 'react'
import "./SectionOne.css"
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import image4 from "../../assets/image4.jpg"
import image5 from "../../assets/image5.png"

function SectionOne() {
    const [color, setColor] = useState("transparent")
    const [color1, setColor1] = useState("transparent")
    const [color2, setColor2] = useState("transparent")
    const [color3, setColor3] = useState("transparent")
    const [color4, setColor4] = useState("transparent")

    {/* Example useEffect */}
    const [loader1, setLoader1] = useState("Not Loading")

    useEffect(() => {

        if (color !== "transparent") {
            setLoader1("Loading")
        }

        setTimeout(() => {
            setLoader1("Loaded text 1")
        }, 3000);


    }, [color])
    
    {/* Example useEffect */}  




    function changeColor (oui) {
        if (oui === "enter") {
            setColor("white")
        } else if (oui === "leave") {
            setColor ("transparent")

        } else if (oui === "enter1") {
            setColor1("white")
        } else if (oui === "leave1") {
            setColor1 ("transparent")

        } else if (oui === "enter2") {
            setColor2("white")
        } else if (oui === "leave2") {
            setColor2 ("transparent") 
            
        }else if (oui === "enter3") {
            setColor3("white")
        } else if (oui === "leave3") {
            setColor3 ("transparent") 
            
        } else if (oui === "enter4") {
            setColor4 ("white")
        } else if (oui === "leave4") {
            setColor4 ("transparent") 
            
        }
        
        
        
    }




  return (
     <div className='SectionOne'>
        <div className='text'>
            <h1>Welcome to BBC.com</h1>
            <h1>Saturday 30 decembre</h1>
        </div>

        {/* <div className='bubble'>

            <div id='bubble1'></div>
            <div id='bubble2'></div>
            <div id='bubble3'></div>
            <div id='bubble4'></div>
            <div id='bubble5'></div>
            <div id='bubble6'></div>
            <div id='bubble7'></div>
            <div id='bubble8'></div>

        </div> */}

        <div className='newImage'>
            <div className='imageLeft'>
                <img 
                className='imageLeft1' 
                src={image4}
                onMouseEnter={() => changeColor ("enter")}
                onMouseLeave={() => changeColor ("leave")}
                ></img>
                <p className='textLeft' style={{color: color, transition: "all 0.5s ease"}} >New Book</p> 
                <p className='sousTitreLeft' style={{color: color, transition: "all 0.5s ease"}}>New book, coming out the 30 of febuary 2024. The frensh writer is the new nugget of the writer land, soon queen of the realm. </p>
            </div>

            <div className='fourImg'>
                    


                <div className='imageRight'>
                    <img className='img1' src={image3}  
                    onMouseEnter={() => changeColor ("enter3")}
                    onMouseLeave={() => changeColor ("leave3")}
                    img/>
                    <p className='text1' style={{color: color3, transition: "all 0.5 ease"}}>New York</p>
                    <p className='text2' style={{color: color3, transition: "all 0.5 ease"}}>The storm Angela is hitting the landscae of New York</p>
                </div>
                <div className='imageRight'>
                    <img className='img1' src={image5}  
                    onMouseEnter={() => changeColor ("enter4")}
                    onMouseLeave={() => changeColor ("leave4")}
                    img/>
                    <p className='text1' style={{color: color4, transition: "all 0.5 ease"}}>Lego skill</p>
                    <p className='text2' style={{color: color4, transition: "all 0.5 ease"}}>The lego entreprise made another amazing sculptute bigger than the effel tower.</p>

                </div>

                <div className='imageRight'>
                    <img className='img1' src={image1}
                    onMouseEnter={() => changeColor ("enter1")} 
                    onMouseLeave={() => changeColor ("leave1")}
                    img/>
                    <p className='text1' style ={{color: color1, transition: "all 0.5s ease"}}>The artiste</p>
                    <p className='text2' style ={{color: color1, transition: "all 0.5s ease" }} >Charlie Trestini, the new Ed Sheeran of 2024. Song on spotify and all the streaming platform</p>

                </div>


                <div className='imageRight'>
                    <img className='img1' src={image2} 
                    onMouseEnter={() => changeColor ("enter2")}
                    onMouseLeave={() => changeColor ("leave2")}
                    img/>
                    <p className='text1' style={{color: color2, transition: "all 0.5 ease"}}>Honey</p>
                    <p className='text2'style ={{color: color2, transition: "all 0.5 ease"}}>The album of the 2023 summer. The melody will make you smill</p>

                </div>
            </div>



        </div>

    
    </div>
  )
}

export default SectionOne