import { IOnetimeSchedule, IProcessor, IRecurringSchedule } from '../../../definition/scheduler';
export declare const AppSchedulerBridge: {
    hasGeneralPermission(appId: string): void;
    registerProcessors(processor: Array<IProcessor>, appId: string): void;
    scheduleOnce(job: IOnetimeSchedule, appId: string): void;
    scheduleRecurring(job: IRecurringSchedule, appId: string): void;
    cancelJob(jobId: string, appId: string): void;
    cancelAllJobs(appId: string): void;
};
