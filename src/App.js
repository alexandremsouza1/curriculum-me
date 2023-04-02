import { Font, PDFViewer } from '@react-pdf/renderer';
import React, { Component } from 'react';

import { MyDocument } from './elements/Document';

// Register Fonts

import Lato from '../public/assets/Lato-Regular.ttf'
import RobotoRegular from '../public/assets/Roboto-Regular.ttf'
import RobotoBold from '../public/assets/Roboto-Bold.ttf'


Font.register('https://fonts.googleapis.com/css?family=Roboto', { family: 'Roboto' });
Font.register({ family: 'Inter UI', src: Lato })
Font.register({ family: 'Roboto', src: RobotoRegular })
Font.register({ family: 'Roboto', src: RobotoBold })


class App extends Component {
  render() {
    return (
      <PDFViewer style={{ width: '100vw', height: '100vh' }}>
        <MyDocument />
      </PDFViewer>
    );
  }
}

export default App;
