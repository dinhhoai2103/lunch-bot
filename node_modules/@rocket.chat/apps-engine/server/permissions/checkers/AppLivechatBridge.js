"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLivechatBridge = void 0;
const PermissionDeniedError_1 = require("../../errors/PermissionDeniedError");
const AppPermissionManager_1 = require("../../managers/AppPermissionManager");
const AppPermissions_1 = require("../AppPermissions");
exports.AppLivechatBridge = {
    isOnline(departmentId, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-status'].read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-status'].read],
            });
        }
    },
    isOnlineAsync(departmentId, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-status'].read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-status'].read],
            });
        }
    },
    updateMessage(message, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-message'].write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-message'].write],
            });
        }
    },
    createMessage(message, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-message'].write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-message'].write],
            });
        }
    },
    createVisitor(visitor, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-visitor'].write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-visitor'].write],
            });
        }
    },
    findVisitors(query, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-visitor'].read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-visitor'].read],
            });
        }
    },
    findVisitorById(id, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-visitor'].read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-visitor'].read],
            });
        }
    },
    findVisitorByEmail(email, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-visitor'].read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-visitor'].read],
            });
        }
    },
    findVisitorByToken(token, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-visitor'].read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-visitor'].read],
            });
        }
    },
    findVisitorByPhoneNumber(phoneNumber, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-visitor'].read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-visitor'].read],
            });
        }
    },
    transferVisitor(visitor, transferData, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-visitor'].write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-visitor'].write],
            });
        }
    },
    createRoom(visitor, agent, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-room'].write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-room'].write],
            });
        }
    },
    closeRoom(room, comment, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-room'].write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-room'].write],
            });
        }
    },
    findRooms(visitor, departmentId, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-room'].read)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-room'].read],
            });
        }
    },
    findDepartmentsEnabledWithAgents(appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-department'].multiple)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-department'].multiple],
            });
        }
    },
    findDepartmentByIdOrName(value, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-department'].read)
            && !AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-department'].multiple)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-department'].read],
            });
        }
    },
    setCustomFields(data, appId) {
        if (!AppPermissionManager_1.AppPermissionManager.hasPermission(appId, AppPermissions_1.AppPermissions['livechat-custom-fields'].write)) {
            throw new PermissionDeniedError_1.PermissionDeniedError({
                appId,
                missingPermissions: [AppPermissions_1.AppPermissions['livechat-custom-fields'].write],
            });
        }
    },
};

//# sourceMappingURL=AppLivechatBridge.js.map
