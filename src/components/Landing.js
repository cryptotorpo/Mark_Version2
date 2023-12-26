import * as React from 'react'
import '../css/xmark.css'
import '../css/animations.css';

import Navbar from './Navbar';
import Intro from './Intro';

function Landing () {
    return (
      <div className="App bg-gradient-to-b from-[#03081E] to-[#0D5085]">
        <Navbar />
        <Intro />
      </div>
    );
}

export default Landing;
