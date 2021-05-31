"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRead = void 0;
class UserRead {
    constructor(userBridge, appId) {
        this.userBridge = userBridge;
        this.appId = appId;
    }
    getById(id) {
        return this.userBridge.getById(id, this.appId);
    }
    getByUsername(username) {
        return this.userBridge.getByUsername(username, this.appId);
    }
    getAppUser(appId = this.appId) {
        return this.userBridge.getAppUser(appId);
    }
}
exports.UserRead = UserRead;

//# sourceMappingURL=UserRead.js.map
