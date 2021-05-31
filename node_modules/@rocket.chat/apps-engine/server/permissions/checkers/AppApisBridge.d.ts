import { AppApi } from '../../managers/AppApi';
export declare const AppApisBridge: {
    hasGeneralPermission(appId: string): void;
    registerApi(api: AppApi, appId: string): void;
    unregisterApis(appId: string): void;
};
