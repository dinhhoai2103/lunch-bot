import { ILivechatMessage, ILivechatRoom, ILivechatTransferData, IVisitor } from '../../../definition/livechat';
import { IUser } from '../../../definition/users';
export declare const AppLivechatBridge: {
    isOnline(departmentId?: string, appId?: string): void;
    isOnlineAsync(departmentId?: string, appId?: string): void;
    updateMessage(message: ILivechatMessage, appId: string): void;
    createMessage(message: ILivechatMessage, appId: string): void;
    createVisitor(visitor: IVisitor, appId: string): void;
    findVisitors(query: object, appId: string): void;
    findVisitorById(id: string, appId: string): void;
    findVisitorByEmail(email: string, appId: string): void;
    findVisitorByToken(token: string, appId: string): void;
    findVisitorByPhoneNumber(phoneNumber: string, appId: string): void;
    transferVisitor(visitor: IVisitor, transferData: ILivechatTransferData, appId: string): void;
    createRoom(visitor: IVisitor, agent: IUser, appId: string): void;
    closeRoom(room: ILivechatRoom, comment: string, appId: string): void;
    findRooms(visitor: IVisitor, departmentId: string | null, appId: string): void;
    findDepartmentsEnabledWithAgents(appId: string): void;
    findDepartmentByIdOrName(value: string, appId: string): void;
    setCustomFields(data: {
        token: IVisitor['token'];
        key: string;
        value: string;
        overwrite: boolean;
    }, appId: string): void;
};
