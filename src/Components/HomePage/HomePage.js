import './HomePageStyle.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from "../Header/Header";
import Slider from "./Slider/Slider";
import MovieRow from './MovieRow/MovieRow';

function HomePage() {
    const [index, setIndex] = useState(0);
    const [slideArray, setSlideArray] = useState([]);
    const [upcomingMovie, setUpcomingMovie] = useState([]);
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularTVShows, setPopularTVShows] = useState([]);
    const [topRatedMovie, setTopRatedMovie] = useState([]);

    //async fucntion to fetch movie data for slider


    useEffect(() => {
        const getTrendingMovieList = async () => {
            let response = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=d47c6fb29996569421ade280220b7191');
            
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
        const getUpcomingMovieList = async () => {
            
            let upcomingRes= await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d47c6fb29996569421ade280220b7191&language=en-&language=en-US&page=1');
            
            try {
                setUpcomingMovie([...upcomingRes.data.results])
            }
            catch (error) {
                console.log('error', error);
            }
        }
        const getPopularMovieList = async () => {
            let popularRes= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d47c6fb29996569421ade280220b7191&language=en-&language=en-US&page=1');
            try {
                setPopularMovie([...popularRes.data.results])
            }
            catch (error) {
                console.log('error', error);
            }
        }
        const getPopularTVShowsList = async () => {
            let popularTvRes = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=d47c6fb29996569421ade280220b7191&language=en-&language=en-US&page=1')
            try {
                setPopularTVShows([...popularTvRes.data.results])
            }
            catch (error) {
                console.log('error', error);
            }
        }
        getTrendingMovieList();
        getUpcomingMovieList();
        getPopularMovieList();
        getPopularTVShowsList();
    }, [])

    return (
        <div>
            <Header />
            <Slider slidesArray={slideArray} index={index} setIndex={setIndex} />
            <div className="movie-list-display-box">
                <MovieRow movieRow={slideArray} title='Trending Movies'/>
                <MovieRow movieRow={upcomingMovie} title='Upcoming Movies'/>
                <MovieRow movieRow={popularMovie} title='Popular Movies'/>
                <MovieRow movieRow={popularTVShows} title='Popular TV Shows'/>
            </div>
        </div>
    )
}

export default HomePage;