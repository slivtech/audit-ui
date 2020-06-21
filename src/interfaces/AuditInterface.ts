export enum ActionType {
    INSTALL = 'install',
    UPDATE = 'update'
}

export interface IResolvedByAction {
    id: number;
    path: string;
    dev: boolean;
    optional: boolean;
    bundled: boolean;
}

export interface IAction {
    action: ActionType;
    module: string;
    target: string;
    isMajor: boolean;
    depth?: number;
    resolves: IResolvedByAction[];
}
// end: actions

// begin: advisories
export interface IFinding {
    version: string;
    paths: string[];
    dev: boolean;
    optional: boolean;
    bundled: boolean;
}

export interface IFoundBy {
    name: string;
}

export interface IReportedBy {
    name: string;
}

export enum AccessType {
    PUBLIC = 'public'
}

export enum SeverityType {
    CRITICAL = 'critical'
}

export interface IAdvisoryMetadata {
    module_type: string;
    exploitability: number;
    affected_components: string;
}

export interface IAdvisory {
    findings: IFinding[];
    id: number;
    created: Date;
    updated: Date;
    deleted: Date;
    title: string;
    found_by: IFoundBy;
    reported_by: IReportedBy;
    module_name: string;
    cves: string[];
    vulnerable_versions: string;
    patched_versions: string;
    overview: string;
    recommendation: string;
    references: string;
    access: AccessType;
    severity: SeverityType;
    cwe: string;
    metadata: IAdvisoryMetadata;
    url: string;
}

export interface IAdvisories {
    [advisoryId: string]: IAdvisory;
}
// end: advisories

// begin: muted
export interface IMuted {
// TODO: determine what this contains, when not an empty array
}
// end: muted

// begin: metadata
export interface IVulnerabilities {
    info: number;
    low: number;
    moderate: number;
    high: number;
    critical: number;
}

export interface IMetadata {
    vulnerabilities: IVulnerabilities;
    dependencies: number;
    devDependencies: number;
    optionalDependencies: number;
    totalDependencies: number;
}
// end: metadata

export default interface IAudit {
    actions: IAction[];
    advisories: IAdvisories;
    muted: IMuted[];
    metadata: IMetadata;
    runId: string;
}
