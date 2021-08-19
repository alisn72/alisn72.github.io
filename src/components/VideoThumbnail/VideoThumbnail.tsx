import { FC } from "react";
import { useHistory } from "react-router-dom";
import { TVideo } from "../../@types";
import ThumbnailImage from "./ThumbnailImage";
import './VideoThumbnail.scss'

type Props = {
    video: TVideo
};

const VideoThumbnail: FC<Props> = ({ video }) => {
    const history = useHistory()

    const onClick = () => {
        history.push(`/watch/${video.id.videoId}`)
    }
    return (
        <div className='video-thumbnail-wrapper' onClick={onClick}>
            <ThumbnailImage video={video} />
            <span className='video-thumbnail-title'>{video.snippet.title}</span>
        </div>
    );
};


export default VideoThumbnail;
