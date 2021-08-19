import { FC } from "react";
import { IoRefresh } from 'react-icons/io5'
import './TryAgain.scss'

type Props = {
  onRetry: () => void;
  text: string;
};

const TryAgain: FC<Props> = ({ onRetry, text }) => {

  return (
    <div className='try-again-wrapper'>
      <span className='try-again-text'>{text}</span>
      <div className='try-again-btn' onClick={onRetry}>
        <span className='try-again-btn-text'>Try again!</span>
        <IoRefresh className='try-again-btn-icon' size={'2.5rem'} />
      </div>
    </div>
  );
};


export default TryAgain;
