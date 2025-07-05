import { Alert } from 'react-bootstrap';
import { ErrorBannerProps } from './errorBanner.types';

export const ErrorBanner = ({ message }: ErrorBannerProps) => {
  return (
    <Alert
      variant="danger"
      dismissible
      className="position-absolute"
      style={{
        width: 350,
        bottom: 20,
        left: '100%',
        transform: 'translateX(-100%)',
        zIndex: 10000,
      }}
    >
      <Alert.Heading>Error!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};
