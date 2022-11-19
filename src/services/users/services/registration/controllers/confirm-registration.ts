import {ConfirmRegistrationFunction} from '../types/confirm-registration';
import {HttpController} from '../../../../../types/http-controller';
import {HttpRequest} from '../../../../../types/http-request';

export const makeConfirmRegistrationController = (
    confirmRegistration: ConfirmRegistrationFunction,
): HttpController => {
  return async function confirmRegistrationController(
      httpRequest: HttpRequest,
  ) {
    const registrationContainer = await confirmRegistration(
        httpRequest.params.tokenValue,
    );
    return {
      httpStatus: registrationContainer.status,
      jsonBody: registrationContainer.data,
    };
  };
};