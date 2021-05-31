/// <reference types="node" />
import { IUpload } from '../../../definition/uploads';
import { IUploadDetails } from '../../../definition/uploads/IUploadDetails';
export declare const AppUploadBridge: {
    hasReadPermission(appId: string): void;
    hasWritePermission(appId: string): void;
    getById(id: string, appId: string): void;
    getBuffer(upload: IUpload, appId: string): void;
    createUpload(details: IUploadDetails, buffer: Buffer, appId: string): void;
};
