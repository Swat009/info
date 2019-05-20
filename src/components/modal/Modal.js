import React from 'react';
import './Modal.css';



const modal = (props) =>{

    return (

        <div style={props.style} className={"modal"+(props.show ? " show" : "")}>

            <button  type="button" onClick={()=>props.close} className="close modal-close" aria-label="Close">
                <span   onClick={props.close}  aria-hidden="true" >&#10005;</span>
            </button>
            {props.children}
        </div>
    )

}

export default modal;