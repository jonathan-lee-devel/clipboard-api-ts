import {StatusDataContainer} from '../../../../../dtos/StatusDataContainer';
import {ProfileDto} from '../dtos/ProfileDto';
import {User} from '../../../models/User';

export type GetProfileFunction = (
    requestingUser: User,
    email: string,
) => Promise<StatusDataContainer<ProfileDto>>;
