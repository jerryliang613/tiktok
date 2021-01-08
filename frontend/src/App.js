import Video from './components/Video';
import http from './axios';
import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  const [videos, setVideos] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    async function fetchPosts() {
      const response = await http.get();
      setVideos({
        data: response.data,
        loading: false
      });
      return response;
    };
    try {
      fetchPosts();
    } catch {
      setVideos({
        ...videos, loading: false
      })
    }

  }, []);
  if (videos.loading) return <div className='loading'><CircularProgress color='secondary' /> </div>
  return (
    <div className="app">
      <div className="app_video">
        {videos.data
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
