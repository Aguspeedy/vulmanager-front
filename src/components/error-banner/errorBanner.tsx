import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

import './errorBanner.css';
import { ErrorBannerProps } from './errorBanner.types';

export const ErrorBanner = ({ message }: ErrorBannerProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <Alert
      variant="danger"
      dismissible
      className="position-absolute pb-2 error-banner"
      onClose={() => setShow(false)}
    >
      <p>{message}</p>
    </Alert>
  );
};
