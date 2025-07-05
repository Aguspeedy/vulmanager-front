import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { AppPaginationProps } from './appPagination.types';

export function AppPagination({ currentPage, totalPages, onPageChange }: AppPaginationProps) {
  const pages: React.ReactNode[] = [];

  const start = Math.max(1, currentPage);
  const end = Math.min(totalPages, currentPage);

  if (start > 1) {
    pages.push(
      <Pagination.Item key={1} onClick={() => onPageChange(1)}>
        1
      </Pagination.Item>
    );
    if (start > 2) pages.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
  }

  for (let number = start; number <= end; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  if (end < totalPages) {
    if (end < totalPages - 1) pages.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
    pages.push(
      <Pagination.Item key={totalPages} onClick={() => onPageChange(totalPages)}>
        {totalPages}
      </Pagination.Item>
    );
  }

  return (
    <Pagination size="sm" className="mx-auto">
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      />
      {pages}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      />
    </Pagination>
  );
}
