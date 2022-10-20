import axios from 'axios';
import {  useState } from 'react';
import './SubscribeStyle.css'

function Subscribe() {

    const [subscriber, setSubscriber] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState('');

    const handleChange = (event) => {
        setSubscriber({ ...subscriber, [event.target.name]: event.target.value })
    }

    const handleSubscriber = async (event) => {
        event.preventDefault();
        let response= await axios.post('http://localhost:4000/api/users/register', {
                name: subscriber.username,
                email: subscriber.email,
                password: subscriber.password
            })
            try {
                if(response.status = 200){
                    console.log('logged in successfully')
                }
            }
        catch (error) {
            console.log('error', error);
            setError(error);
        }

    }

    return (
        <div className='subscribe-page'>
            <div className='subscribe-page-header'>HotStar Movie</div>
            <div className='subscribe-box'>
                <div className='subscribe-form'>
                    <div className='row'>
                        <label htmlFor='username' >Username : </label><br />
                        <input
                            type='text'
                            name='username'
                            value={subscriber.username}
                            placeholder='please eneter your name'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='row'>
                        <label htmlFor='email' >Email : </label><br />
                        <input
                            type='email'
                            name='email'
                            value={subscriber.email}
                            placeholder='please eneter your email'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='row'>
                        <label htmlFor='password' >Password : </label><br />
                        <input
                            type='password'
                            name='password'
                            value={subscriber.password}
                            placeholder='please provide a password'
                            onChange={handleChange}
                        />
                    </div >
                </div>
                
            </div >
            <button className='submit-subscriber-button' onClick={handleSubscriber}>Subscribe</button>
        </div >
    )
}

export default Subscribe;