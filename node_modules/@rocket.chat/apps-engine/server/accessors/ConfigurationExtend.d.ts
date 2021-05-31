import { IApiExtend, IConfigurationExtend, IExternalComponentsExtend, IHttpExtend, ISchedulerExtend, ISettingsExtend, ISlashCommandsExtend } from '../../definition/accessors';
export declare class ConfigurationExtend implements IConfigurationExtend {
    readonly http: IHttpExtend;
    readonly settings: ISettingsExtend;
    readonly slashCommands: ISlashCommandsExtend;
    readonly api: IApiExtend;
    readonly externalComponents: IExternalComponentsExtend;
    readonly scheduler: ISchedulerExtend;
    constructor(https: IHttpExtend, sets: ISettingsExtend, cmds: ISlashCommandsExtend, api: IApiExtend, externalComponents: IExternalComponentsExtend, scheduler: ISchedulerExtend);
}
