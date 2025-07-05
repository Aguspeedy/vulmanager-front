import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, Spinner } from 'react-bootstrap';

import VulnerabilitiesList from './components/vulnerabilities-list/vulnerabilitiesList';
import { ResponseType } from '../../types/response.types';
import { fetchVulnerabilities } from '../../services/vulnerabilitiesService';
import {
  VulnerabilityModalContextProvider,
  useVulnerabilityModal,
} from '../../context/vulnerabilitiesModalContext';
import { AppPagination } from '../../components/app-pagination/appPagination';
import { useDebounce } from '../../hooks/useDebounce';
import { Filters } from '../../types/filters.types';
import { VulnerabilitiesToolbar } from './components/vulnerabilities-toolbar/vulnerabilitiesToolbar';
import { PageSizeSelector } from '../../components/page-size-selector/pageSizeSelector';

const VulnerabilitiesPage = (): React.JSX.Element => {
  const { openEditor } = useVulnerabilityModal();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState<string | undefined>('created_at');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | undefined>('desc');
  const [filters, setFilters] = useState<Filters>({});
  const debouncedFilters = useDebounce(filters, 500);

  const { data, isLoading, isError, error, isFetching } = useQuery<ResponseType, Error>({
    queryKey: ['vulnerabilities', page, pageSize, sortBy, sortOrder, debouncedFilters],
    queryFn: () => fetchVulnerabilities(page, pageSize, sortBy, sortOrder, debouncedFilters),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="px-5 py-4 w-100">
        <h1 className="mb-2">Vulnerabilities</h1>
        <hr className="mt-0 mb-4" />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <VulnerabilitiesToolbar
            sortBy={sortBy}
            sortOrder={sortOrder}
            filters={filters}
            onSortByChange={setSortBy}
            onSortOrderToggle={() => setSortOrder(o => (o === 'asc' ? 'desc' : 'asc'))}
            onFiltersChange={setFilters}
          />
          <Button
            onClick={() => openEditor(null)}
            size="sm"
            className="primary-color"
            style={{ minWidth: 130 }}
          >
            Add Vulnerability
          </Button>
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
          !!data?.data && (
            <>
              <VulnerabilitiesList data={data.data!} />
              <div className="d-flex justify-content-end position-relative my-2">
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                  <AppPagination
                    currentPage={page}
                    totalPages={data.totalPages}
                    onPageChange={setPage}
                  />
                </div>
                <PageSizeSelector pageSize={pageSize} onChange={setPageSize} />
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};

export default function VulnerabilitiesPageContext(props: any) {
  return (
    <VulnerabilityModalContextProvider>
      <VulnerabilitiesPage {...props} />
    </VulnerabilityModalContextProvider>
  );
}
