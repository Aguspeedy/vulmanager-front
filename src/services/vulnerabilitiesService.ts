import api from './client';
import type { Vulnerability } from '../types/models/vulnerability';

export async function fetchVulnerabilities(): Promise<Vulnerability[]> {
  const res = await api.get<Vulnerability[]>('/vulnerabilities');
  return res.data;
}
