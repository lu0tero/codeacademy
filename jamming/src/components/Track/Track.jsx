import './Track.css'

const Track = ({isRemoval, track, onAdd, onRemove}) => {

    const renderAction = () => {
        if(isRemoval) {
            return <button className='track-action' onClick={removeTrack}>-</button>
        } else {
            return <button className='track-action' onClick={addTrack}>+</button>
        }
    }

    const addTrack = () => {
        onAdd(track)
    }

    const removeTrack = () => {
        onRemove(track)
    }

  return (
    <div className='track'>
        <div className='track-information'>
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
        </div>
        {renderAction()}
    </div>
  )
};

export default Track;