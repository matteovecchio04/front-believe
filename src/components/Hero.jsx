import PlayIcon from './PlayIcon'

export default function Hero({ video }) {
  if (!video) return null
  return (
    <div className="hero" style={{ backgroundImage: `url(${video.thumbnail})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{video.title}</h1>
          <div className="hero-buttons">
            <button className="btn btn-play">
              <PlayIcon /> Play
            </button>
            <button className="btn btn-info">More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}
