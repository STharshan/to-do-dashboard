import React from 'react';
import './header.css';
import bell from '../../images/Notifications.svg'
import pro from '../../images/Profile.svg'
import arrow from '../../images/Chevron-down.svg'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
            <h4>Dashboard</h4>
            <img id='bell' src={bell}/>
            <img id='pro' src={pro}/>
            <img id='arrow' src={arrow}/>
      </div>
    );
  }
}

export default Header;
