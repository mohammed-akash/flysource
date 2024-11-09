import axios from 'axios';
import Cookies from 'js-cookie';
import axiosService from '../services/AxiosService';
import cryptoHelper from '../ClientHelper/crypto.Helper';

interface UsePostApiResult<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

interface UsePostApiConfig<T> {
    endpoint: string;
    body: T; // The body for the POST request
}

const usePostApi = async <T, R>({
    endpoint,
    body,
}: UsePostApiConfig<T>): Promise<UsePostApiResult<R>> => {
    const token = cryptoHelper.decryptText(Cookies.get('accessToken') ?? '');
    const requestConfig = {
        method: 'POST',
        url: endpoint,
        data: body,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': token } : {}),
        },
    };

    try {
        const response = await axiosService.makeRequest<R>(
            'POST',
            endpoint,
            body,
            {},
            token
        );
        return {
            data: response.data,
            error: null,
            loading: false,
        };
    } catch (err: any) {
        let errorMessage = err.message ?? 'An unknown error occurred.';
        if (axios.isAxiosError(err)) {
            if (err.response) {
                errorMessage = err.response.data?.message || 'An error occurred.';
            } else {
                errorMessage = err.message;
            }
        }
        return {
            data: null,
            error: errorMessage,
            loading: false,
        };
    }
};

export default usePostApi;
