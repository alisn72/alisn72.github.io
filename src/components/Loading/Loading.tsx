import { FC, } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

type Props = {
  size?: number;
  color?: string;
  fullScreen?: boolean
};

const Loading: FC<Props> = (props) => {
  const defaultColor = '#eb3e48'

  return (
    <div className={`loading-wrapper ${props.fullScreen ? 'loading-fullscreen' : ''}`}>
      <PropagateLoader loading={true} color={props.color || defaultColor} size={props.size} />
    </div>
  );
};

Loading.defaultProps = {
  size: 15,
  fullScreen: false
};

export default Loading;
