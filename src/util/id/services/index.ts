import {makeGenerateId} from './generate-id';
import {loggerConfig} from '../../../config/logger/logger-config';

const logger = loggerConfig();

export const generatedId = makeGenerateId(logger);
