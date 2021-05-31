"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoomBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppRoomBridge = {
    hasReadPermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.room.read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.room.read],
            });
        }
    },
    hasWritePermission(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions.room.write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions.room.write],
            });
        }
    },
    create(room, members, appId) {
        return this.hasWritePermission(appId);
    },
    getById(roomId, appId) {
        return this.hasReadPermission(appId);
    },
    getByName(roomName, appId) {
        return this.hasReadPermission(appId);
    },
    getCreatorById(roomId, appId) {
        return this.hasReadPermission(appId);
    },
    getCreatorByName(roomName, appId) {
        return this.hasReadPermission(appId);
    },
    getDirectByUsernames(username, appId) {
        return this.hasReadPermission(appId);
    },
    getMembers(roomId, appId) {
        return this.hasReadPermission(appId);
    },
    update(room, members, appId) {
        return this.hasWritePermission(appId);
    },
    createDiscussion(room, parentMessage, reply, members, appId) {
        return this.hasWritePermission(appId);
    },
};

//# sourceMappingURL=AppRoomBridge.js.map
