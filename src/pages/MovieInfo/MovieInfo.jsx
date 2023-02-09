import { useNavigate, useParams } from 'react-router-dom';
import SelectedMovieDetails from '../../components/SelectedMovieDetails/SelectedMovieDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './movieInfo.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../../components/Nav/Nav';
import Recommended from '../../components/Recommended/Recommended';

const MovieInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const base_url = "https://image.tmdb.org/t/p/original"
    const [movieDetails, setMovieDetails] = useState([]);
    const [recommendedMovies, setRecommededMovies] = useState([]);

    useEffect(() => {
        async function fetchMovieDetails(userId) {
            const TypeSearch = localStorage.getItem("search") || "movie";
            const requests = await axios.get(`https://api.themoviedb.org/3/${TypeSearch}/${userId || id}?api_key=a68a1e716dc10887f9e01a8f4e4ee2b3&language=en-US`);
            const recommendedMoviesRequest = await axios.get(`https://api.themoviedb.org/3/${TypeSearch}/${userId || id}/recommendations?api_key=a68a1e716dc10887f9e01a8f4e4ee2b3&language=en-US&page=1`)
            setMovieDetails(requests.data);
            setRecommededMovies(recommendedMoviesRequest.data.results)
            return requests;
        }
        fetchMovieDetails(id);
    }, [id])
    return (
        <>
            <Nav />
            <section id="movieDetails">
                <main id="movieDetails__main">
                    <div className="movieDetails__container">
                        <div className="movieDetails__row">
                            <div className="movieDetails--top">
                                <Link to="/search-movies" className="movie__link">
                                    <FontAwesomeIcon icon="arrow-left" />
                                </Link>
                                <Link to="/search-movies" className="movie__link">
                                    <h2 className="movieDetails--title--top">Shows</h2>
                                </Link>
                            </div>
                            <SelectedMovieDetails movieDetails={movieDetails} base_url={base_url} />
                        </div>
                    </div>
                    {recommendedMovies.length !== 0 ? (<Recommended navigate={navigate} base_url={base_url} recommendedMovies={recommendedMovies} />) : (null)}
                </main>
            </section>
        </>
    )
}

export default MovieInfo
