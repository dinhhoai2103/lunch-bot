"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInternalBridge = void 0;
// It seems that it's an internal bridge that wasn't exposed.
// Pass all bridge methods by default.
exports.AppInternalBridge = {
    getUsernamesOfRoomById(roomId) {
        return;
    },
    getWorkspacePublicKey() {
        return;
    },
};

//# sourceMappingURL=AppInternalBridge.js.map
