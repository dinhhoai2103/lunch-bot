"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireNativeModule = exports.ForbiddenNativeModuleAccess = exports.AllowedInternalModules = void 0;
const net_1 = require("./net");
var AllowedInternalModules;
(function (AllowedInternalModules) {
    AllowedInternalModules["path"] = "path";
    AllowedInternalModules["url"] = "url";
    AllowedInternalModules["crypto"] = "crypto";
    AllowedInternalModules["buffer"] = "buffer";
    AllowedInternalModules["stream"] = "stream";
    AllowedInternalModules["net"] = "net";
})(AllowedInternalModules = exports.AllowedInternalModules || (exports.AllowedInternalModules = {}));
class ForbiddenNativeModuleAccess extends Error {
    constructor(module, prop) {
        super(`Access to property ${prop} in module ${module} is forbidden`);
    }
}
exports.ForbiddenNativeModuleAccess = ForbiddenNativeModuleAccess;
const defaultHandler = () => ({});
const proxyHandlers = {
    path: defaultHandler,
    url: defaultHandler,
    crypto: defaultHandler,
    buffer: defaultHandler,
    stream: defaultHandler,
    net: net_1.netModuleHandler,
};
function requireNativeModule(module, appId) {
    const requiredModule = require(module);
    return new Proxy(requiredModule, 
    // Creates a proxy handler that is aware of the appId requiring the module
    Reflect.apply(proxyHandlers[module], undefined, [appId]));
}
exports.requireNativeModule = requireNativeModule;

//# sourceMappingURL=index.js.map
