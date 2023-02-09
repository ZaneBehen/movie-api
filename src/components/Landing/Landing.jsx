import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeImg from '../../assets/undraw_horror_movie_3988.svg';
import './landing.css';

window.onload = function(){
    localStorage.setItem("search", "movie")
}

const Landing = ({ onSearch, setSearchValue, searchValue, loading }) => {
    return (
        <section id="landing">
            <header>
                <div className="landing__container">
                    <div className="landing__description">
                        <h1 className="landing__description--title">Australia's most awarded online streaming platform</h1>
                        <h2 className="landing__description--sub-title">Find your dream show with <span className="text--purple">Easy View</span></h2>
                        <div className="landing__form" >
                            <input
                                type="text"
                                placeholder="Search by title"
                                className="landing__description--input"
                                value={searchValue || ''}
                                onChange={(event) => setSearchValue(event.target.value)}
                                onKeyPress={(event) => event.key === 'Enter' && onSearch()} />
                            <div className="landing__search-btn"
                            onClick={() => onSearch()}>
                                {
                                    !loading ? (
                                        <FontAwesomeIcon icon="search" />
                                    ) : (
                                        <div className="landing-modal__overlay--loading">
                                            <FontAwesomeIcon icon="spinner" className="loading-state__spinner" />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={HomeImg} alt="" className="header__img" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing
