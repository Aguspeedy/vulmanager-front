import api from './client';
import type { Vulnerability, VulnerabilityInsert } from '../types/models/vulnerability.types';
import { VulnerabilityResponseType } from '../types/vulnerabilityResponse.types';

export async function fetchVulnerabilities(
  page: number,
  pageSize: number,
  sortBy?: string,
  sortOrder?: string,
  filters?: Record<string, any>
): Promise<VulnerabilityResponseType> {
  const res = await api.get<VulnerabilityResponseType>('/vulnerabilities', {
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
