import {GetProfileFunction} from '../types/get-profile';
import {HttpController} from '../../../../../types/http-controller';
import {HttpRequest} from '../../../../../types/http-request';

export const makeGetProfileController = (
    getProfile: GetProfileFunction,
): HttpController => {
  return async function getProfileController(httpRequest: HttpRequest) {
    const profileContainer = await getProfile(
        httpRequest.user,
        httpRequest.user.email,
    );
    return {
      httpStatus: profileContainer.status,
      jsonBody: profileContainer.data,
    };
  };
};
