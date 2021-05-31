import { ICloudWorkspaceRead } from '../../definition/accessors/ICloudWorkspaceRead';
import { IWorkspaceToken } from '../../definition/cloud/IWorkspaceToken';
import { ICloudWorkspaceBridge } from '../bridges/ICloudWorkspaceBridge';
export declare class CloudWorkspaceRead implements ICloudWorkspaceRead {
    private readonly cloudBridge;
    private readonly appId;
    constructor(cloudBridge: ICloudWorkspaceBridge, appId: string);
    getWorkspaceToken(scope: string): Promise<IWorkspaceToken>;
}
