import { AxiosError } from "axios";

export type TSearchResponse = {
    kind: string
    etag: string
    nextPageToken: string
    prevPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    },
    items: TVideo[]
}

export type TVideo = {
    kind: string
    etag: string
    id: {
        kind: string
        videoId: string
    },
    snippet: {
        publishedAt: string
        channelId: string
        title: string
        description: string
        thumbnails: {
            default: TThumbnail
            medium: TThumbnail
            high: TThumbnail
        },
        channelTitle: string
        liveBroadcastContent: string
        publishTime: string
    }
}

export type TThumbnail = {
    url: string
    width: number
    height: number
}

export type TErrorResponse = {
    status: number
    errorCode: number
    message: string
    data?: any
    errorObject: AxiosError
}