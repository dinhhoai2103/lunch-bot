import { IUIKitInteraction } from '../../../definition/uikit';
import { IUser } from '../../../definition/users';
export declare const AppUiInteractionBridge: {
    hasInteractionPermission(appId: string): void;
    notifyUser(user: IUser, interaction: IUIKitInteraction, appId: string): void;
};
