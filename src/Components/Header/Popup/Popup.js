import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './PopupStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Popup({ show }) {

    const navigate = useNavigate();

    const [user, setUser] = useState({ email: '', password: '' })
    const [error, setError] = useState('');

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }
    const handleLogin = event => {
        event.preventDefault();
        console.log(user);
        sendUserInfo();
    }

    const sendUserInfo = async () => {
        try {
            let response = await axios.post('http://localhost:4000/api/users/login',{ 
                email: user.email, 
                password: user.password })

            console.log('res',response);
            if(response.status==200){
                navigate('/watch-list');
            }
        }
        catch(error){
            console.log('error',error.message);
            setError('Incorrect credentials entered, Please try again...');
            setUser({ ...user,  email: '', password: ''  });
            console.log(user)
        }
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
                    <div><input type='email' name='email' placeholder='Email' value={user.email} required onChange={handleChange} /></div>
                    <div><label htmlFor='password'>Password</label></div>
                    <div><input type='password' name='password' placeholder='Password' value={user.password} required onChange={handleChange} /></div>
                    <button className='submit-button' onClick={handleLogin}>Submit</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Popup