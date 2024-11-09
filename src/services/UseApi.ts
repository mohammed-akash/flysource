"use client"
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify'; // Your existing Axios service
import axiosService from './AxiosService';
import Cookies from 'js-cookie';
import cryptoHelper from '../ClientHelper/crypto.Helper';
import { useRouter } from 'next/navigation';
interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useApi = <T,>(endpoint: string): UseApiResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const token = cryptoHelper.decryptText(Cookies.get('accessToken') ?? '');
  const router = useRouter()
  useEffect(() => {
    // Create a cancel token source to handle request cancellation
    const cancelTokenSource: any = axiosService.createCancelTokenSource();
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosService.makeRequest<T>(
          'GET',
          endpoint,
          undefined,
          {},
          token,
          cancelTokenSource
        );
        console.log(response)
        setData(response.data);
        setError(null);  // Clear any previous errors
      } catch (err: any) {
        if (axios.isAxiosError(err)) {
          if (axios.isCancel(err)) {
            toast.error('Request was canceled.');
          } else {
            const errorMessage = (err as AxiosError).message || 'An error occurred';
            toast.error(errorMessage);
            setError(errorMessage);
          }
        } else {
          if (err.message === 'AUTH_TOKEN_REQUIRED') {
            toast.info('Please Login to Access')
            router.push(`/signin?view=${btoa(window.location.href)}`)
          } else {
            toast.error(err.message)
          }
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelTokenSource.cancel('Request canceled due to component unmounting.');
    };
  }, [endpoint]);

  console.log(data)

  return {
    data,
    loading,
    error,
  };
};

export default useApi;
