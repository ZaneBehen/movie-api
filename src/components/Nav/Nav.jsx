import './nav.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Nav = () => {
    const isSearchPage = "/search-movies" === window.location.pathname;
    

    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }


    return (
        <nav>
            <figure>
                <Link to="/">
                    <img src={logo} alt="" id="personal-logo" className="purple" />
                </Link>
            </figure>
            <ul className="nav__link--list">
                <li className="nav__link">
                    <Link to="/" className={`
                                nav__link--anchor
                                link__hover-effect
                                ${!isSearchPage ? "link__hover-effect--black" : undefined}
                                ${isSearchPage ? "link__hover-effect--black" : undefined}
                                ${isSearchPage ? "text--black" : undefined}`}
                                id={window.location.pathname === "/" ? 'active' : undefined}>
                        Home</Link>
                </li>
                <li className="nav__link">
                    <Link to="/search-movies" className={`
                                nav__link--anchor 
                                link__hover-effect 
                                ${!isSearchPage ? "link__hover-effect--black" : undefined}
                                ${isSearchPage ? "link__hover-effect--black" : undefined}
                                ${isSearchPage ? "text--black" : undefined}`}
                                id={window.location.pathname === "/search-movies" ? 'active' : undefined}>
                        Find a Show</Link>
                </li>
                <li className="nav__link">
                    <Link to="/contact" className={`
                                nav__link--anchor
                                nav__link--anchor-primary
                                ${isSearchPage ? "nav__link--anchor-secondary" : undefined}`}
                                id={window.location.pathname === "/search-movies" ? 'active' : undefined}>
                        Contact</Link>
                </li>
            </ul>
            <button 
                className="btn__menu"
                     onClick={openMenu}>
                <FontAwesomeIcon icon="bars" />
            </button>
            <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon="times" />
                </button>
                <ul className="menu__links">
                    <li className="menu__list">
                        <Link to="/" className="menu__link">Home</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/search-movies" className="menu__link">Show</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/contact" className="menu__link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
