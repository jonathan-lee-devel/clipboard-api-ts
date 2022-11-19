import {makeHandleExistingUser} from './inner/handle-existing-user';
import {UserModel} from '../../../models/User';
// eslint-disable-next-line max-len
import {makeGenerateRegistrationVerificationToken} from './generate-registration-verification-token';
// eslint-disable-next-line max-len
import {RegistrationVerificationTokenModel} from '../models/RegistrationVerificationToken';
import {makeRegisterUser} from './register-user';
// eslint-disable-next-line max-len
import {encodePassword, generatePasswordResetVerificationToken} from '../../password/services';
// eslint-disable-next-line max-len
import {PasswordResetVerificationTokenModel} from '../../password/models/PasswordResetVerificationToken';
import {makeConfirmRegistration} from './confirm-registration';
import {loggerConfig} from '../../../../../config/logger/logger-config';
import {sendMail} from '../../../../../util/email/exports';

const logger = loggerConfig();

const handleExistingUser = makeHandleExistingUser(
    logger,
    UserModel,
    RegistrationVerificationTokenModel,
    PasswordResetVerificationTokenModel,
);

const generateRegistrationVerificationToken =
    makeGenerateRegistrationVerificationToken(
        logger,
        RegistrationVerificationTokenModel,
    );

export const registerUser = makeRegisterUser(
    logger,
    handleExistingUser,
    generateRegistrationVerificationToken,
    generatePasswordResetVerificationToken,
    encodePassword,
    UserModel,
    sendMail,
);

export const confirmRegistration = makeConfirmRegistration(
    logger,
    RegistrationVerificationTokenModel,
    UserModel,
);
