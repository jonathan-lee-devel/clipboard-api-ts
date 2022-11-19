import {StatusDataContainer} from '../../../../../dtos/StatusDataContainer';
import {RegistrationStatusDto} from '../dtos/RegistrationStatusDto';

export type ConfirmRegistrationFunction = (
    tokenValue: string,
) => Promise<StatusDataContainer<RegistrationStatusDto>>;
