"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPermissionManager = void 0;
const AppManager_1 = require("../AppManager");
const PermissionDeniedError_1 = require("../errors/PermissionDeniedError");
const checkers_1 = require("../permissions/checkers");
const ProxiedApp_1 = require("../ProxiedApp");
class AppPermissionManager {
    static proxy(bridge) {
        const handler = {
            get(target, prop, receiver) {
                const reflection = Reflect.get(target, prop, receiver);
                if (typeof prop === 'symbol' || typeof prop === 'number') {
                    return reflection;
                }
                if (typeof target[prop] === 'function') {
                    return (...args) => {
                        const hasPermission = AppPermissionManager.checkPermission({
                            // TODO: (shiqi.mei@lolimay.cn) 2021-01-27
                            // The permission checker's bridge name currently "hard" depends on the
                            // bridge name on the Rocket.Chat side (app/apps/server/bridges). We need
                            // to find a better implementation later to remove this unnecessary dependency.
                            bridge: bridge.constructor.name,
                            method: prop,
                            args,
                        });
                        if (!hasPermission) {
                            return;
                        }
                        return reflection.apply(target, args);
                    };
                }
            },
        };
        return new Proxy(bridge, handler);
    }
    /**
     * It returns the declaration of the permission if the app declared, or it returns `undefined`.
     */
    static hasPermission(appId, permission) {
        const grantedPermission = AppManager_1.getPermissionsByAppId(appId).find(({ name }) => name === permission.name);
        if (!grantedPermission) {
            return undefined;
        }
        return grantedPermission;
    }
    static checkPermission(call) {
        const { bridge, method, args } = call;
        if (!checkers_1.permissionCheckers[bridge] || !checkers_1.permissionCheckers[bridge][method]) {
            throw new Error(`No permission checker found for the bridge method "${bridge}.${method}"\n`
                + 'Please create a new checker one under the permissionCheckers folder to fix the issue.');
        }
        try {
            checkers_1.permissionCheckers[bridge][method](...args);
        }
        catch (err) {
            if (err instanceof PermissionDeniedError_1.PermissionDeniedError) {
                const { name, message } = err;
                console.error(`${name}: ${message}\n${this.getCallStack()}`);
                return false;
            }
            console.error(err);
            return false;
        }
        return true;
    }
    static getCallStack() {
        const stack = new Error().stack.toString().split('\n');
        const appStackIndex = stack.findIndex((position) => position.includes(ProxiedApp_1.ROCKETCHAT_APP_EXECUTION_PREFIX));
        return stack.slice(4, appStackIndex).join('\n');
    }
}
exports.AppPermissionManager = AppPermissionManager;

//# sourceMappingURL=AppPermissionManager.js.map
