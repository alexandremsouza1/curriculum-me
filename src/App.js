import { Font, PDFViewer, Document, PDFDownloadLink } from '@react-pdf/renderer';
import React, { Component } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import { MyDocument } from './elements/Document';
import { isMobile, isBrowser } from 'react-device-detect';
import './App.css';

// Registra fontes no nível do módulo (síncrono) antes de qualquer render.
// Usa PUBLIC_URL para funcionar tanto em dev quanto em produção (gh-pages).
const baseUrl = process.env.PUBLIC_URL || '';
Font.register({
  family: 'Lato',
  fonts: [
    { src: `${baseUrl}/assets/Lato-Regular.ttf`, fontWeight: 'normal' }
  ]
});
Font.register({
  family: 'Roboto',
  fonts: [
    { src: `${baseUrl}/assets/Roboto-Regular.ttf`, fontWeight: 'normal' },
    { src: `${baseUrl}/assets/Roboto-Bold.ttf`, fontWeight: 'bold' }
  ]
});
Font.register({
  family: 'SourceSansPro',
  fonts: [
    { src: `${baseUrl}/assets/SourceSansPro-Regular.ttf`, fontWeight: 'normal' },
    { src: `${baseUrl}/assets/SourceSansPro-Bold.ttf`, fontWeight: 'bold' }
  ]
});
// Alias para SourceSansPro-Bold, usado diretamente como fontFamily em alguns estilos.
Font.register({
  family: 'SourceSansPro-Bold',
  fonts: [
    { src: `${baseUrl}/assets/SourceSansPro-Bold.ttf`, fontWeight: 'normal' }
  ]
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pdfLoaded: false };
    this.handleRender = this.handleRender.bind(this);
  }

  handleRender() {
    if (!this.state.pdfLoaded) {
      this.setState({ pdfLoaded: true });
    }
  }

  render() {
    const MyDocMobile = () => (
      <Document>
        <MyDocument />
      </Document>
    );
    return (
      <>
        {isBrowser && (
          <>
            {this.state.pdfLoaded ? null : <LoadingSpinner />}
            <PDFViewer style={{ width: '100vw', height: '100vh' }}>
              <Document onRender={this.handleRender}>
                <MyDocument />
              </Document>
            </PDFViewer>
          </>
        )}
        {isMobile && (
          <div className="center">
            <PDFDownloadLink
              document={<MyDocMobile />}
              fileName="curriculo_alexandre.pdf"
            >
              {({ loading }) =>
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
