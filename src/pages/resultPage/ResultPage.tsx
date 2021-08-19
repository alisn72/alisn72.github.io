import { FC, useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import API from "../../services/APIs";
import { Loading, TryAgain, VideoThumbnail } from "../../components";
import InfiniteScroll from 'react-infinite-scroller';
import { TVideo } from "../../@types";
import './ResultPage.scss'

type Props = {};

const ResultPage: FC<Props> = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('query')
  const [nextPageToken, setNextPageToken] = useState<string>()
  const [showingData, setShowingData] = useState<TVideo[]>([])
  const { loading, error, result, retry } = useRequest(API.search, { query: query || '', nextPageToken })

  useEffect(() => {
    const updatedData = showingData.concat(result?.items || [])
    setShowingData(updatedData)
  }, [result])

  const onNext = () => {
    setNextPageToken(result?.nextPageToken)
  }

  if (loading && !result) return <Loading fullScreen />
  if (error) return <TryAgain onRetry={retry} text='Error on loading results' />
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={onNext}
      hasMore={!loading && !error && !!result?.nextPageToken}
      threshold={20}
      loader={<div className='load-more'><Loading /></div>}
    >
      <div className='items-wrapper'>
        {showingData.map(item => <VideoThumbnail key={item.id.videoId} video={item} />)}
      </div>
    </InfiniteScroll>
  );
};

export default ResultPage;
