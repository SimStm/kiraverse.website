import './index.css'

const YouTubeEmbed = ({ youtubeId }: { youtubeId: string }) => {
  return (
    <div className="video div-yt-video">
      <iframe
        className="iframe-yt-video"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeEmbed
