import { Environment } from "@/components/environment";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { authInterceptor, loadingAfter, loadingBefore } from "./interceptors/auth.interceptor";
import { errorInterceptor } from "./interceptors/error.interceptor";


class AxiosService {
  axiosInstance: AxiosInstance;

  multiPartFormDataConfig: AxiosRequestConfig = {
    baseURL: Environment.URL_BASE,
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  constructor() {
    let APP_ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiSm9uYXRhIiwicm9sZSI6ImZyZWUiLCJpYXQiOjE3MTAyNjA2NjEsImV4cCI6MTcxMDM0NzA2MX0.wcnh-LBMfu6tocgYVitRnzL2ilrJ5As0ZMBBn5Yn3-U`

    /*if (APP_ACCESS_TOKEN === "undefined") {
      APP_ACCESS_TOKEN = "";
      localStorage.removeItem("APP_ACCESS_TOKEN");
    }*/

    const axiosConfig: AxiosRequestConfig = {
      baseURL: Environment.URL_BASE,
      headers: {
        Authorization: `Bearer ${
          APP_ACCESS_TOKEN !== null ? APP_ACCESS_TOKEN : ""
        }`,
      },
    };

    this.axiosInstance = axios.create(axiosConfig);
    this.axiosInstance.interceptors.request.use(loadingBefore);
    this.axiosInstance.interceptors.response.use(loadingAfter);
  }

  setBearerToken(bearerToken: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
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

const ApiService: AxiosService = new AxiosService();

export { ApiService };