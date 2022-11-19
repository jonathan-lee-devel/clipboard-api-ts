import {RegisterUserFunction} from '../types/register-user';
import {HttpController} from '../../../../../types/http-controller';
import {HttpRequest} from '../../../../../types/http-request';

export const makeRegisterUserController = (
    registerUser: RegisterUserFunction,
): HttpController => {
  return async function registerUserController(httpRequest: HttpRequest) {
    const registrationContainer = await registerUser(
        httpRequest.body.email,
        httpRequest.body.firstname,
        httpRequest.body.lastname,
        httpRequest.body.password,
    );
    return {
      httpStatus: registrationContainer.status,
      jsonBody: registrationContainer.data,
    };
  };
};
