"use client";
import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CancelTokenSource
} from 'axios';
import Cookies from 'js-cookie';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

class AxiosService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.addAuthorizationToken();
    }

    private addAuthorizationToken() {
        const token = Cookies.get('accessToken') ?? '';
        if (token) {
            this.axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
    }

    public async makeRequest<T>(
        method: HttpMethod,
        url: string,
        body?: any,
        config?: AxiosRequestConfig,
        token?: string,
        cancelTokenSource?: CancelTokenSource
    ): Promise<AxiosResponse<T>> {
        const requestConfig: AxiosRequestConfig = {
            method,
            url,
            data: body,
            ...config,
        };

        if (cancelTokenSource) {
            requestConfig.cancelToken = cancelTokenSource.token;
        }

        if (token && !requestConfig.headers?.['Authorization']) {
            requestConfig.headers = {
                ...requestConfig.headers,
                'Authorization': 'Bearer ' + token,
            };
        }

        try {
            const response = await this.axiosInstance.request<T>(requestConfig);
            return response;
        } catch (error: any) {
            if (error.response && error.response.status === 440) {
                Cookies.remove('accessToken');
                Cookies.remove('refreshToken');
                Cookies.remove('userdetails');
            }
            if (axios.isAxiosError(error)) {

                if (error.response) {
                    throw error.response.data;
                } else {
                    throw new Error('An Axios error occurred without a response');
                }
            } else {
                throw new Error('An unknown error occurred');
            }
        }
    }

    public createCancelTokenSource(): CancelTokenSource {
        return axios.CancelToken.source();
    }
}

const axiosService = new AxiosService();

export default axiosService;
