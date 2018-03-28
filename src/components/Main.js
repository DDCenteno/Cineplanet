import React from 'react';
import SimpleSlider from './SimpleSlider';
import Header from './Header'

const Main = ({ navigateTo }) => (
    <div>
      <Header navigateTo={navigateTo}/>
      <SimpleSlider />
    </div>
);

export default Main;