import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './PopupStyle.css';

function Popup({ show }) {

    const [user, setUser] = useState({ username: '', pword: '' })
    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }
    const handleLogin = event => {
        event.preventDefault();
        console.log(user);
    }

    const handlePopupClose = () => {

    }

    return (
        <div className='popup-page'>
            <div className='popup-content'>
                <div className='pop-up-header'>
                    <div className='close-icon' onClick={() => show()}><CloseIcon /></div>
                    <div className='title-box'><h4>Login to Continue..</h4></div>
                </div>
                <form className='popup-form'>
                    <div><label htmlFor='email'>Email</label></div>
                    <div><input type='email' name='username' placeholder='Email' onChange={handleChange} /></div>
                    <div><label htmlFor='password'>Password</label></div>
                    <div><input type='password' name='pword' placeholder='Password' onChange={handleChange} /></div>
                    <button className='submit-button' onClick={handleLogin}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Popup