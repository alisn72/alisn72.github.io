import { FC, memo } from "react";
import { EThemes } from "../../@types";
import StorageService from "../../services/StorageService";
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

type Props = {
    onThemeChange: (theme: EThemes) => void;
};

const ThemeToggler: FC<Props> = memo(({ onThemeChange }) => {
    const theme = StorageService.get('THEME', 'light')

    return (
        <div className='theme-toggler' onClick={() => { onThemeChange(theme === 'light' ? 'dark' : 'light') }}>
            {theme === 'light'
                ? <IoSunnyOutline className='theme-toggler-icon' size='2.5rem' />
                : <IoMoonOutline className='theme-toggler-icon' size='2.5rem' />
            }
        </div>
    );
});

export default ThemeToggler;
