import {
    IModify,
    IPersistence,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import {
    RocketChatAssociationModel,
    RocketChatAssociationRecord,
} from '@rocket.chat/apps-engine/definition/metadata';
import { IUIKitViewSubmitIncomingInteraction } from '@rocket.chat/apps-engine/definition/uikit/UIKitIncomingInteractionTypes';

import { IModalContext, IOrder } from '../definition';
import { createOrderBlocks } from './createOrderBlocks';

export async function createOrderMessage(
    data: IUIKitViewSubmitIncomingInteraction,
    read: IRead,
    modify: IModify,
    persistence: IPersistence,
    uid: string,
    ) {
    const {
        view: { id },
    } = data;
    const {
        state,
    }: {
        state?: any;
    } = data.view;

    const association = new RocketChatAssociationRecord(
        RocketChatAssociationModel.MISC,
        id,
    );
    const [record] = (await read
        .getPersistenceReader()
        .readByAssociation(association)) as Array<IModalContext>;

    if (
        !state.order ||
        !state.order.name ||
        state.order.name.trim() === ''
    ) {
        throw { name: 'Please type' };
    }
    if (
        !state.order ||
        !state.order.price ||
        state.order.price.trim() === ''
    ) {
        throw { price: 'Please type price' };
    }

    try {
        const { config = { mode: 'multiple', visibility: 'open' } } = state;
        const { mode = 'multiple', visibility = 'open' } = config;

        const showNames = await read
            .getEnvironmentReader()
            .getSettings()
            .getById('use-user-name');

        const builder = modify
            .getCreator()
            .startMessage()
            .setUsernameAlias(
                (showNames.value && data.user.name) || data.user.username,
            )
            .setText(state.poll.name);
        const options = Object.entries<any>(state.poll || {})
            .filter(([key]) => key !== 'question')
            .map(([, option]) => option)
            .filter((option) => option.trim() !== '');
        // if poll created from inside a thread, need to set the thread id
        if (record.threadId) {
            builder.setThreadId(record.threadId);
        }
        const order: IOrder = {
            name: state.order.name,
            price: state.order.price,
            uid,
            msgId: '',
        };

        const block = modify.getCreator().getBlockBuilder();
        createOrderBlocks(block, order.name, order.price, order, showNames.value);

        builder.setBlocks(block);

        const messageId = await modify.getCreator().finish(builder);
        order.msgId = messageId;

        const pollAssociation = new RocketChatAssociationRecord(
            RocketChatAssociationModel.MISC,
            messageId,
        );

        await persistence.createWithAssociation(order, pollAssociation);
    } catch (e) {
        throw e;
    }
}
