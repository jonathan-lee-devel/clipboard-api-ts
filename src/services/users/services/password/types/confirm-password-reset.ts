import {PasswordResetStatusDto} from '../dtos/PasswordResetStatusDto';
import {StatusDataContainer} from '../../../../../dtos/StatusDataContainer';

export type ConfirmPasswordResetFunction = (
    tokenValue: string,
    password: string,
) => Promise<StatusDataContainer<PasswordResetStatusDto>>;
