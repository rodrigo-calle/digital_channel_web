import * as React from 'react';

import './App.scss';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Banner />
    </React.Fragment>
  
  );
}

export default App;
