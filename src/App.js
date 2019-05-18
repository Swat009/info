import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <About/>
       <Contact />
       <Footer />
      </div>
    );
  }
}

export default App;
