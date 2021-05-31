import {
    BlockBuilder,
    BlockElementType,
} from '@rocket.chat/apps-engine/definition/uikit';
import { IOrder } from './../definition';

import { IPoll } from '../definition';
import { buildVoteGraph } from './buildVoteGraph';
import { buildVoters } from './buildVoters';

export function createPollBlocks(
    block: BlockBuilder,
    question: string,
    options: Array<any>,
    poll: IPoll,
    showNames: boolean,
) {
    block.addSectionBlock({
        text: block.newPlainTextObject(question),
        ...(!poll.finished && {
            accessory: {
                type: BlockElementType.BUTTON,
                actionId: 'finish',
                text: block.newPlainTextObject('Close order'),
                value: 'finish',
            },
        }),
    });
    if (!poll.finished) {
        block
         .addActionsBlock({
            blockId: 'join',
            elements: [
                block.newButtonElement({
                    actionId: 'join',
                    text: block.newPlainTextObject('Join'),
                    value: 'join',
                }),
            ],
    });
    }
    if (poll.finished) {
        block.addContextBlock({
            elements: [
                block.newMarkdownTextObject(
                    `The order has been finished at ${new Date()}`,
                ),
            ],
        });
    }

    block.addDividerBlock();

    // options.forEach((option, index) => {
    //     block.addSectionBlock({
    //         text: block.newPlainTextObject(option),
    //         ...!poll.finished && {
    //                 accessory: {
    //                 type: BlockElementType.BUTTON,
    //                 actionId: 'vote',
    //                 text: block.newPlainTextObject('Vote'),
    //                 value: String(index),
    //             },
    //         },
    //     });

    //     if (!poll.votes[index]) {
    //         return;
    //     }

    //     const graph = buildVoteGraph(poll.votes[index], poll.totalVotes);
    //     block.addContextBlock({
    //         elements: [
    //             block.newMarkdownTextObject(graph),
    //         ],
    //     });

    //     if (poll.confidential) {
    //         return;
    //     }

    //     const voters = buildVoters(poll.votes[index], showNames);
    //     if (!voters) {
    //         return;
    //     }

    //     block.addContextBlock({
    //         elements: [
    //             block.newMarkdownTextObject(voters),
    //         ],
    //     });
    // });
}
