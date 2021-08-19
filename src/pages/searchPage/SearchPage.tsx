import { FC, useState } from "react"
import Logo from '../../assets/images/logo-mobile.png'
import { IoSearchOutline } from 'react-icons/io5'
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants";
import './SearchPage.scss'

type Props = {};

const SearchPage: FC<Props> = () => {
  const [text, setText] = useState<string>('')
  const history = useHistory()

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') submit()
  }

  const submit = () => {
    if (text !== '') history.push(`${Routes.RESULT}?query=${text}`)
  }

  return (
    <div className='search-page-wrapper'>
      <img className='search-page-logo' src={Logo} alt='logo' />
      <div className='search-page-search-box'>
        <input
          className='search-page-input'
          name='search'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setText(e.target.value) }}
          onKeyDown={onKeyDown}
          value={text}
          placeholder='Search'
        />
        <IoSearchOutline className='search-page-button' size='2.5rem' onClick={submit} />
      </div>
    </div>
  );
};

export default SearchPage;
