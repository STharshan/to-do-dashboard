import React from 'react';
import './navbar.css';
import close from '../../images/Close.svg'
import style from '../../images/Vector.svg'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className='wel'>
        <h2>Welcome back, John Doe</h2>{<br/>}
            <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.<br/>
                <u>Look here for more information</u></p>
        </div>

                <img id='style' src={style}/>
                 <img id='close' src={close}/> 
      </div>
    );
  }
}

export default Navbar;
