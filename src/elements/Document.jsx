import { Document } from '@react-pdf/renderer';
import React from 'react';

import KnoweldgeMatrix from '../pages/KnoweldgeMatrix';
import ResumePage from '../pages/Resume';

// Create Document Component
export const MyDocument = () => (
  <Document>
    <ResumePage />
    <KnoweldgeMatrix />
  </Document>
);
