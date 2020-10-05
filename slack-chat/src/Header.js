import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

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
        {/* Avatar for logged in user */}
        {/* Time Icon */}
      </div>
      <div className='header__search'>
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