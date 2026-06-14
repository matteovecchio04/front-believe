import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoRow from './components/VideoRow'

export default function App() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3360/api/videos')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch videos')
        return res.json()
      })
      .then(data => {
        setVideos(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-screen">
        <p>Could not load content — {error}</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <Hero video={videos[0]} />
      <main className="content">
        <VideoRow title="All Videos" videos={videos} />
      </main>
    </div>
  )
}
