import React from "react";
import './Header.css';
import Particles from 'react-particles-js';


const header = (prop) =>{

    return (
        <div className="particle-style">
            <Particles
            
                height={800}
                className='particles'
                params={{
                    particles: {
                        
                        number:{

                            value:200,
                            density:{
                                enable:true,
                                value_area: 1000
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
                <div style={{margin:'auto'}}>
                    <a className="knowmore" href="#about">Know More</a>
                    <a className="knowmore" href="#connect">Connect</a>
                </div> 
                
            </div>
        </div>
    );

}

export default header;