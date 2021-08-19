import { AxiosRequestConfig } from "axios"
import { ERequestType, TSearchResponse } from "../@types"
import RequestHandler from "./RequestHandler"

const mutualConfig = (method: ERequestType): AxiosRequestConfig => {
    return {
        method,
        baseURL: 'https://youtube.googleapis.com',
        timeout: 15000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        },
    }
}

const API = {
    search: async (params?: { query: string, nextPageToken?: string }) => {
        var defaultParams = 'part=id,snippet&order=viewCount&maxResults=30&type=video&eventType=live'
        if (params?.nextPageToken) defaultParams = defaultParams + `&pageToken=${params.nextPageToken}`
        const config: AxiosRequestConfig = { url: `/youtube/v3/search?${defaultParams}&q=${params?.query}`, ...mutualConfig('get') }
        return (await RequestHandler.send<TSearchResponse>(config))
    },
}

export default API