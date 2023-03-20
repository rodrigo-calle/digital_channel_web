import * as React from 'react';
// import {CloudinaryImage, CloudConfig, URLConfig} from "@cloudinary/url-gen";
// import {AdvancedImage} from '@cloudinary/react';

// import logo from './logo.svg';
import './App.scss';
import Banner from './components/navbar/banner/Banner';
import Navbar from './components/navbar/Navbar';
// import { getCloudinaryImage } from './assets/media/images/cloudinaryConfig';
function App() {

  // const configCloudinary = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dvwigktot'
  //   },
  //   url: {
  //     secureDistribution: 'https://res.cloudinary.com/', 
  //     secure: true 
  //   }
  // });
  // const cloudConfig = new CloudConfig({cloudName: 'dvwigktot'});
  // const urlConfig = new URLConfig({secureDistribution:'https://res.cloudinary.com' , secure: true});
  // const cloudImage = new CloudinaryImage('canal_digital/LOGO-BIOLAB-INMUNOMED_ucsly1', cloudConfig, urlConfig);
  // const slideOne = getCloudinaryImage('v1678416045', '7907025850e589cfc2714df204e33edf');
  // console.log("🚀 ~ file: App.tsx:22 ~ App ~ slideOne:", slideOne);
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      </div> */}
    </React.Fragment>
  
  );
}

export default App;
