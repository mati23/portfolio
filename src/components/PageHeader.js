import '../css/foundation.css'

import React from 'react'

function PageHeader() {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li>Mateus Arruda</li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu button-group'>
          <button className='button'>PT</button>
          <button className='button'>EN</button>
          <button className='button'>日本語</button>
        </ul>
      </div>
    </div>);
}

export default PageHeader