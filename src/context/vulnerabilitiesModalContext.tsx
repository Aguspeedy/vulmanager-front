// VulnerabilityModalContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Vulnerability } from '../types/models/vulnerability';
import VulnerabilityModal from '../components/vulnerability-modal/vulnerabilityModal';

interface ModalContextValue {
  openEditor: (vuln: Vulnerability | null) => void;
  closeEditor: () => void;
}

const VulnerabilityModalContext = createContext<ModalContextValue | undefined>(undefined);

export function VulnerabilityModalContextProvider({ children }: { children: ReactNode }) {
  const [currentVuln, setCurrentVuln] = useState<Vulnerability | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openEditor = (vuln: Vulnerability | null) => {
    setCurrentVuln(vuln);
    setShowModal(true);
  };

  const closeEditor = () => {
    setCurrentVuln(null);
    setShowModal(false);
  };

  return (
    <VulnerabilityModalContext.Provider value={{ openEditor, closeEditor }}>
      {children}
      <VulnerabilityModal show={showModal} data={currentVuln} handleClose={closeEditor} />
    </VulnerabilityModalContext.Provider>
  );
}

export function useVulnerabilityModal() {
  const context = useContext(VulnerabilityModalContext);
  if (!context) {
    throw new Error('useVulnerabilityModal must be used within VulnerabilityModalContextProvider');
  }
  return context;
}
