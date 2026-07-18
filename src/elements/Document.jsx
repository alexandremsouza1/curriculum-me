import React from 'react';
import { Document } from '@react-pdf/renderer';

import ResumePage from '../pages/NewResume';

// IMPORTANTE:
// - <Document> é obrigatório como elemento raiz do react-pdf, e deve existir
//   UMA ÚNICA VEZ na árvore (não envolva <MyDocument /> com outro <Document>
//   por fora, senão fica aninhado e o react-pdf quebra).
// - Este componente roda no reconciliador próprio do react-pdf, então NÃO
//   pode usar hooks como useTranslation aqui dentro. O `content` já deve
//   chegar traduzido, resolvido lá em cima (no App.js, fora da árvore do PDF).
export const MyDocument = ({ content, onRender }) => (
  <Document onRender={onRender}>
    <ResumePage content={content} />
  </Document>
);