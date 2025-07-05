import api from './client';
import type { Vulnerability, VulnerabilityInsert } from '../types/models/vulnerability';
import { ResponseType } from '../types/response.types';

export async function fetchVulnerabilities(
  page: number,
  pageSize: number,
  sortBy?: string,
  sortOrder?: string,
  filters?: Record<string, any>
): Promise<ResponseType> {
  const res = await api.get<ResponseType>('/vulnerabilities', {
    params: { page, pageSize, sortBy, sortOrder, filters: JSON.stringify(filters) },
  });
  return res.data;
}

export async function createVulnerability(payload: VulnerabilityInsert): Promise<Vulnerability> {
  const body = { data: payload };
  const res = await api.post<Vulnerability>('/vulnerabilities', body);
  return res.data;
}

export async function editVulnerability(payload: VulnerabilityInsert): Promise<Vulnerability> {
  const body = { data: payload };
  const res = await api.put<Vulnerability>('/vulnerabilities', body);
  return res.data;
}
