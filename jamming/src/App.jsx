import { useState } from 'react';

/* Components */
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

import Spotify from '../src/util/Spotify';

import './App.css';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([])

  const search = term => {
    Spotify.search(term).then(setSearchResults)
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }

  const addTrack = track => {
    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks((prevTracks) => [...prevTracks, track])
  }

  const removeTrack = track => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }
  
  const updatePlaylistName = name => {
    setPlaylistName(name)
  }

  return (
    <main className='app'>
      <Header/>
      <SearchBar onSearch={search}/>

      <div className='app-playlist'>
        <SearchResults searchResults={searchResults} onAdd= {addTrack}/>
        <Playlist playlistTracks={playlistTracks}
         playlistName={playlistName}
         onRemove={removeTrack}
         onNameChange={updatePlaylistName}
         onSave={savePlaylist}/>
      </div>
    </main>
  )
}

export default App;
