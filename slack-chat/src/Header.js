import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar
          className='header_avater'
          alt={"Me"}
          // src={}
          />
        <AccessTimeIcon />
      </div>
      <div className='header__search'>
        <SearchIcon />
        <input placeholder='search here'></input>
        {/* Search Icon */}
        {/* Input */}
      </div>
      <div className='header__right'>
        {/* Help Icon */}
      </div>
    </div>
  );
}

export default Header