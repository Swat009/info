import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import './Footer.css';

const footer = ()=>{


    return (
        <ScrollableAnchor id={'connect'}>
        <div className="footer">
             <h1>CONNECT</h1>
            <div className="social">
            <a href="https://www.facebook.com/swatantra.kumar.5243"   target="_blank"   class="fa fa-facebook"></a>
            <a href="https://www.linkedin.com/in/swat/"  target="_blank"  class="fa fa-linkedin"></a>
            <a href="mailto:swatantra.kumar8@gmail.com" target="_blank"  class="fa fa-google"></a>
            </div>
           
            <p>
                 <br/><br/>
                SWATANTRA KUMAR ©2018
            </p>
        </div>
        </ScrollableAnchor>


    )

  

}

export default footer;