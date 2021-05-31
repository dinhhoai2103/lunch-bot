"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppActivationBridge = void 0;
// It seems that it's an internal bridge that wasn't exposed.
// Pass all bridge methods by default.
exports.AppActivationBridge = {
    appAdded(app) {
        return;
    },
    appUpdated(app) {
        return;
    },
    appRemoved(app) {
        return;
    },
    appStatusChanged(app, status) {
        return;
    },
};

//# sourceMappingURL=AppActivationBridge.js.map
