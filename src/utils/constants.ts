import { IconData } from '../types/iconData.types';

export const statusIconMap: Record<string, IconData> = {
  open: { icon: 'bi bi-bug', title: 'Open', cssClass: 'open' },
  inProgress: { icon: 'bi bi-hourglass-split', title: 'In Progress', cssClass: 'in-progress' },
  resolved: { icon: 'bi bi-patch-check', title: 'Resolved', cssClass: 'resolved' },
  verified: { icon: 'bi bi-check-circle', title: 'Verified', cssClass: 'verified' },
  closed: { icon: 'bi bi-lock-fill', title: 'Closed', cssClass: 'closed' },
  falsePositive: { icon: 'bi bi-x-circle', title: 'False Positive', cssClass: 'neutral' },
  acceptedRisk: { icon: 'bi bi-shield-check', title: 'Accepted Risk', cssClass: 'neutral' },
  duplicate: { icon: 'bi bi-files', title: 'Duplicate', cssClass: 'neutral' },
  ignored: { icon: 'bi bi-dash-circle', title: 'Ignored', cssClass: 'neutral' },
};

export const severityIconMap: Record<string, IconData> = {
  low: { icon: 'bi bi-info-circle', title: 'Low', cssClass: 'low' },
  medium: { icon: 'bi bi-exclamation-triangle', title: 'Medium', cssClass: 'medium' },
  high: { icon: 'bi bi-exclamation-octagon', title: 'High', cssClass: 'high' },
  critical: { icon: 'bi bi-patch-exclamation', title: 'Critical', cssClass: 'critical' },
};
