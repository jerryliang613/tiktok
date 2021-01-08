import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar({ likes, shares, messages }) {
    const [like, setLike] = useState(false)
    return (
        <div className='videosidebar'>
            <div className="videosidebar_button">
                {like ? <FavoriteIcon onClick={() => setLike(false)}
                    fontSize='large' />
                    : <FavoriteBorderIcon
                        onClick={() => setLike(true)}
                        fontSize='large' />}
                <p>{like ? likes + 1 : likes}</p>
            </div>
            <div className="videosidebar_button">
                <MessageIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className="videosidebar_button">
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>

        </div>
    )
}

export default VideoSidebar
