import {PasswordResetStatusDto} from '../dtos/PasswordResetStatusDto';
import {StatusDataContainer} from '../../../../../dtos/StatusDataContainer';

export type ResetPasswordFunction = (
    email: string,
) => Promise<StatusDataContainer<PasswordResetStatusDto>>;
