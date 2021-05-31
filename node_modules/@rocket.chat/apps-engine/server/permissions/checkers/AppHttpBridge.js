"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHttpBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppHttpBridge = {
    call(info) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(info.appId, AppPermissions_1.AppPermissions.networking.default)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId: info.appId,
                missingPermissions: [AppPermissions_1.AppPermissions.networking.default],
            });
        }
    },
};

//# sourceMappingURL=AppHttpBridge.js.map
