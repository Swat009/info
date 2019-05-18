import React from "react";
import './Header.css';
import Particles from 'react-particles-js';


const header = (prop) =>{

    return (
        <div className="particle-style">
            <Particles
            
                className='particles'
                params={{
                    particles: {
                        
                        number:{

                            value:200,
                            density:{
                                enable:true,
                                value_area: 800
                            }
                        },
                        
                    },
                    interactivity:{

                        events: {
                            onhover: {
                            enable: true,
                            mode: "repulse"
                            },
                            onclick: {
                            enable: true,
                            mode: "push"
                            }
                        }
                    }

                    
                }}
            />
        
            <div className="text">
                <h3>Hello, I'm <span>Swatantra Kumar</span></h3>
                <h4>I'm a full-stack web developer</h4>
                <div className="knowmore">
                    <span className="no_hover"> <a className="knowmore" href="#feature">Know More</a> <i class="arrow right"></i></span>
                    <span className="hover"> <a className="knowmore" href="#feature">Know More <i class="arrow down"></i> </a></span>
                </div>
            </div>
        </div>
    );

}

export default header;