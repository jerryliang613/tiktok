import ReactPlayer from 'react-player';
import VideoSidebar from "./VideoSidebar";
import VideoFooter from './VideoFooter';

function Video({ video, channel, description, messages, likes, shares, messagenumber }) {
    return (
        <div className='video'>
            <div className="video_player">

                <ReactPlayer width='100%' height='100%' url={video} />
            </div>
            <VideoFooter channel={channel}
                description={description}
                messages={messages} />
            <VideoSidebar likes={likes}
                shares={shares}
                messages={messagenumber} />
        </div>
    )
}

export default Video

