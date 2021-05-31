"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCommandsBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppCommandsBridge = {
    hasPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.command.default)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.command.default],
            });
        }
    },
    doesCommandExist(command, appId) {
        return this.hasPermission(appId);
    },
    enableCommand(command, appId) {
        return this.hasPermission(appId);
    },
    disableCommand(command, appId) {
        return this.hasPermission(appId);
    },
    modifyCommand(command, appId) {
        return this.hasPermission(appId);
    },
    restoreCommand(command, appId) {
        return this.hasPermission(appId);
    },
    registerCommand(command, appId) {
        return this.hasPermission(appId);
    },
    unregisterCommand(command, appId) {
        return this.hasPermission(appId);
    },
};

//# sourceMappingURL=AppCommandsBridge.js.map
