import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'react-bootstrap';

import VulnerabilitiesList from './components/vulnerabilities-list/vulnerabilitiesList';
import { Vulnerability } from '../../types/models/vulnerability';
import { fetchVulnerabilities } from '../../services/vulnerabilitiesService';

const VulnerabilitiesPage = (): React.JSX.Element => {
  const { data, isLoading, isError, error, isFetching } = useQuery<
    Vulnerability[],
    Error
  >({
    queryKey: ['vulnerabilities'],
    queryFn: fetchVulnerabilities,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="container py-4">
      <h1 className="mb-4">Vulnerabilities</h1>

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
        <VulnerabilitiesList data={data!} />
      )}
    </div>
  );
};

export default VulnerabilitiesPage;
