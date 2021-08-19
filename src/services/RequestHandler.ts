import { AxiosError, AxiosRequestConfig } from 'axios';
import { TErrorResponse } from '../@types/apiTypes';
import CustomAxios from './CustomAxios';

const RequestHandler = {
    send: async <T>(request: AxiosRequestConfig): Promise<T> => {
        try {
            const res = await CustomAxios.request<T>(request)
            return res.data
        } catch (e) {
            return errorHandler(e)
        }
    }
}

const errorHandler = (e: AxiosError) => {
    const error: TErrorResponse = {
        status: e.response?.status || 0,
        errorCode: e.response?.data?.code || 0,
        message: e.response?.data?.messageEn || 'API Failed',
        data: e.response?.data || null,
        errorObject: e
    }
    throw error
}

export default RequestHandler