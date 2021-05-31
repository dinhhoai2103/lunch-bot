"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCloudBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppCloudBridge = {
    getWorkspaceToken(scope, appId) {
        var _a;
        const grantedPermission = AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.cloud['workspace-token']);
        const isMissingScope = ((_a = grantedPermission === null || grantedPermission === void 0 ? void 0 : grantedPermission.scopes) === null || _a === void 0 ? void 0 : _a.includes(scope)) === false;
        if (scope.startsWith('workspace')) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.cloud['workspace-token']],
                message: `Forbidden scope "${scope}" requested`,
            });
        }
        if (!grantedPermission || isMissingScope) {
            throw new PermissionDeniedError_1.PermissionDeniedError(Object.assign({ appId, missingPermissions: [AppPermissions_1.AppPermissions.cloud['workspace-token']] }, isMissingScope && { reason: `Missing scope "${scope}" in permission` }));
        }
    },
};

//# sourceMappingURL=AppCloudBridge.js.map
