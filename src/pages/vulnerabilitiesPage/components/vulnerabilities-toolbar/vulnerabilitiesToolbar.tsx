import { JSX } from 'react';
import { Form, Button } from 'react-bootstrap';

import * as Enums from '../../../../types/enums.types';
import { VulnerabilitiesToolbarProps } from './vulnerabilitiesToolbar.types';

export const VulnerabilitiesToolbar = ({
  sortBy,
  sortOrder,
  filters,
  onSortByChange,
  onSortOrderToggle,
  onFiltersChange,
}: VulnerabilitiesToolbarProps): JSX.Element => {
  return (
    <Form className="d-flex align-items-center gap-2 flex-wrap">
      <Form.Control
        type="text"
        placeholder="Search by title..."
        value={filters?.searchFilter}
        className="sm-height"
        style={{ maxWidth: 200 }}
        onChange={e => onFiltersChange({ ...filters, searchFilter: e.target.value })}
      />
      <Form.Group controlId="filterSeverity" className="d-flex align-items-baseline me-2">
        <Form.Label className="me-1 mb-0">Severity:</Form.Label>
        <Form.Select
          value={filters?.severity ?? ''}
          style={{ width: 110 }}
          size="sm"
          onChange={e =>
            onFiltersChange({
              ...filters,
              severity: (e.target.value as Enums.SeverityLevel) || undefined,
            })
          }
        >
          <option value="">All</option>
          {Object.values(Enums.SeverityLevel).map(level => (
            <option key={level} value={level}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="filterStatus" className="d-flex align-items-baseline">
        <Form.Label className="me-1 mb-0">Status:</Form.Label>
        <Form.Select
          value={filters.status ?? ''}
          style={{ width: 110 }}
          size="sm"
          onChange={e =>
            onFiltersChange({
              ...filters,
              status: (e.target.value as Enums.StatusType) || undefined,
            })
          }
        >
          <option value="">All</option>
          {Object.values(Enums.StatusType).map(st => (
            <option key={st} value={st}>
              {st.charAt(0).toUpperCase() + st.slice(1)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="sortBySelect" className="d-flex align-items-baseline me-2">
        <Form.Label className="me-1 mb-0">Sort By:</Form.Label>
        <Form.Select
          value={sortBy}
          style={{ width: 135 }}
          size="sm"
          onChange={e => onSortByChange(e.target.value)}
        >
          {[
            { value: 'id', label: 'ID' },
            { value: 'title', label: 'Title' },
            { value: 'created_at', label: 'Created Date' },
            { value: 'severity', label: 'Severity' },
          ].map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label className="me-1 mb-0">Order:</Form.Label>
        <Button variant="outline-secondary border-0" onClick={onSortOrderToggle}>
          {sortOrder === 'asc' ? (
            <i className="bi bi-arrow-up"></i>
          ) : (
            <i className="bi bi-arrow-down"></i>
          )}
        </Button>
      </Form.Group>
    </Form>
  );
};
