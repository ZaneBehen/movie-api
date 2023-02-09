import React from 'react'
import Movie from '../ui/Movie/Movie';
import './display.css';
import EmptyDisplay from '../../assets/undraw_searching.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Filter from '../Filter/Filter';


const Display = ({ movies, loading }) => {
    const homeSearch = localStorage.getItem("homeSearch");
    const displaySearch = localStorage.getItem("displaySearch");

    return (
        <section id="display" >
            <div className="display__container">
                <div className="row">
                    <div className="display__heading-section">
                        <h1 className="display__search--header">Search results for <span className='text--purple'>"{homeSearch || displaySearch}"</span></h1>
                        <div className="display__price-filter--wrapper">
                        <Filter id="filter" />
                        </div>
                    </div>
                    <div className="display-movies">
                        {
                            !loading ? (
                                <>
                                    {((homeSearch || displaySearch) !== null && (homeSearch || displaySearch) !== "" && (movies[0]) !== undefined) ? 
                                    movies
                                        .slice(0, 8)
                                        .map((movie) =>
                                            <Movie movie={movie} key={movie.id} />
                                        ) : (
                                        (
                                            <div className="display__empty">
                                                <img src={EmptyDisplay} alt="" className="display__empty--img" />
                                                <h1 className='display__empty--description'>Could not find any matches related to your search.</h1>
                                                <p className='display__empty--sub-description'>Try searching again</p>
                                            </div>
                                        )
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className="landing-modal__overlay--loading display__spinner">
                                        <FontAwesomeIcon icon="spinner" className="loading-state__spinner" />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Display
