import express from 'express';
// eslint-disable-next-line max-len
import {confirmRegistrationController, registerUserController} from '../controllers';
import {registerUserValidationChain} from '../validation-chains/register-user';
import {loggerConfig} from '../../../../../config/logger/logger-config';
import {HttpRequestMethod} from '../../../../../enums/http-request-method';
import {configureRoute} from '../../../../../routes/configure-route';
// eslint-disable-next-line max-len
import {makeExpressCallback} from '../../../../../express-callbacks/express-callback';

// eslint-disable-next-line new-cap
const router = express.Router();

const logger = loggerConfig();

configureRoute(
    router,
    HttpRequestMethod.POST,
    '/',
    false,
    registerUserValidationChain,
    makeExpressCallback(logger, registerUserController),
);

configureRoute(
    router,
    HttpRequestMethod.GET,
    '/confirm/:tokenValue',
    false,
    [],
    makeExpressCallback(logger, confirmRegistrationController),
);

export {router as RegistrationRouter};
