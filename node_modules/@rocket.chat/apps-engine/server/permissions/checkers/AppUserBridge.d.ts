import { IUser, IUserCreationOptions } from '../../../definition/users';
export declare const AppUserBridge: {
    hasReadPermission(appId: string): void;
    hasWritePermission(appId: string): void;
    getById(id: string, appId: string): void;
    getByUsername(username: string, appId: string): void;
    getAppUser(appId: string): void;
    /**
     * @private internal bridge method, pass it.
     */
    getActiveUserCount(): void;
    create(data: Partial<IUser>, appId: string, options?: IUserCreationOptions): any;
    remove(user: IUser, appId: string): void;
    update(user: IUser, updates: Partial<IUser>, appId: string): void;
};
