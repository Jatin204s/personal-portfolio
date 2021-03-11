import React from 'react';
import image from "../images/hero.png";

function About(){
    return(
        <div className='about'>
            <div class= "about.model">
                <img src= {image} alt="model"/>
            </div>
            <div class="about-text">
                <h2>About me</h2>
                <h3>I am a Passionate web designer</h3>
                <h3>
                    <p>
                    I am Jatin Singh, a web designer/developer focused on crafting great web experiences. 
                    Designing and Coding have been my passion since the days I started working with computers, 
                    I enjoy creating beautifully designed, intuitive and functional websites.
                    </p>
                    <button>View more details</button>
                </h3>
            </div>


        </div>
    )
}

export default About