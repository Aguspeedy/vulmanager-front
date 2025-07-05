import { SeverityLevel, StatusType } from './enums';

export interface Filters {
  searchFilter?: string;
  severity?: SeverityLevel;
  status?: StatusType;
}
