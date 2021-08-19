import React, { FC } from "react";
import useDevice from "../../hooks/useDevice";

type Props = {
  show: ('desktop' | 'mobile' | 'tablet')[]
};

const DeviceWrapper: FC<Props> = ({ show, children }) => {
  const { isDesktop, isMobile, isTablet } = useDevice()

  if ((isDesktop() && show.includes('desktop')) ||
    (isMobile() && show.includes('mobile')) ||
    (isTablet() && show.includes('tablet')))
    return <>{children}</>
  return null
};

export default DeviceWrapper;
