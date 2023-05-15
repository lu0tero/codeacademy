import TrackList from '../TrackList/TrackList';

/* Css */
import './Playlist.css'

const Playlist = ({playlistName, playlistTracks, onRemove, onNameChange, onSave}) => {

    const handleNameChange = event => {
        onNameChange(event.target.value)
    }

    return (
        <div className="playlist">
            <input defaultValue={playlistName} onChange={handleNameChange} />
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/> 
            <button className="playlist-save" onClick={onSave}>Save to Spotify</button>
        </div>
    )
};

export default Playlist;