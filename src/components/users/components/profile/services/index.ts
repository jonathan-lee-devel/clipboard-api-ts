import {makeGetProfile} from './get-profile';
import {UserModel} from '../../../models/User';
import {makeUpdateProfile} from './update-profile';
import {loggerConfig} from '../../../../../config/logger/logger-config';

const logger = loggerConfig();

export const getProfile = makeGetProfile(
    logger,
    UserModel,
);

export const updateProfile = makeUpdateProfile(
    logger,
    UserModel,
);
