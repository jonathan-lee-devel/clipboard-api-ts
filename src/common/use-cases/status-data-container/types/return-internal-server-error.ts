import {StatusDataContainer} from '../../../../dtos/StatusDataContainer';

export type ReturnInternalServerErrorFunction =
    () => StatusDataContainer<undefined>;
