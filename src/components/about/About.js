import React, {Component} from "react";
import './About.css';
import './direction-reveal.css';
import DirectionReveal from 'direction-reveal';
import yatra from '../../assets/companies/yatra.png';
import itilite from '../../assets/companies/itilite.png';




class About extends Component {


    componentDidMount(){

        const directionRevealSwing = DirectionReveal({
            selector: '.direction-reveal',              // Container element selector.
            itemSelector: '.direction-reveal__card',    // Item element selector.
            animationName: 'swing',                     // Animation CSS class.
            enableTouch: true,                          // Adds touch event to show content on first click then follow link on the second click.
            touchThreshold: 250                         // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
          });
        

    }


    render(){
    return (

    <div className="about">
    


        <h1 className="revealOnScroll" >About</h1>


        <div className="direction-reveal container">
            
            <a href="#" className="direction-reveal__card col">
                <img src={yatra} alt="Image" className="img-fluid" />

                <div className="direction-reveal__overlay direction-reveal__anim--in">
                <h3 className="direction-reveal__title">Title</h3>
                <p className="direction-reveal__text">Description text.</p>
                </div>
            </a>

            <a href="#" className="direction-reveal__card col">
                <img src={itilite} alt="Image" className="img-fluid" />

                <div className="direction-reveal__overlay direction-reveal__anim--in">
                <h3 className="direction-reveal__title">Title</h3>
                <p className="direction-reveal__text">Description text.</p>
                </div>
            </a>

       
        </div>
    </div>


)
}

  

}

export default About;