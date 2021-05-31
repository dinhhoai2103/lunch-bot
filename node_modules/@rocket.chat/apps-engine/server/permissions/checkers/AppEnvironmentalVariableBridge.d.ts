export declare const AppEnvironmentalVariableBridge: {
    hasReadPermission(appId: string): void;
    getValueByName(envVarName: string, appId: string): void;
    isReadable(envVarName: string, appId: string): void;
    isSet(envVarName: string, appId: string): void;
};
