import {ErrorDto} from '../../../../dtos/ErrorDto';

export type ErrorMessageToDtoFunction = (
    errorMessage: string,
) => ErrorDto;
