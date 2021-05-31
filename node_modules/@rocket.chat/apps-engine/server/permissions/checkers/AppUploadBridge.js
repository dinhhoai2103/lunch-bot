"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUploadBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppUploadBridge = {
    hasReadPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.upload.read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.upload.read],
            });
        }
    },
    hasWritePermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.upload.write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.upload.write],
            });
        }
    },
    getById(id, appId) {
        return this.hasReadPermission(appId);
    },
    getBuffer(upload, appId) {
        return this.hasReadPermission(appId);
    },
    createUpload(details, buffer, appId) {
        return this.hasWritePermission(appId);
    },
};

//# sourceMappingURL=AppUploadBridge.js.map
