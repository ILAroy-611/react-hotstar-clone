import './HeaderStyle.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login/Login';

function Header() {

    const [showPopup, setShowpopup] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    let token = localStorage.getItem("token");
    const handlePopup = () => {
        setShowpopup(!showPopup);
    }

    return (
        <>
            {token ?
                <div className='header'>
                    <h3>Hotstar Movies</h3>
                    <div className='search-box'>
                        <input className='search' type='text' placeholder='Search' ></input>
                        <SearchIcon></SearchIcon>
                    </div>
                    <div className='header-buttons'>
                        <Link to='/subscribe'><button className='subscribe-button' >SUBSCRIBE</button></Link>
                        <div className='account' onMouseEnter={()=>setShowTooltip(true)} >Account</div>
                        {showTooltip && <div className='account-options' onMouseLeave={()=>setShowTooltip(false)}>
                            <ul>
                                <li><Link to='/watch-list'>Watch-List</Link></li>
                                <li onClick={()=>localStorage.removeItem("token")}><Link to='/'>LogOut</Link></li>

                            </ul>
                        </div>}
                    </div>
                </div>
                :
                <div className='header'>
                    <h3>Hotstar Movies</h3>
                    <div className='search-box'>
                        <input className='search' type='text' placeholder='Search' ></input>
                        <SearchIcon></SearchIcon>
                    </div>
                    <div className='header-buttons'>
                        <Link to='/subscribe'><button className='subscribe-button' >SUBSCRIBE</button></Link>
                        <button className='login-button' onClick={handlePopup} >LOGIN</button>
                        {showPopup && <Login show={setShowpopup} />}
                    </div>
                </div>
            }
        </>
    )
}

export default Header;