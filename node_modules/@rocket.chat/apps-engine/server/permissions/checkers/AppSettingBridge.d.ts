import { ISetting } from '../../../definition/settings';
export declare const AppSettingBridge: {
    hasReadPermission(appId: string): void;
    hasWritePermission(appId: string): void;
    getAll(appId: string): void;
    getOneById(id: string, appId: string): void;
    hideGroup(name: string, appId: string): void;
    hideSetting(id: string, appId: string): void;
    isReadableById(id: string, appId: string): void;
    updateOne(setting: ISetting, appId: string): void;
};
