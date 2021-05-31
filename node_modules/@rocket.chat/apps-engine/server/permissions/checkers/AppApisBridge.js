"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppApisBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppApisBridge = {
    hasGeneralPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.apis.default)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.apis.default],
            });
        }
    },
    registerApi(api, appId) {
        return this.hasGeneralPermission(appId);
    },
    unregisterApis(appId) {
        return this.hasGeneralPermission(appId);
    },
};

//# sourceMappingURL=AppApisBridge.js.map
