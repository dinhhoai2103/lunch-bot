"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettingBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppSettingBridge = {
    hasReadPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.setting.read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.setting.read],
            });
        }
    },
    hasWritePermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.setting.write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.message.write],
            });
        }
    },
    getAll(appId) {
        return this.hasReadPermission(appId);
    },
    getOneById(id, appId) {
        return this.hasReadPermission(appId);
    },
    hideGroup(name, appId) {
        return this.hasWritePermission(appId);
    },
    hideSetting(id, appId) {
        return this.hasWritePermission(appId);
    },
    isReadableById(id, appId) {
        return this.hasReadPermission(appId);
    },
    updateOne(setting, appId) {
        return this.hasWritePermission(appId);
    },
};

//# sourceMappingURL=AppSettingBridge.js.map
