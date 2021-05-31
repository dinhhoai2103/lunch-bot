import { IPermission } from '../../definition/permissions/IPermission';
import { Bridge } from '../bridges/AppBridges';
export declare class AppPermissionManager {
    static proxy<T extends Bridge & {
        [key: string]: any;
    }>(bridge: T): T;
    /**
     * It returns the declaration of the permission if the app declared, or it returns `undefined`.
     */
    static hasPermission<P extends IPermission>(appId: string, permission: P): P | undefined;
    private static checkPermission;
    private static getCallStack;
}
