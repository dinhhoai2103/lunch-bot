import { IMessage } from '../../../definition/messages';
import { IRoom } from '../../../definition/rooms';
import { IUser } from '../../../definition/users';
import { ITypingDescriptor } from '../../bridges/IMessageBridge';
export declare const AppMessageBridge: {
    hasReadPermission(appId: string): void;
    hasWritePermission(appId: string): void;
    getById(messageId: string, appId: string): void;
    create(message: IMessage, appId: string): void;
    update(message: IMessage, appId: string): void;
    notifyUser(user: IUser, message: IMessage, appId: string): void;
    notifyRoom(room: IRoom, message: IMessage, appId: string): void;
    typing(options: ITypingDescriptor, appId: string): void;
};
