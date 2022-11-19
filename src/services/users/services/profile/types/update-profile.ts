import {StatusDataContainer} from '../../../../../dtos/StatusDataContainer';
import {ProfileDto} from '../dtos/ProfileDto';
import {User} from '../../../models/User';

export type UpdateProfileFunction = (
    requestingUser: User,
    email: string,
    firstName: string,
    lastName: string,
) => Promise<StatusDataContainer<ProfileDto>>;
