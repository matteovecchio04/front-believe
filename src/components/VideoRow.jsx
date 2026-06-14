import VideoCard from './VideoCard'

export default function VideoRow({ title, videos }) {
  return (
    <section className="video-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-scroll">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}
