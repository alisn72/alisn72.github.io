import { FC } from "react";
import { EThemes } from "../../@types";
import Logo_light from "../../assets/images/logo-light.png";
import Logo_dark from "../../assets/images/logo-dark.png";
import Logo_mobile from "../../assets/images/logo-mobile.png";
import StorageService from "../../services/StorageService";
import useDevice from "../../hooks/useDevice";
import { IoSearchOutline } from 'react-icons/io5'
import "./Header.scss";
import ThemeToggler from "./ThemeToggler";
import SearchBox from "./SearchBox";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Routes } from "../../constants";

type Props = {
    onThemeChange: (theme: EThemes) => void;
};

const Header: FC<Props> = ({ onThemeChange }) => {
    const [searchBarVisible, setSearchBarVisability] = useState<boolean>(false)
    const { isDesktop, isMobile } = useDevice()
    const { pathname } = useLocation();
    const history = useHistory()
    const theme = StorageService.get('THEME', 'light')


    const getLogo = () => {
        if (isDesktop()) return theme === 'light' ? Logo_light : Logo_dark
        return Logo_mobile
    }
    const onClickLogo = () => {
        history.push(Routes.ROOT)
    }

    return (
        <div className='header'>
            <div className='header-wrapper'>
                <img className='header-logo' alt='logo' src={getLogo()} onClick={onClickLogo} />

                <SearchBox visible={pathname !== Routes.ROOT && (!isMobile() || searchBarVisible)} />

                <div className='header-action-buttons'>
                    {isMobile() && pathname !== Routes.ROOT && <IoSearchOutline onClick={() => { setSearchBarVisability(v => !v) }} className='header-search-icon' size='2.5rem' />}
                    <ThemeToggler onThemeChange={onThemeChange} />
                </div>
            </div>
        </div>
    );
};

export default Header;
