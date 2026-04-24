import { AdditionalDataTypes } from './types/common.types';
export declare function generateInvoice(xmlSource: File | string, additionalData: AdditionalDataTypes, formatType: 'blob'): Promise<Blob>;
export declare function generateInvoice(xmlSource: File | string, additionalData: AdditionalDataTypes, formatType: 'base64'): Promise<string>;
