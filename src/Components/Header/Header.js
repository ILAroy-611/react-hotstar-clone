import './HeaderStyle.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Popup from './Popup/Popup';

function Header() {

    const [showPopup, setShowpopup] = useState(false);
    const handlePopup =() =>{
        setShowpopup(!showPopup);
    }

    return (
        <div className='header'>
            <h3>Hotstar Movies</h3>
            <div className='search-box'>
                <input className='search' type='text' placeholder='Search' ></input>
                <SearchIcon></SearchIcon>
            </div>
            <div className='header-buttons'>
                <Link to='/subscribe'><button className='subscribe-button' >SUBSCRIBE</button></Link>
                <button className='login-button' onClick={handlePopup} >LOGIN</button>
                {showPopup && <Popup show={setShowpopup}/> }
            </div>
        </div>
    )
}

export default Header;