import { AppManager } from '../AppManager';
import { ProxiedApp } from '../ProxiedApp';
import { IAppStorageItem } from '../storage/IAppStorageItem';
export declare class AppCompiler {
    normalizeStorageFiles(files: {
        [key: string]: string;
    }): {
        [key: string]: string;
    };
    toSandBox(manager: AppManager, storage: IAppStorageItem): ProxiedApp;
}
