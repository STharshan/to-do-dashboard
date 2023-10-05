import React from 'react';
import './sidebar.css';
import dashboard from '../../images/Dashboard.svg';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className='name'><span><h3>Acmy Solusion</h3></span></div>
                    <div className='dash-input'>
                        <img src={dashboard} />
                        <p>Dashboard</p>
                    </div>  
      </div>
    );
  }
}

export default Sidebar;
