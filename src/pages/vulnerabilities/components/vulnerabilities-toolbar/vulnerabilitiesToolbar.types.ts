import { Filters } from '../../../../types/filters.types';

export interface VulnerabilitiesToolbarProps {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters: Filters;
  onSortByChange: (value: string) => void;
  onSortOrderToggle: () => void;
  onFiltersChange: (next: Filters) => void;
}
