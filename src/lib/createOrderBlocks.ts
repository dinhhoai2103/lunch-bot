import {
    BlockBuilder,
    BlockElementType,
} from '@rocket.chat/apps-engine/definition/uikit';

import { IOrder, IPoll } from '../definition';

export function createOrderBlocks(
    block: BlockBuilder,
    name: string,
    price: string,
    order: IOrder,
    showNames: boolean,
) {
    block.addContextBlock({
        elements: [
            block.newMarkdownTextObject(
                `${name}-${price}`,
            ),
        ],
    });
    block.addActionsBlock({
        blockId: 'leave',
        elements: [
            block.newButtonElement({
                actionId: 'leave',
                text: block.newPlainTextObject('Leave'),
                value: 'leave',
            }),
        ],
    });

    block.addDividerBlock();
}
