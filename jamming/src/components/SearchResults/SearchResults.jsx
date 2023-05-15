import TrackList from '../TrackList/TrackList';

/* Css */
import './SearchResults.css'

const SearchResults = ({searchResults, onAdd}) => {
    return(
        <div className="search-results">
            <h2>Results</h2>
            <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false}/>
        </div>
    )
}

export default SearchResults;