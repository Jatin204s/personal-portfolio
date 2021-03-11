import React from 'react';
import Navbar from './Navbar/Navbar'

function Header(){
    return(
        <div className = "main">
            <Navbar/>
        <div className= 'name'>
            <p className='heading'>Looking for a UI designer??</p>
            <h1>I'm  Jatin </h1>

            <p className="details">Hello there! I am a front end Developer with a decent knowledge of React js.</p>
         <div className="header-btns">
             <a href="#" className= "btn-1">Hire me     </a>
             <a href="#" className= "btn-2"> Download CV</a>
         </div>
        </div>
        <div class= 'arrow'></div>
        </div>    

    )
}

export default Header