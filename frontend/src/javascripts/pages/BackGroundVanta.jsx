import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
// import vanta from './vanta.net.min.js';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

import FOG from '../../vanta.fog.min.js';

class BackGroundVanta extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      THREE: THREE,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div className="vanta_app">
        <header className="App-header relative" ref={this.vantaRef}>
          <div className="App relative">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </header>
      </div>
    );
  }
}

export default BackGroundVanta;
