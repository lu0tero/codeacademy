import Track from '../Track/Track';

/* Css */
import './TrackList';

const TrackList = ({tracks, onAdd, isRemoval, onRemove}) => {
  return (
    <div className="tracklist">
        {
          tracks.map(track => {
            return <Track track={track}
                key={track.id} 
                onAdd={onAdd}
                isRemoval={isRemoval}
                onRemove={onRemove}/>
          })
        }
    </div>
  )
}

export default TrackList;