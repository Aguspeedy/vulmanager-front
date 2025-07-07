import { SeverityLevel, StatusType } from './enums.types';

export interface Filters {
  searchFilter?: string;
  severity?: SeverityLevel;
  status?: StatusType;
}
