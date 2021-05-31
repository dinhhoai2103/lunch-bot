"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppUserBridge = {
    hasReadPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.user.read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.user.read],
            });
        }
    },
    hasWritePermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.user.write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.user.write],
            });
        }
    },
    getById(id, appId) {
        return this.hasReadPermission(appId);
    },
    getByUsername(username, appId) {
        return this.hasReadPermission(appId);
    },
    getAppUser(appId) {
        return this.hasReadPermission(appId);
    },
    /**
     * @private internal bridge method, pass it.
     */
    getActiveUserCount() {
        return;
    },
    create(data, appId, options) {
        return this.hasWritePermission(appId);
    },
    remove(user, appId) {
        return this.hasWritePermission(appId);
    },
    update(user, updates, appId) {
        return this.hasWritePermission(appId);
    },
};

//# sourceMappingURL=AppUserBridge.js.map
