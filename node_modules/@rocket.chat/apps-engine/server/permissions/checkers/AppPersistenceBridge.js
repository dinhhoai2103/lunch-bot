"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPersistenceBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppPersistenceBridge = {
    hasPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.persistence.default)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.persistence.default],
            });
        }
    },
    purge(appId) {
        return this.hasPermission(appId);
    },
    create(data, appId) {
        return this.hasPermission(appId);
    },
    createWithAssociations(data, associations, appId) {
        return this.hasPermission(appId);
    },
    readById(id, appId) {
        return this.hasPermission(appId);
    },
    readByAssociations(associations, appId) {
        return this.hasPermission(appId);
    },
    remove(id, appId) {
        return this.hasPermission(appId);
    },
    removeByAssociations(associations, appId) {
        return this.hasPermission(appId);
    },
    update(id, data, upsert, appId) {
        return this.hasPermission(appId);
    },
    updateByAssociations(associations, data, upsert, appId) {
        return this.hasPermission(appId);
    },
};

//# sourceMappingURL=AppPersistenceBridge.js.map
