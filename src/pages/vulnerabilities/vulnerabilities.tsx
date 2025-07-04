import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, Spinner } from 'react-bootstrap';

import VulnerabilitiesList from './components/vulnerabilities-list/vulnerabilitiesList';
import { ResponseType } from '../../types/response.types';
import { fetchVulnerabilities } from '../../services/vulnerabilitiesService';
import VulnerabilityModal from './components/vulnerability-modal/vulnerabilityModal';

const VulnerabilitiesPage = (): React.JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, isLoading, isError, error, isFetching } = useQuery<ResponseType, Error>({
    queryKey: ['vulnerabilities'],
    queryFn: fetchVulnerabilities,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="container py-4">
        <h1 className="mb-4">Vulnerabilities</h1>
        <div>
          <Button onClick={handleShow}>+</Button>
        </div>

        {isLoading || isFetching ? (
          <div className="text-center py-5">
            <Spinner animation="grow">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : isError ? (
          <div className="alert alert-danger" role="alert">
            {error.message}
          </div>
        ) : (
          !!data?.data && <VulnerabilitiesList data={data.data!} />
        )}
      </div>
      <VulnerabilityModal show={show} handleClose={handleClose} />
    </>
  );
};

export default VulnerabilitiesPage;
