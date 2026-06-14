import PlayIcon from './PlayIcon'

export default function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} className="card-thumbnail" />
      <div className="card-overlay">
        <button className="card-play-btn" aria-label="Play">
          <PlayIcon size={14} />
        </button>
        <p className="card-title">{video.title}</p>
      </div>
    </div>
  )
}
