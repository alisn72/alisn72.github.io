
function useDevice() {
    const MAX_MOBILE_WIDTH = 813;
    const MAX_TABLET_WIDTH = 1023;

    const isTouchDevice = () =>
        'ontouchstart' in window ||
        'ontouchstart' in document.documentElement ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;
        
    const isMobile = () => window.innerWidth <= MAX_MOBILE_WIDTH;
    const isDesktop = () => window.innerWidth > MAX_TABLET_WIDTH;
    const isTablet = () => MAX_MOBILE_WIDTH < window.innerWidth && window.innerWidth <= MAX_TABLET_WIDTH;

    return {
        isTouchDevice,
        isMobile,
        isTablet,
        isDesktop
    };
}

export default useDevice;
