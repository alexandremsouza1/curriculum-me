import { Font, PDFViewer, Document } from '@react-pdf/renderer';
import React, { Component  } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import { MyDocument } from './elements/Document';

// Register Fonts

// Font.register('https://fonts.googleapis.com/css?family=Roboto', { family: 'Roboto' });
// eslint-disable-next-line no-restricted-globals
Font.register(`${window.location.href}assets/Lato-Regular.ttf`, { family: 'Lato' });
Font.register(`${window.location.href}assets/Roboto-Regular.ttf`, { family: 'Roboto' });
Font.register(`${window.location.href}assets/Roboto-Bold.ttf`, { family: 'Roboto-Bold' });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pdfLoaded: false };
  }
  render() {
    return (
        <>
          {this.state.pdfLoaded ? null : (
              <LoadingSpinner />
          )}
          <PDFViewer style={{ width: '100vw', height: '100vh' }}>
            <Document onRender={() =>  this.setState({ pdfLoaded: true })}>
              <MyDocument />
            </Document>
          </PDFViewer>
        </>   
    );
  }
}

export default App;
