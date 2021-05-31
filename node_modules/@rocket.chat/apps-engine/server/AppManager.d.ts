/// <reference types="node" />
import { AppStatus } from '../definition/AppStatus';
import { IPermission } from '../definition/permissions/IPermission';
import { IUser } from '../definition/users';
import { AppBridges } from './bridges';
import { AppCompiler, AppFabricationFulfillment, AppPackageParser } from './compiler';
import { IGetAppsFilter } from './IGetAppsFilter';
import { AppAccessorManager, AppApiManager, AppExternalComponentManager, AppLicenseManager, AppListenerManager, AppSchedulerManager, AppSettingsManager, AppSlashCommandManager } from './managers';
import { IMarketplaceInfo } from './marketplace';
import { ProxiedApp } from './ProxiedApp';
import { AppLogStorage, AppStorage } from './storage';
export interface IAppInstallParameters {
    enable: boolean;
    marketplaceInfo?: IMarketplaceInfo;
    permissionsGranted?: Array<IPermission>;
    user: IUser;
}
export interface IAppUninstallParameters {
    user: IUser;
}
export declare class AppManager {
    static Instance: AppManager;
    private readonly apps;
    private readonly storage;
    private readonly logStorage;
    private readonly bridges;
    private readonly parser;
    private readonly compiler;
    private readonly accessorManager;
    private readonly listenerManager;
    private readonly commandManager;
    private readonly apiManager;
    private readonly externalComponentManager;
    private readonly settingsManager;
    private readonly licenseManager;
    private readonly schedulerManager;
    private isLoaded;
    constructor(rlStorage: AppStorage, logStorage: AppLogStorage, rlBridges: AppBridges);
    /** Gets the instance of the storage connector. */
    getStorage(): AppStorage;
    /** Gets the instance of the log storage connector. */
    getLogStorage(): AppLogStorage;
    /** Gets the instance of the App package parser. */
    getParser(): AppPackageParser;
    /** Gets the compiler instance. */
    getCompiler(): AppCompiler;
    /** Gets the accessor manager instance. */
    getAccessorManager(): AppAccessorManager;
    /** Gets the instance of the Bridge manager. */
    getBridges(): AppBridges;
    /** Gets the instance of the listener manager. */
    getListenerManager(): AppListenerManager;
    /** Gets the command manager's instance. */
    getCommandManager(): AppSlashCommandManager;
    getLicenseManager(): AppLicenseManager;
    /** Gets the api manager's instance. */
    getApiManager(): AppApiManager;
    /** Gets the external component manager's instance. */
    getExternalComponentManager(): AppExternalComponentManager;
    /** Gets the manager of the settings, updates and getting. */
    getSettingsManager(): AppSettingsManager;
    getSchedulerManager(): AppSchedulerManager;
    /** Gets whether the Apps have been loaded or not. */
    areAppsLoaded(): boolean;
    /**
     * Goes through the entire loading up process.
     * Expect this to take some time, as it goes through a very
     * long process of loading all the Apps up.
     */
    load(): Promise<Array<AppFabricationFulfillment>>;
    unload(isManual: boolean): Promise<void>;
    /** Gets the Apps which match the filter passed in. */
    get(filter?: IGetAppsFilter): Array<ProxiedApp>;
    /** Gets a single App by the id passed in. */
    getOneById(appId: string): ProxiedApp;
    getPermissionsById(appId: string): Array<IPermission>;
    enable(id: string): Promise<boolean>;
    disable(id: string, status?: AppStatus, silent?: boolean): Promise<boolean>;
    add(appPackage: Buffer, installationParameters: IAppInstallParameters): Promise<AppFabricationFulfillment>;
    remove(id: string, uninstallationParameters: IAppUninstallParameters): Promise<ProxiedApp>;
    update(appPackage: Buffer, permissionsGranted: Array<IPermission>): Promise<AppFabricationFulfillment>;
    getLanguageContent(): {
        [key: string]: object;
    };
    changeStatus(appId: string, status: AppStatus): Promise<ProxiedApp>;
    updateAppsMarketplaceInfo(appsOverview: Array<{
        latest: IMarketplaceInfo;
    }>): Promise<void>;
    /**
     * Goes through the entire loading up process. WARNING: Do not use. ;)
     *
     * @param appId the id of the application to load
     */
    protected loadOne(appId: string): Promise<ProxiedApp>;
    private runStartUpProcess;
    private installApp;
    private initializeApp;
    /**
     * Determines if the App's required settings are set or not.
     * Should a packageValue be provided and not empty, then it's considered set.
     */
    private areRequiredSettingsSet;
    private enableApp;
    private createAppUser;
    private removeAppUser;
    private ensureAppUser;
    private uninstallApp;
}
export declare const getPermissionsByAppId: (appId: string) => IPermission[];
