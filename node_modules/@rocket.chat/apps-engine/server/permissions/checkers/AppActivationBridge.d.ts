import { AppStatus } from '../../../definition/AppStatus';
import { ProxiedApp } from '../../ProxiedApp';
export declare const AppActivationBridge: {
    appAdded(app: ProxiedApp): void;
    appUpdated(app: ProxiedApp): void;
    appRemoved(app: ProxiedApp): void;
    appStatusChanged(app: ProxiedApp, status: AppStatus): void;
};
