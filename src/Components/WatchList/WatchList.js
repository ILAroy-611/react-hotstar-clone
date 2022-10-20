import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from '../../AxiosConfig'
import './WatchListStyle.css';

function WatchList() {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")

    async function userAuth() {
        let token = localStorage.getItem("token");
        token ? setIsLoggedIn(true) : setIsLoggedIn(false);
        instance.defaults.headers.common['Authorization'] = `${token}`;
        let userDetails = await instance.get(`auth/user`);

        try {
            console.log('success');
            setUserName(userDetails.data.name)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userAuth()
    }, [])


    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
    }
    return (
        <>
            {isLoggedIn ?
                <div className='watchlist-page'>
                    <div className="watchlist-header">
                        <div className="watchlist-logo"><Link to='/'>Hotstar Movies</Link></div>
                        <div className="watchlist-user-account">
                            <div><h3>Hi {userName}</h3></div>
                            <div><button onClick={handleLogout} >Logout</button></div>
                        </div>

                    </div>
                    <div className="watchlist-container">
                        Welcome to WatchList Page...
                    </div>
                </div>
                :
                <div className="watchlist-container">
                    <h1>Please login to add your favorite movies to the watchlist...</h1>
                </div>
            }
        </>
    )


}

export default WatchList;