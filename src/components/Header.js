import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return <h1 className='header'>{this.props.text}</h1>;
  }
}

export default Header;
