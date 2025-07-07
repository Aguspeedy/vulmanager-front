export enum AttackVector {
  Network = 'network',
  Adjacent = 'adjacent',
  Interaction = 'interaction',
  Physical = 'physical',
}

export enum ImpactType {
  Confidentiality = 'confidentiality',
  Integrity = 'integrity',
  Availability = 'availability',
}

export enum SeverityLevel {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical',
}

export enum SourceType {
  Manual = 'manual',
  Automated = 'automated',
  ASM = 'asm',
}

export enum StatusType {
  Open = 'open',
  InProgress = 'in progress',
  Resolved = 'resolved',
  Verified = 'verified',
  Closed = 'closed',
  FalsePositive = 'false positive',
  AcceptedRisk = 'accepted risk',
  Duplicate = 'duplicate',
  Ignored = 'ignored',
}

export enum VulnerabilityType {
  Injection = 'injection',
  XSS = 'cross-site scripting',
  CSRF = 'cross-site request forgery',
  Authentication = 'authentication',
  ConfigurationIssues = 'configuration issues',
  OutdatedSoftware = 'outdated software',
  MemoryIssues = 'memory issues',
  CryptographicWeaknesses = 'cryptographic weaknesses',
  InformationDisclosure = 'information disclosure',
  FileInclusion = 'file inclusion',
  Misconfiguration = 'misconfiguration',
}
