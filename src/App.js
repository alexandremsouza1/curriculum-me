import { Font, PDFViewer, Document, PDFDownloadLink  } from '@react-pdf/renderer';
import React, { Component  } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import { MyDocument } from './elements/Document';
import {isMobile, isBrowser} from 'react-device-detect';
import './App.css'

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
    const MyDocMobile = () => (
      <Document>
          <MyDocument />
      </Document>
    );
    return (
        <>
          { isBrowser && (
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
          )}
          {isMobile && (
            <div class="center">
              <PDFDownloadLink document={<MyDocMobile />} fileName="curriculo_alexandre.pdf">
                  {({ blob, url, loading, error }) =>
                    loading ? <LoadingSpinner /> : 'Download now!'
                  }
              </PDFDownloadLink>
            </div>
          )}
        </>   
    );
  }
}

export default App;
