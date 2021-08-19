import { useState, useEffect, useCallback } from 'react';
import { TErrorResponse } from '../@types/apiTypes';

const useRequest = <T, P, E>(APIFunction: (params?: P) => Promise<T>, params?: P, parser?: (response: T) => E) => {
    const [result, setResult] = useState<T>();
    const [parsedResult, setParsedResult] = useState<E>();
    const [error, setError] = useState<TErrorResponse>();
    const [loading, setLoading] = useState<boolean>(true);

    const call = useCallback(async () => {                
        try {
            setLoading(true)
            setError(undefined)
            const response = await APIFunction(params);
            setResult(response);
            if (parser) setParsedResult(parser(response))
        } catch (error) {
            setError(error as TErrorResponse);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [APIFunction, JSON.stringify(params), parser])

    useEffect(() => {
        call();
    }, [call]);

    return { result, parsedResult, error, loading, retry: call };
};

export default useRequest