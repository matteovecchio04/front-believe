import { useEffect, useState } from 'react'

export default function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3360/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>

      <div className="app">
        <h1 className="title">BelievePlay</h1>

        <div className="grid">
          {videos.map(video => (
            <div className="card" key={video.id}>
              <img className="card-img" src={video.thumbnail} />
              <p className="card-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}