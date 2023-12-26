import * as React from 'react'
import '../css/xmark.css'
import '../css/animations.css';

import Navbar from './Navbar';
import Intro from './Intro';
import Network from './Network';
import Advantages from './Advantages';
import Functions from './Functions';
import Footer from './Footer';

function Landing () {
    return (
      <div className="App bg-gradient-to-b from-[#03081E] to-[#0D5085]">
        <div className='relaitve'>
          <img src="./img/intro_back.png" className="absolute top-0 left-0"></img>
          <img src="./img/intro_ecllipse.png" className='absolute top-0 right-0'></img>
          <Navbar />
          <Intro />        
        </div>
        <Network />
        <Advantages />
        <Functions />
        <Footer />
      </div>
    );
}

export default Landing;
