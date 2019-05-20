import React, {Component} from "react";
import './About.css';
import './direction-reveal.css';
import DirectionReveal from 'direction-reveal';
import ScrollableAnchor from 'react-scrollable-anchor';
import Modal from '../modal/Modal';
import yatra from '../../assets/companies/yatra.png';
import itilite from '../../assets/companies/itilite.png';
import studyfolks from '../../assets/companies/studyfolks.png';
import twowaits from '../../assets/companies/twowaits.jpg';
import jobbox from '../../assets/companies/jobbox.jpeg';
import Slideshow from '../slider/Slider';
import yatraslide from '../../assets/slides/yatra.png';
import studyfolksslide from '../../assets/slides/studyfolks.png';
import jobboxslide from '../../assets/slides/jobbox.png';
import twowaitsslide from '../../assets/slides/twowaits.png';
import itiliteslide from '../../assets/slides/itilite.png';




const slideImages = [

    [   
        yatraslide,
        
    ],

    [   
        itiliteslide
    ],
    [   
        jobboxslide
    ],
    [   
        studyfolksslide,
        
    ],
    [   
        twowaitsslide  
    ],


]

const slideText= [



    `
    <h2>Yatra Online Pvt Ltd</h2>
    <h3>Software Engineer (Spring 2018-Spring 2019)</h3>
    <hr/>
    <p> Technologies: Django, Celery, RabbitMQ, Supervisor, Nginx, Gunicorn, Monetdb,​ ​Elasticsearch, Redshift,​ S3, JQuery, Bootstrap</p><br/>
   
    - Build the Email Automation module acting as a pipeline between Yatra’s CMS and Chatbot (Yuva)
    enabling auto response to simple (10 percent) of Corporate client emails and improving the agents response
    time for other mails.<br/>
    - Full stack development of the Internal FAQ system to replace services provided by Nanorep. Currently used
    in all customer support centers of Yatra and Travel Guru in India and abroad.<br/>
    - Design and development of module to convert GPS coordinates to Navigation coordinates for Yatra’s
    Augmented Reality Project.
   
    `,

    `<h2>ITILITE PVT. LTD</h2>
    <h3> Remote Full Stack Developer (​Spring 2017) </h3> 
    <hr/>
    <p>Technologies: PHP MVC Design, JQuery, Laravel/Lumen Framework, Bootstrap, Bitbucket, HTML, CSS</p><br/>
    - Got selected from more than 70 applicants on Internshala.<br/>
    - Worked on the algorithm to filter best value bus and implemented API to automate bus-selection process.<br/>
    - Developed the Redemption Module used by client company's employees to redeem gift cards from their
    Itilite Points.<br/>
    `,
    `
        <h2>JOBBOX TECH. PVT. LTD</h2>
        <h3> Cofounder (Spring 2019-present) </h3> 
        <hr/>
        <br/>
       <p> Building a B2B Edtech platform to enable companies hire quality candidates for front facing roles like Content
        Managers, Business Development Executives etc.(More Details Soon)<br/>
       </p>

        <a   target="_blank"  href='https://getjobbox.com' >Visit Site</a>
            
    `,
    `
    <h2>STUDYFOLKS.com</h2>
    <h3> Founder (Spring 2016-Spring 2017) </h3> <br/>
    <hr/>
    <br/>
    <p>Developed the technology platform for notes sharing in campus. 
    Generated a traction of 1000+ users on the platform with 5K+ pageviews on blogs.
    </p>

    
    `,
    `<h2>Twowaits </h2>
    <h3> Co-Founder (Spring 2014-Spring 2016) </h3> <br/>
    <hr/>
    <br/>
    <p>Developed technology stack (Android & Web ) for the food ordering
     platform that served three cities with monthly 500+ orders.
    </p>
    `





]

class About extends Component {

    state = {
        showModal: false,
        company: '',
        position:0,
    }


    componentDidMount(){

        const directionRevealSwing = DirectionReveal({
            selector: '.direction-reveal',              // Container element selector.
            itemSelector: '.direction-reveal__card',    // Item element selector.
            animationName: 'swing',                     // Animation CSS class.
            enableTouch: true,                          // Adds touch event to show content on first click then follow link on the second click.
            touchThreshold: 250                         // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
          });
        

    }

    show = (position) =>{
        this.setState({ position: position, showModal:true});
    }

    close = () =>{
        this.setState({showModal:false});
    }


    render(){
    return (
    <ScrollableAnchor id={'about'}>
    <div  className="about">
    

        <br/><br/>
        <h1>ABOUT ME</h1>

        <Modal style={{height:'100%'}} show={this.state.showModal} close={this.close}>
                <Slideshow position={this.state.position}  slideImages={slideImages[this.state.position]}  />
                <br/>   
                <div className="slidetext" style={{padding:'10px'}} dangerouslySetInnerHTML={{ __html: slideText[this.state.position]}}></div>

        </Modal>

        
        <div className="direction-reveal container">

            <a  className="direction-reveal__card col" onClick={()=>this.show(2)} >
                <br/><br/><br/><br/>
                <img src={jobbox} alt="Image" className="img-fix" />

                <div className="direction-reveal__overlay direction-reveal__anim--in">
                    <h3 className="direction-reveal__title">
                        Co-Founder<br/>
                        (Spring 2019-present)
                    </h3>
                    <p className="direction-reveal__text">
                        Tap to know more.    
                    </p>
                </div>
            </a>

            <a  className="direction-reveal__card col" onClick={()=>this.show(0)}>
                <img src={yatra} alt="Image" className="img-fix" />

                <div className="direction-reveal__overlay direction-reveal__anim--in">
                    <h3 className="direction-reveal__title">
                        Software Engineer<br/>
                        (Spring 2018-Spring 2019)
                    </h3>
                    <p className="direction-reveal__text">
                    Tap to know more.
                    </p>
                </div>
            </a>

            <a  className="direction-reveal__card col"  onClick={()=>this.show(1)}  >
                <br/><br/>
                <img src={itilite} alt="Image" className="img-fix" />
               
                <div className="direction-reveal__overlay direction-reveal__anim--in">
                    <h3 className="direction-reveal__title">
                        Remote Full Stack Developer<br/>
                        (​Spring 2017)
                    </h3>
                    <p className="direction-reveal__text">
                        Tap to know more.    
                    </p>
                </div>
            </a>

        
        </div>




       
        <div className="direction-reveal container">            
            

          
            <a  className="direction-reveal__card col" onClick={()=>this.show(3)} >
                <br/><br/><br/><br/>
                <img src={studyfolks} alt="Image" className="img-fix" />

                <div className="direction-reveal__overlay direction-reveal__anim--in">
                    <h3 className="direction-reveal__title">
                        Founder<br/>
                        (Spring 2016-Spring 2017)
                    </h3>
                    <p className="direction-reveal__text">
                        Tap to know more.    
                    </p>
                </div>
            </a>

            <a  className="direction-reveal__card col" onClick={()=>this.show(4)} >
                <br/><br/><br/><br/>
                <img src={twowaits} alt="Image" className="img-fix" />

                <div className="direction-reveal__overlay direction-reveal__anim--in">
                    <h3 className="direction-reveal__title">
                        Co-Founder<br/>
                        (Spring 2014-Spring 2016)
                    </h3>
                    <p className="direction-reveal__text">
                        Tap to know more.    
                    </p>
                </div>
            </a>


           
       
        </div>

        
    </div>
    </ScrollableAnchor>


)
}

  

}

export default About;