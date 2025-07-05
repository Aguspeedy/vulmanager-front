import { Vulnerability } from './models/vulnerability';

export interface ResponseType {
  data: Vulnerability[];
  page: number;
  pageSize: number;
  totalPages: number;
}
