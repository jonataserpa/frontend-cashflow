import { Environment } from "@/components/environment";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  authInterceptor,
  loadingAfter,
  loadingBefore,
} from "./interceptors/auth.interceptor";
import { errorInterceptor } from "./interceptors/error.interceptor";

export class AxiosService {
  axiosInstance: AxiosInstance;
  multiPartFormDataConfig: AxiosRequestConfig = {
    baseURL: Environment.URL_BASE,
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  constructor() {
    const APP_ACCESS_TOKEN = this.getToken();

    const axiosConfig: AxiosRequestConfig = {
      baseURL: Environment.URL_BASE,
      headers: {
        Authorization: `Bearer ${APP_ACCESS_TOKEN}`,
      },
    };

    this.axiosInstance = axios.create(axiosConfig);
    this.axiosInstance.interceptors.request.use(loadingBefore);
    this.axiosInstance.interceptors.response.use(loadingAfter);
  }

  getToken() {
    const cookies = document.cookie.split(";");
    let token = "";
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`token=`)) {
        const value = cookie.split("=");
        token = value[1];
      }
    }
    return token;
  }

  setBearerToken(bearerToken: string) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${bearerToken}`;
  }

  /**
   * Use auth interceptor
   */
  addAuthInterceptor() {
    this.axiosInstance.interceptors.request.use(authInterceptor);
  }

  /**
   * Use error interceptor
   * @param dispatch
   */
  addErrorInterceptor() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => errorInterceptor(error)
    );
  }

  /**
   * Apply the use of all interceptors in the application
   * @param dispatch
   */
  useInterceptors() {
    this.addAuthInterceptor();
    this.addErrorInterceptor();
  }

  async get(url: string, params?: any): Promise<any> {
    return this.axiosInstance.get(url, params);
  }

  async post(url: string, params?: any): Promise<any> {
    return this.axiosInstance.post(url, params);
  }

  async postT<Body, Result>(
    url: string,
    params?: Body,
    customConfig?: AxiosRequestConfig
  ): Promise<Result> {
    const response = await this.axiosInstance.post(url, params, customConfig);
    return response.data;
  }

  async put(url: string, params: any): Promise<any> {
    return this.axiosInstance.put(url, params);
  }

  async putT<Body, Result>(url: string, params: Body): Promise<Result> {
    const response = await this.axiosInstance.put(url, params);
    return response.data;
  }

  async delete(url: string, params: any): Promise<any> {
    return this.axiosInstance.delete(url, params);
  }

  async patch(url: string, params: any): Promise<any> {
    return this.axiosInstance.patch(url, params);
  }
}

export const ApiServiceFactory = {
  create: () => new AxiosService(),
};
