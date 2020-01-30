import '../css/foundation.css'
import '../css/pageheader.css'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';



class PageHeader extends Component {
  changeLanguage = (languageIndex) => () => {
    localStorage['languages'] = languageIndex
    window.location.href = '/'
  };
  render() {
    return (
      <div className='top-bar navbar-dark'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='top-bar-logo'>
              <Link to="/">
                <div className='mateus'>{this.props.dataFromParent[localStorage['languages']].name}&nbsp;</div>
                <div className='arruda'>{this.props.dataFromParent[localStorage['languages']].nickName}</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <ul className='menu button-group'>
            <button className='button' onClick={this.changeLanguage(0)}>PT</button>
            <button className='button' onClick={this.changeLanguage(1)}>EN</button>
            <button className='button' onClick={this.changeLanguage(2)}>日本語</button>
          </ul>
        </div>
      </div>);
  }
}

export default PageHeader