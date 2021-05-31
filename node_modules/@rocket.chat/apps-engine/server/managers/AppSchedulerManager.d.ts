import { IOnetimeSchedule, IProcessor, IRecurringSchedule } from '../../definition/scheduler';
import { AppManager } from '../AppManager';
export declare class AppSchedulerManager {
    private readonly manager;
    private readonly bridge;
    private readonly accessors;
    private registeredProcessors;
    constructor(manager: AppManager);
    registerProcessors(processors: Array<IProcessor>, appId: string): Promise<void>;
    wrapProcessor(appId: string, processorId: string): IProcessor['processor'];
    scheduleOnce(job: IOnetimeSchedule, appId: string): Promise<void>;
    scheduleRecurring(job: IRecurringSchedule, appId: string): Promise<void>;
    cancelJob(jobId: string, appId: string): Promise<void>;
    cancelAllJobs(appId: string): Promise<void>;
}
