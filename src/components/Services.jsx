import React from 'react';
import Cards from './card/Cards';
import Data from './card/Data';
import image1 from './card/s1.png';
import image2 from './card/s2.png';
import image3 from './card/s3.png';
function Services(){
    return(
        <div className='service'>
            <div className='service-heading'>
                <h1>Services</h1>
                <p>These are the services I will provide you.</p>
            </div>
            <div className= 'b-container'>
                <Cards
                stype= {Data[0].stype}
                simage={image1}
                sdescription={Data[0].sdescription}
                />
                 <Cards
                stype= {Data[1].stype}
                simage={image2}
                sdescription={Data[1].sdescription}
                />
                 <Cards
                stype= {Data[2].stype}
                simage={image3}
                sdescription={Data[2].sdescription}
                />
            </div>

        </div>
    )
}

export default Services