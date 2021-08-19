import { FC } from "react"
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import './WatchPage.scss'

type Props = {};

const WatchPage: FC<Props> = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className='watch-wrapper'>
      <YouTube
        videoId={id}
        containerClassName='video-player-container'
        className='video-player'
        opts={{ playerVars: { autoplay: 1 } }}
      />
    </div>
  );
};

export default WatchPage;
