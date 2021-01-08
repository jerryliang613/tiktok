import Video from './components/Video';
import http from './axios';
import { useState, useEffect } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await http.get();
      setVideos(response.data);
      return response;
    };
    fetchPosts();

  }, [])
  return (
    <div className="app">
      <div className="app_video">
        {videos
          .map((video, index) => <Video
            key={index}
            video={video.url}
            channel={video.channel}
            messages={video.messages}
            likes={video.likes}
            shares={video.shares}
            messagenumber={video.messageno}
            description={video.description}
          />)}

      </div>
    </div>
  );
}

export default App;
