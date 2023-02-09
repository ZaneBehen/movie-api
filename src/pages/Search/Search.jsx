import React from 'react'
import Display from '../../components/Display/Display'
import Movies from '../../components/Movies/Movies'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Search = () => {
    const searchInput = localStorage.getItem("homeSearch");
    const [searchValue, setSearchValue] = useState(localStorage.getItem("displaySearch"));
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    function handleSearch() {
        searchValue === [] ? setSearchValue(null) : renderMovies(searchValue);

        if (searchValue !== null) {
            localStorage.removeItem("homeSearch")
            localStorage.setItem("displaySearch", searchValue);
            searchValue !== "" && setLoading(true);
        }
    }

    async function renderMovies(searchValue) {
        const TypeSearch = localStorage.getItem("search") || "movie";
        
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${TypeSearch}?api_key=a68a1e716dc10887f9e01a8f4e4ee2b3&query=${searchValue || (searchInput ? searchInput : localStorage.getItem("displaySearch"))}`);

        setMovies(data.results); 
        setLoading(false)
        console.log(searchValue)
    }

    useEffect(() => {
        renderMovies();
    }, [])
    return (
        <>
            <Movies
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearch={handleSearch} />
            <Display movies={movies} loading={loading} />
        </>
    )
}

export default Search
