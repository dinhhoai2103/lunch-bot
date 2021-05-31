import {
    IModify,
    IPersistence,
} from '@rocket.chat/apps-engine/definition/accessors';
import {
    RocketChatAssociationModel,
    RocketChatAssociationRecord,
} from '@rocket.chat/apps-engine/definition/metadata';
import { IUIKitModalViewParam } from '@rocket.chat/apps-engine/definition/uikit/UIKitInteractionResponder';

import { IModalContext } from '../definition';
import { uuid } from './uuid';
export async function createOrderModal({
    id = '',
    name,
    price,
    persistence,
    data,
    modify,
}: {
    id?: string;
    name?: string;
    price?: string;
    persistence: IPersistence;
    data: IModalContext;
    modify: IModify;
}): Promise<IUIKitModalViewParam> {
    const viewId = id || uuid();

    const association = new RocketChatAssociationRecord(
        RocketChatAssociationModel.MISC,
        viewId,
    );
    await persistence.createWithAssociation(data, association);

    const block = modify.getCreator().getBlockBuilder();
    block
        .addInputBlock({
            blockId: 'order',
            element: block.newPlainTextInputElement({
                initialValue: name,
                actionId: 'name',
            }),
            label: block.newPlainTextObject('What do you want?'),
        })
        .addDividerBlock();
    block
        .addInputBlock({
            blockId: 'order',
            element: block.newPlainTextInputElement({
                initialValue: price,
                actionId: 'price',
            }),
            label: block.newPlainTextObject('Price'),
        })
        .addDividerBlock();
    return {
        id: viewId,
        title: block.newPlainTextObject('Join order'),
        submit: block.newButtonElement({
            text: block.newPlainTextObject('Join'),
        }),
        close: block.newButtonElement({
            text: block.newPlainTextObject('Cancel'),
        }),
        blocks: block.getBlocks(),
    };
}
