import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import VulnerabilitiesList from './components/vulnerabilities-list/vulnerabilitiesList';
import { Vulnerability } from '../../types/models/vulnerability';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
});

async function fetchVulnerabilities(): Promise<Vulnerability[]> {
  const res = await api.get<Vulnerability[]>('/vulnerabilities');
  return res.data;
}

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
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
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
