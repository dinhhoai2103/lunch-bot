"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnvironmentalVariableBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppEnvironmentalVariableBridge = {
    hasReadPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.env.read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.env.read],
            });
        }
    },
    getValueByName(envVarName, appId) {
        return;
    },
    isReadable(envVarName, appId) {
        return;
    },
    isSet(envVarName, appId) {
        return;
    },
};

//# sourceMappingURL=AppEnvironmentalVariableBridge.js.map
