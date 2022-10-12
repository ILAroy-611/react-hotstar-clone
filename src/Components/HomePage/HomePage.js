import './HomePageStyle.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from "../Header/Header";
import Slider from "./Slider/Slider";

function HomePage() {
    const [index, setIndex] = useState(5);
    const [slideArray, setSlideArray] = useState([])
    

    //async fucntion to fetch movie data for slider


    useEffect(() => {
        const getContent = async () => {
            let response = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=d47c6fb29996569421ade280220b7191')
            try {
                console.log('res', response)
                console.log('res', response.data.results)
                setSlideArray([...response.data.results]);
                console.log(slideArray);
            }
            catch (error) {
                console.log('error', error);
            }
        }
        getContent();
    }, [])

    return (
        <div>
            <Header />
            <Slider slideArray={slideArray} index={index} setIndex={setIndex} />
            <div className="movie-list-display-box">
                <div className="movie-list-display-row1">
                    {slideArray.map((movie, ind) => {
                        return (
                            <div className='movie-list-display-poster' key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${slideArray[ind]?.poster_path}`} alt='' width='200px' height='300px' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage;