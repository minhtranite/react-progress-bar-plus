import React from 'react';

const logoImg = require('../assets/images/logo.svg');

class Footer extends React.Component {
  render() {
    return (
      <footer className='layout-footer'>
        <div className='container'>
          <div className='text-center'><img width='40' src={logoImg}/></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
