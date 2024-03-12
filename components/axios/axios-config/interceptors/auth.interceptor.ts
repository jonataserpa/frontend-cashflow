// eslint-disable-next-line
import { AxiosRequestConfig } from "axios";

/**
 * Intercept all request submissions to add bearer token
 * @param request
 * @returns
 */
export function authInterceptor(
  request: any
) {
  // const { authenticationResult } = store.getState().auth;
  // if (!authenticationResult) {
  //   return request;
  // }

  // request.headers.Authorization = `Bearer ${authenticationResult.idToken}`;
  const token = localStorage.getItem("token");
  request.headers.Authorization = `Bearer ${token}`;
  return request;
}

export function loadingBefore(request: any) {
  // store.dispatch(allActions.loadingActions.setLoading(true));
  return request;
}

export function loadingAfter(response: any) {
  // store.dispatch(allActions.loadingActions.setLoading(false));
  return response;
}