import { ISlashCommand } from '../../../definition/slashcommands';
export declare const AppCommandsBridge: {
    hasPermission(appId: string): void;
    doesCommandExist(command: string, appId: string): void;
    enableCommand(command: string, appId: string): void;
    disableCommand(command: string, appId: string): void;
    modifyCommand(command: ISlashCommand, appId: string): void;
    restoreCommand(command: string, appId: string): void;
    registerCommand(command: ISlashCommand, appId: string): void;
    unregisterCommand(command: string, appId: string): void;
};
