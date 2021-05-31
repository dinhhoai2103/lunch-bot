import { IMessage } from '../../../definition/messages';
import { IRoom } from '../../../definition/rooms/IRoom';
export declare const AppRoomBridge: {
    hasReadPermission(appId: string): void;
    hasWritePermission(appId: string): void;
    create(room: IRoom, members: Array<string>, appId: string): void;
    getById(roomId: string, appId: string): void;
    getByName(roomName: string, appId: string): void;
    getCreatorById(roomId: string, appId: string): void;
    getCreatorByName(roomName: string, appId: string): void;
    getDirectByUsernames(username: Array<string>, appId: string): void;
    getMembers(roomId: string, appId: string): void;
    update(room: IRoom, members: Array<string>, appId: string): void;
    createDiscussion(room: IRoom, parentMessage: IMessage | undefined, reply: string | undefined, members: Array<string>, appId: string): void;
};
