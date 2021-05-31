"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSchedulerBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppSchedulerBridge = {
    hasGeneralPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.scheduler.default)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.scheduler.default],
            });
        }
    },
    registerProcessors(processor, appId) {
        return this.hasGeneralPermission(appId);
    },
    scheduleOnce(job, appId) {
        return this.hasGeneralPermission(appId);
    },
    scheduleRecurring(job, appId) {
        return this.hasGeneralPermission(appId);
    },
    cancelJob(jobId, appId) {
        return this.hasGeneralPermission(appId);
    },
    cancelAllJobs(appId) { },
};

//# sourceMappingURL=AppSchedulerBridge.js.map
