"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMessageBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppMessageBridge = {
    hasReadPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.message.read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.message.read],
            });
        }
    },
    hasWritePermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.message.write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.message.write],
            });
        }
    },
    getById(messageId, appId) {
        return this.hasReadPermission(appId);
    },
    create(message, appId) {
        return this.hasWritePermission(appId);
    },
    update(message, appId) {
        return this.hasWritePermission(appId);
    },
    notifyUser(user, message, appId) {
        return this.hasWritePermission(appId);
    },
    notifyRoom(room, message, appId) {
        return this.hasWritePermission(appId);
    },
    typing(options, appId) {
        return this.hasWritePermission(appId);
    },
};

//# sourceMappingURL=AppMessageBridge.js.map
