import { Font, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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

function App() {
  // useTranslation SÓ pode ser chamado aqui (componente de função, renderizado
  // pelo react-dom normal) — nunca dentro de MyDocument/ResumePage, que rodam
  // no reconciliador próprio do react-pdf.
  const { t } = useTranslation();

  const [pdfLoaded, setPdfLoaded] = useState(false);

  const handleRender = () => {
    if (!pdfLoaded) {
      setPdfLoaded(true);
    }
  };

  const content = useMemo(() => {
    // "jobs" no JSON é um array (0..5) com company, period, role e description
    // juntos em cada item — pega o array inteiro já traduzido de uma vez.
    const jobs = t('jobs', { returnObjects: true });
    const skillsList = t('skills.list', { returnObjects: true });
 
    return {
      appTitle: t('app.title'),
      sections: {
        aboutMe: t('sections.aboutMe'),
        interests: t('sections.interests'),
        passion: t('sections.passion'),
        professionalSummary: t('sections.professionalSummary'),
        personalInformation: t('sections.personalInformation'),
        workExperience: t('sections.workExperience'),
        education: t('sections.education'),
        skills: t('sections.skills'),
      },
      aboutMe: { content: t('aboutMe.content') },
      interests: {
        frontend: t('interests.frontend'),
        backend: t('interests.backend'),
        devops: t('interests.devops'),
        qa: t('interests.qa'),
      },
      professionalSummary: { content: t('professionalSummary.content') },
      personalInformation: { content: t('personalInformation.content') },
      contact: {
        firstName: t('contact.firstName'),
        lastName: t('contact.lastName'),
        phone: t('contact.phone'),
        email: t('contact.email'),
        location: t('contact.location'),
      },
      header: { birthday: t('header.birthday') },
      jobs,
      education: {
        title: t('education.title'),
        content: t('education.content'),
      },
      skills: { list: skillsList },
      footer: { rights: t('footer.rights') },
    };
  }, [t]);


  return (
    <>
      {isBrowser && (
        <>
          {pdfLoaded ? null : <LoadingSpinner />}
          <PDFViewer style={{ width: '100vw', height: '100vh' }}>
            <MyDocument content={content} onRender={handleRender} />
          </PDFViewer>
        </>
      )}
      {isMobile && (
        <div className="center">
          <PDFDownloadLink
            document={<MyDocument content={content} />}
            fileName="curriculo_alexandre.pdf"
          >
            {({ loading }) => (loading ? <LoadingSpinner /> : 'Download now!')}
          </PDFDownloadLink>
        </div>
      )}
    </>
  );
}

export default App;