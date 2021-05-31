"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUiInteractionBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppUiInteractionBridge = {
    hasInteractionPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.ui.interaction)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.ui.interaction],
            });
        }
    },
    notifyUser(user, interaction, appId) {
        return this.hasInteractionPermission(appId);
    },
};

//# sourceMappingURL=AppUiInteractionBridge.js.map
