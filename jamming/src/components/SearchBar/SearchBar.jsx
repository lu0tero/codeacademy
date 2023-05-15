import { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({onSearch}) => {

    const [term, setTerm] = useState('')
    
    const search = () => {
        onSearch(term)
    }

    const handleTermChange = event => {
        setTerm(event.target.value)
    }

    return (
        <div className="search-bar">
            <input onChange={handleTermChange} placeholder="Song, Album or Artist" />
            <button className="search-btn" onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;