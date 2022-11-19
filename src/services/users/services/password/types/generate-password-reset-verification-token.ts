// eslint-disable-next-line max-len
import {PasswordResetVerificationToken} from '../models/PasswordResetVerificationToken';
import {StatusDataContainer} from '../../../../../dtos/StatusDataContainer';

export type GeneratePasswordResetVerificationTokenFunction = (
    tokenSize: number,
    expiryTimeMinutes: number,
    userEmail: string,
) => Promise<StatusDataContainer<PasswordResetVerificationToken>>;
