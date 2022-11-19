import express from 'express';
// eslint-disable-next-line max-len
import {updateProfileValidationChain} from '../validation-chains/update-profile';
import {getProfileController, updateProfileController} from '../controllers';
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
    HttpRequestMethod.GET,
    '/',
    true,
    [],
    makeExpressCallback(logger, getProfileController),
);

configureRoute(
    router,
    HttpRequestMethod.PATCH,
    '/update',
    true,
    updateProfileValidationChain,
    makeExpressCallback(logger, updateProfileController),
);

export {router as ProfileRouter};
