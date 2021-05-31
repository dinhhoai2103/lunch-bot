import { RocketChatAssociationRecord } from '../../../definition/metadata';
export declare const AppPersistenceBridge: {
    hasPermission(appId: string): void;
    purge(appId: string): void;
    create(data: object, appId: string): void;
    createWithAssociations(data: object, associations: Array<RocketChatAssociationRecord>, appId: string): void;
    readById(id: string, appId: string): void;
    readByAssociations(associations: Array<RocketChatAssociationRecord>, appId: string): void;
    remove(id: string, appId: string): void;
    removeByAssociations(associations: Array<RocketChatAssociationRecord>, appId: string): void;
    update(id: string, data: object, upsert: boolean, appId: string): void;
    updateByAssociations(associations: Array<RocketChatAssociationRecord>, data: object, upsert: boolean, appId: string): void;
};
