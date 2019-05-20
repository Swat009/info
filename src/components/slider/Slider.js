import React, {Component} from 'react';


const arrowRight = {
  width: '0',
  height: '0', 
  borderTop: '60px solid transparent',
  borderBottom: '60px solid transparent',
  borderLeft: '60px solid green'
}



const RightArrow = (props) => {
  return (
    <div style={{zIndex: '100', background: 'transparent',position:'fixed', top: '330px', right: '0' }} className="nextArrow" onClick={props.goToNextSlide}>
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  );
}


const LeftArrow = (props) => {
    return (
      <div style={{zIndex: '100', position:'fixed', top: '330px',left: '0' }} className="backArrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
    );
}

const Slide = ({ image }) => {
    const styles = {
        width: '100%',
        height: '400px',
        display: 'block',
        
      }
    return <img className="slide" style={styles} src={image} />
}

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
class Slideshow extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          currentIndex: 0,
        }
      
    }


    

    goToPrevSlide = () => {
        if(this.state.currentIndex>=this.props.slideImages.length || this.state.currentIndex<0){
            return this.setState({
              currentIndex: 0
             
            })
        }
        if(this.state.currentIndex === 0) {
            return this.setState({
              currentIndex: this.props.slideImages.length - 1,
             
            })
          }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
        }));
    }
    

    goToNextSlide = () => {

        if(this.state.currentIndex>=this.props.slideImages.length || this.state.currentIndex<0){
            return this.setState({
              currentIndex: 0
             
            })
        }
        if(this.state.currentIndex === this.props.slideImages.length - 1) {
          return this.setState({
            currentIndex: 0,
            
          })
        }
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
        }));
    }
    
    slideWidth = () => {
         return document.querySelector('.slide').clientWidth
    }
    

    render(){
        if(this.state.currentIndex>=this.props.slideImages.length || this.state.currentIndex<0){
            this.setState({
                currentIndex: 0
        
            })
        }
        return (
            <div className="slider">
              <div className="slider-wrapper" > 
          
            
                    
                     <Slide key={this.state.currentIndex} image={this.props.slideImages[this.state.currentIndex]} /> 
              </div>
              <LeftArrow goToPrevSlide={this.goToPrevSlide} />
              <RightArrow goToNextSlide={this.goToNextSlide}  />
            </div>
          )
    }
    
}

export default Slideshow;