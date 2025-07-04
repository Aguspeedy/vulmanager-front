import api from './client';
import type { Vulnerability, VulnerabilityInsert } from '../types/models/vulnerability';
import { ResponseType } from '../types/response.types';

export async function fetchVulnerabilities(): Promise<ResponseType> {
  const res = await api.get<ResponseType>('/vulnerabilities');
  return res.data;
}

export async function createVulnerability(payload: VulnerabilityInsert): Promise<Vulnerability> {
  const body = { data: payload };
  const res = await api.post<Vulnerability>('/vulnerabilities', body);
  return res.data;
}
