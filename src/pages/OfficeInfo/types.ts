export interface OfficeInfo {
    buildingName: string;
    area: string;
    landLineNumber: string;
    addressLine1: string;
    addressLine2: string;
    poBoxNumber: string;
}

export interface OfficeInfoProps {
    onNext: () => void;
}