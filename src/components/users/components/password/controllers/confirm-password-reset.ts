import {HttpController} from '../../../../../types/http-controller';
import {HttpRequest} from '../../../../../types/http-request';
import {ConfirmPasswordResetFunction} from '../types/confirm-password-reset';

export const makeConfirmPasswordResetController = (
    confirmPasswordReset: ConfirmPasswordResetFunction,
): HttpController => {
  return async function confirmPasswordResetController(
      httpRequest: HttpRequest,
  ) {
    const passwordContainer = await confirmPasswordReset(
        httpRequest.params.tokenValue,
        httpRequest.body.password,
    );
    return {
      httpStatus: passwordContainer.status,
      jsonBody: passwordContainer.data,
    };
  };
};
