import { FC } from "react";
import { TVideo } from "../../@types";
import useDevice from "../../hooks/useDevice";

type Props = {
    video: TVideo
};

const ThumbnailImage: FC<Props> = ({ video }) => {
    const {isDesktop, isMobile, isTablet} = useDevice()
    
    const getImageSrc = () => {
        if (isDesktop()) return video.snippet.thumbnails.high.url
        if (isTablet()) return video.snippet.thumbnails.medium.url
        if (isMobile()) return video.snippet.thumbnails.default.url
    }
    
    return <img className='thumbnail-mage' src={getImageSrc()} alt={video.snippet.title} />
};

export default ThumbnailImage;
