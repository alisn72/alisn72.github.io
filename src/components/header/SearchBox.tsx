import { FC, memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants";

type Props = {
    visible: boolean
};

const SearchBox: FC<Props> = memo(({ visible }) => {
    const [text, setText] = useState<string>('')
    const history = useHistory()

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && text !== '') {
            history.push(`${Routes.RESULT}?query=${text}`)
            setText('')
        }
    }

    if (!visible) return null
    return (
        <div className='header__search-box-wrapper'>
            <input
                className='header__search-box'
                name='search'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setText(e.target.value) }}
                onKeyDown={onKeyDown}
                value={text}
                placeholder='Search'
            />
        </div>
    );
});

export default SearchBox;
