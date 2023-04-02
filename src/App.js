import { Font, PDFViewer } from '@react-pdf/renderer';
import React, { Component } from 'react';

import { MyDocument } from './elements/Document';

// Register Fonts

// Font.register('https://fonts.googleapis.com/css?family=Roboto', { family: 'Roboto' });
// eslint-disable-next-line no-restricted-globals
Font.register(`${window.location.href}/assets/Lato-Regular.ttf`, { family: 'Lato' });
Font.register(`${window.location.href}/assets/Roboto-Regular.ttf`, { family: 'Roboto' });
Font.register(`${window.location.href}/assets/Roboto-Bold.ttf`, { family: 'Roboto-Bold' });

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
